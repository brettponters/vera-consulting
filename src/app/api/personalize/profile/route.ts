import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import {
  rateLimit,
  clientIp,
  MAX_NAME_LEN,
  MIN_NAME_LEN,
} from "@/lib/personalizeLimit";
import { narrateSearch } from "@/lib/searchNarration";
import { painsFor } from "@/data/painPoints";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * POST /api/personalize/profile  (streaming)
 *
 * The single business lookup. Fetches the homepage when given a URL and lets
 * Haiku web-search to identify the business, then returns a short profile plus
 * 6 generated, business-specific pain points. Streams "> Searching/Reading"
 * lines live (shown on the "reading your business" step), then a final JSON
 * line. The client holds the profile and passes it to /api/personalize so the
 * answer reuses this lookup WITHOUT searching again.
 *
 * Falls back to hardcoded archetype pains whenever lookup fails, the key is
 * missing, the model can't identify the business, or rate limits hit.
 */

const MODEL = "claude-haiku-4-5";
const FETCH_TIMEOUT_MS = 5000;
const SITE_TEXT_CAP = 3000;

const SYSTEM = `VERA helps real estate agents, teams, and brokers put agentic AI to work, by building it with them or coaching them to do it themselves. You power a website feature that suggests a realtor's biggest day-to-day pain points.

The visitor is a real estate professional. You are given their name, brokerage, or website, and when available text from their site. Use the web_search tool whenever you are not sure of their niche or market, or the website text is thin or missing. Work out what kind of agent they are (residential, luxury, commercial, property management, new construction, a team or brokerage) and the market they work, then list the pain points a realtor running THIS kind of practice most likely feels: the repetitive, time-draining, deal-limiting work that an AI agent could take over.

Output ONLY a JSON object. No prose, no markdown, no code fences:
{"profile": string, "pains": string[]}
- profile: one plain sentence naming the kind of real estate they do and the market they serve, as specifically as the information allows.
- pains: exactly 6 pain points. Each 4 to 8 words, concrete and in the agent's own voice (for example "Following up with leads before they go cold", "Listing descriptions eat my evenings", "Showings and paperwork are all manual", "Staying top of mind with past clients"). Each must be core to how THIS agent actually spends their time and something an AI agent could realistically take on. Stay inside the real estate world; do not pad with generic back-office filler. If you only have a vague sense of them, prefer the everyday agent's pains over invented specifics.

If the name signals a niche (words like "luxury", "commercial", "property management", "realty group", "new construction"), use that. Only return {"profile":"","pains":[]} when there is truly nothing to go on. Never invent specific facts about a real named person or brokerage; when unsure, speak to the most likely kind of agent, not made-up details. No em-dashes.`;

function isBlockedHost(host: string): boolean {
  const h = host.toLowerCase().replace(/^\[|\]$/g, "");
  if (h === "localhost" || h.endsWith(".localhost")) return true;
  if (h === "::1" || h === "0.0.0.0") return true;
  if (/^(127\.|10\.|0\.|169\.254\.|192\.168\.)/.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(h)) return true;
  return false;
}

function toUrl(input: string): string | null {
  let s = input.trim();
  if (!/^https?:\/\//i.test(s)) {
    if (!/^[\w-]+(\.[\w-]+)+/.test(s)) return null; // not domain-like
    s = `https://${s}`;
  }
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    if (isBlockedHost(u.hostname)) return null;
    return u.toString();
  } catch {
    return null;
  }
}

async function fetchSiteText(url: string): Promise<string | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "VERA-site-reader/1.0 (+https://veraconsulting.co)",
      },
    });
    if (!res.ok) return null;
    if (!(res.headers.get("content-type") || "").includes("text/html")) return null;
    const html = await res.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.slice(0, SITE_TEXT_CAP) || null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function fallbackJson(business: string): string {
  return JSON.stringify({
    source: "fallback",
    profile: "",
    pains: painsFor(business),
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const raw =
    typeof body === "object" && body
      ? (body as Record<string, unknown>).business
      : undefined;
  if (typeof raw !== "string") {
    return NextResponse.json({ error: "Missing business." }, { status: 400 });
  }
  const business = raw.trim().slice(0, MAX_NAME_LEN);
  if (business.length < MIN_NAME_LEN) {
    return NextResponse.json({ error: "Tell us your business." }, { status: 400 });
  }

  const limit = rateLimit(clientIp(request));
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const url = toUrl(business);
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const write = (s: string) => controller.enqueue(encoder.encode(s));
      const finish = (s: string) => {
        write(s);
        controller.close();
      };

      if (!limit.ok || !apiKey) {
        finish(fallbackJson(business));
        return;
      }

      const siteText = url ? await fetchSiteText(url) : null;

      try {
        const client = new Anthropic({ apiKey });
        const ms = client.messages.stream({
          model: MODEL,
          max_tokens: 700,
          system: SYSTEM,
          // Haiku requires allowed_callers: ["direct"] to use server tools.
          tools: [
            {
              type: "web_search_20260209",
              name: "web_search",
              max_uses: 3,
              allowed_callers: ["direct"],
            },
          ],
          messages: [
            {
              role: "user",
              content: siteText
                ? `Business: ${business}\n\nText from their website:\n${siteText}\n\nConfirm with web_search if anything is unclear, then return the JSON.`
                : `Business: ${business}\n\nUse web_search to find what this business actually does, then return the JSON.`,
            },
          ],
        });

        narrateSearch(ms, write);

        const final = await ms.finalMessage();
        const text = final.content
          .filter((b): b is Anthropic.TextBlock => b.type === "text")
          .map((b) => b.text)
          .join("");
        const i = text.indexOf("{");
        const j = text.lastIndexOf("}");
        if (i === -1 || j <= i) {
          finish(`\n${fallbackJson(business)}`);
          return;
        }
        const data = JSON.parse(text.slice(i, j + 1)) as {
          profile?: unknown;
          pains?: unknown;
        };
        const pains = Array.isArray(data.pains)
          ? data.pains
              .filter((p): p is string => typeof p === "string" && p.trim().length > 0)
              .map((p) => p.trim())
              .slice(0, 6)
          : [];
        if (pains.length < 3) {
          finish(`\n${fallbackJson(business)}`);
          return;
        }
        finish(
          `\n${JSON.stringify({
            source: "ai",
            profile: typeof data.profile === "string" ? data.profile : "",
            pains,
          })}`,
        );
      } catch {
        finish(`\n${fallbackJson(business)}`);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
