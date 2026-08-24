/**
 * Machine-readable overview of VERA Solutions for LLMs and answer engines.
 * Served as plain text at /llms.txt.
 */
export const dynamic = "force-static";

const SITE = "https://www.verasolutions.ai";

export function GET() {
  const body = `# VERA Solutions

> VERA Solutions builds and runs outbound client-acquisition systems for growing paid media and digital advertising agencies.

## What VERA Solutions does

VERA helps agencies create a repeatable outbound channel without asking their delivery team to become a prospecting team. The work combines market selection, account research, contact data, personalized messaging, campaign infrastructure, deliverability, launch, and ongoing optimization.

## Who VERA Solutions works with

- PPC and paid media agencies
- Digital advertising agencies
- Performance marketing agencies
- Agencies with proven client results that want a more predictable new-business pipeline

## How the engagement works

VERA identifies the strongest market and offer hypothesis, builds the target list and messaging, launches the outbound system, and improves it from response data. The goal is qualified conversations with companies that fit the agency's existing strengths.

## Key pages

- [Home](${SITE}): outbound client-acquisition offer, capabilities, and ideal agency partners.
- [Contact](${SITE}/contact): book an outbound strategy call or send a message.

## Contact

- Email: brett@veraconsulting.co
- Phone: +1-561-900-8182
- Based in Boca Raton, Florida, and works with agencies remotely.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
