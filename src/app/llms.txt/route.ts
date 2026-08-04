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
      `- [AI for real estate in ${l.city}, ${l.state}](${SITE}/locations/${l.slug}): ${l.blurb}`,
  ).join("\n");

  const body = `# VERA Solutions

> VERA is an intelligence partner for real estate and real estate investing. We find the edge: sourcing off-market deals, surfacing motivated-seller leads, reading markets and properties before the crowd, and running the numbers fast. Founder-led and based in Boca Raton, Florida.

## What VERA is

VERA is an intelligence partner for real estate investors and agents: wholesalers, fix-and-flip, buy-and-hold landlords, land and new construction, plus residential, listing, buyer's, luxury, and commercial agents, teams, and brokers. VERA is not a software product, not a course, and not a generic "AI agency." We find off-market deals, surface motivated-seller leads, and run the numbers fast so our partners get to the deal first.

VERA works as a performance-based partnership. No retainer, no hourly, no paying to try. We make money only when our partners close. The technology moves every week; a tool you buy or a vendor you hire is behind the day it arrives. A partner who stays at the frontier and puts what they find into your deals is the only thing that keeps compounding.

VERA is founder-led. It works with investors and agents in person around South Florida and remotely anywhere over Google Meet.

## How VERA finds the edge

Behind the work is an operations team running the smartest AI models in the world. You do not buy the models or manage the process; you get the outcome. VERA takes a goal, sourcing off-market inventory, finding sellers ready to move, scoring a market before it turns, and follows through, putting qualified deals and analysis in front of you so you can act first.

## What VERA delivers

- Off-market deal sourcing: finding properties before they hit the MLS, building target lists, and surfacing inventory the crowd never sees.
- Motivated-seller leads: identifying owners ready to sell, scoring intent, and putting warm, qualified leads in front of you fast.
- Market and property intelligence: reading markets and individual properties before the crowd, with comps, history, and neighborhood signal pulled into one brief.
- Deal analysis: running the numbers fast on fix-and-flip, buy-and-hold, wholesale, and land plays so you know the spread before you commit.
- Lead generation for agents and teams: filling the pipeline with qualified buyers and sellers and keeping the sphere warm so no opportunity slips.
- Speed to the deal: getting you to the right property and the right seller ahead of everyone working the same market.

## How VERA works

VERA is a partnership, not an engagement you pay to begin. We bring the intelligence, the deal flow, and the analysis; you bring local knowledge and the ability to close. We earn when you earn. That alignment is the point: it keeps us at the frontier and keeps the edge pointed at your deals.

## Trust and guardrails

The alignment runs both ways. Your data stays where it belongs and is not dumped into third-party tools. AI does the sourcing, scoring, and analysis; the relationship, the negotiation, and the final call stay yours. We win only when you close, so our incentive is your result, not your retainer.

## Key pages

- [AI in Real Estate, a practical guide](${SITE}/ai-in-real-estate): what is real, what is hype, what investors and agents actually use AI for, and where the edge is.
- [How We Work](${SITE}/how-we-work): how the partnership works and why we earn only when you close.
- [Our Strategy](${SITE}/our-strategy): how VERA sources off-market deals and motivated-seller leads with agentic AI.
- [Contact](${SITE}/contact): book an intro call.

## AI for your real estate niche

${niches}

## Service areas (South Florida)

${locations}

## Contact

- Email: brett@veraconsulting.co
- Phone: +1-561-900-8182
- Based in Boca Raton, FL. Serves South Florida in person and works with investors and agents anywhere remotely.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
