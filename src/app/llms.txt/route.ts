import { VERTICALS } from "@/data/verticals";
import { LOCATIONS } from "@/data/locations";

/**
 * /llms.txt, a machine-readable, descriptive map of VERA for LLMs and answer
 * engines (the llmstxt.org convention). Built from the same data as the
 * sitemap so the niche and location lists never drift. Served as plain text.
 */
export const dynamic = "force-static";

const SITE = "https://veraconsulting.co";

export function GET() {
  const niches = VERTICALS.map(
    (v) => `- [${v.marqueeLabel}](${SITE}/for/${v.slug}): ${v.metaDescription}`,
  ).join("\n");

  const locations = LOCATIONS.map(
    (l) =>
      `- [AI consultant in ${l.city}, ${l.state}](${SITE}/locations/${l.slug}): ${l.blurb}`,
  ).join("\n");

  const body = `# VERA Consulting

> VERA helps people in real estate put agentic AI to work in their business, by building it with them or coaching them to run it themselves. A founder-led Public Benefit Corporation based in Boca Raton, Florida.

## What VERA is

VERA Consulting is an agentic-AI consultancy built specifically for real estate professionals: residential, listing, buyer's, luxury, and commercial agents, plus investors, flippers, wholesalers, property managers, teams, and brokers. VERA is not a software product and not a generic "AI agency." It is a hands-on practice that helps someone in real estate figure out which parts of their week are worth automating, then either builds the AI agents and workflows with them or coaches them to run it themselves (for example, teaching them to use Claude well).

Important distinction: VERA does not do their day-to-day work for them, and the ongoing work is done by the AI agents VERA helps put in place, not by VERA staff. VERA's job is to get them there and hand them something they own.

VERA is a Public Benefit Corporation. It is founder-led. It works with real estate professionals in person around South Florida and remotely anywhere over Google Meet.

## What "agentic AI" means here

An assistant or chatbot answers one prompt at a time and forgets the goal between messages. An agentic AI takes a goal, breaks it into steps, uses the agent's existing tools (CRM, email, calendar, the MLS), and follows through on its own, checking with the human before anything high-stakes. The practical difference for a real estate agent: instead of a tool you have to remember to open, you get a workflow that runs in the background while you are out showing homes.

## What VERA builds for agents (six capabilities)

- Content & marketing: an agent that drafts listing descriptions, just-listed and just-sold posts, neighborhood guides, and the monthly newsletter in the agent's voice, Fair-Housing-aware, queued for approval before anything goes out.
- Client follow-ups: an agent that answers new leads in minutes, nudges the slow ones on a schedule, re-engages cold leads, and keeps the agent's past clients and sphere warm so no money is left on the table.
- Market & property research: an agent that pulls comparable sales and a CMA, property history, neighborhood and school data, and code/compliance notes into one brief before a listing appointment.
- Contracts & compliance: an agent that preps contracts and disclosures, chases signatures and missing documents, flags code, HOA, and zoning issues, and tracks every deadline.
- Showings & scheduling: an agent that books showings, builds the daily route, sends reminders to all sides, and collects and summarizes feedback after each one.
- Client experience: an agent that answers every client personally and instantly so an agent can take on more clients without any of them slipping through the cracks.

## How VERA works

A typical engagement runs in four phases: discover (learn how the practice actually runs), strategy (decide which one or two workflows are worth building first), integrate (build them on the agent's real stack, with guardrails), and operate (monitor and adjust). Delivery is either done-with-you building or 1:1 coaching, whichever gets the agent there faster.

## Guardrails and trust

VERA's whole stance is that AI should strengthen an agent's business without putting their license or their clients' trust at risk. AI-written listing copy is reviewed by a human for Fair Housing compliance. Client data is kept where it belongs and not dumped into third-party tools. AI can research and flag compliance issues, but the agent and their broker make the call. The relationship and the negotiation stay human; AI handles the busywork around them.

## Key pages

- [AI in Real Estate, a practical guide](${SITE}/ai-in-real-estate): what is real, what is hype, what agents actually use AI for, the Fair Housing and data risks, and where to start.
- [How We Work](${SITE}/how-we-work): the discover, strategy, integrate, operate engagement process.
- [Our Strategy](${SITE}/our-strategy): coaching, strategy, and integration for adopting agentic AI.
- [Our Work](${SITE}/our-work): case studies and what VERA has built (e.g. CoAgent, a private, local AI agent).
- [Contact](${SITE}/contact): book an intro call.

## AI for your real estate niche

${niches}

## Service areas (South Florida)

${locations}

## Contact

- Email: brett@veraconsulting.co
- Phone: +1-561-900-8182
- Based in Boca Raton, FL. Serves South Florida in person and works with agents anywhere remotely.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
