/**
 * Machine-readable overview of VERA Solutions for LLMs and answer engines.
 * Served as plain text at /llms.txt.
 */
export const dynamic = "force-static";

const SITE = "https://www.verasolutions.ai";

export function GET() {
  const body = `# VERA Solutions

> VERA Solutions is an outcome-aligned B2B growth partner. It turns a measurable growth target into an operated acquisition system and ties the majority of its compensation to achieving the agreed milestone.

## What VERA Solutions does

VERA begins with a measurable business-development target, such as qualified attended opportunities or sales-qualified pipeline. It then builds and operates the system required to reach it: market and offer strategy, targeting, prospect research, messaging, outbound acquisition, CRM routing, follow-up automation, reporting, and continuous optimization.

Outbound is a capability inside the broader growth system, not the identity of the company.

## How the partnership works

Before launch, VERA and the client agree on the metric, qualification criteria, target, timeline, attribution rules, and commitments on both sides. A build fee covers the operating system. The majority of VERA's fee is earned when the agreed growth milestone is achieved.

## Who VERA works with

- B2B companies with a proven offer and credible customer proof
- Teams that understand their ideal customer and deal economics
- Companies with sales capacity to respond to qualified opportunities quickly
- Partners willing to provide the access, feedback, approvals, and follow-up required to operate the system

## Key pages

- [Home](${SITE}): B2B growth-partner positioning, operating model, capabilities, and fit.
- [Contact](${SITE}/contact): define a growth target and explore the partnership.

## Contact

- Email: brett@veraconsulting.co
- Phone: +1-561-900-8182
- Based in Boca Raton, Florida, and works with B2B companies remotely.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
