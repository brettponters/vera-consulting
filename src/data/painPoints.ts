/**
 * Real estate pain points for the "See what VERA can do" personalizer.
 *
 * VERA's ICP is real estate professionals. When a visitor types their name,
 * brokerage, or site, we match it to a real estate niche and show pains
 * specific to it, so the menu feels seen without any AI cost. No match falls
 * back to GENERIC_PAINS (the everyday agent set).
 *
 * Matching is first-hit by keyword, so order MORE specific niches before
 * broader ones.
 */

export interface JobPains {
  /** Lowercase substrings matched against the visitor's input. */
  keywords: string[];
  pains: string[];
}

// Default: the everyday residential agent.
export const GENERIC_PAINS: string[] = [
  "Following up with leads before they go cold",
  "Listing descriptions and marketing eat my time",
  "Scheduling showings and tours is all manual",
  "Staying top of mind with past clients slips",
  "Transaction paperwork and coordination pile up",
  "Pulling comps and CMAs takes too long",
];

const JOB_PAINS: JobPains[] = [
  {
    keywords: ["luxury", "high-end", "estate agent", "luxury homes"],
    pains: [
      "High-touch client comms eat my evenings",
      "Bespoke listing marketing takes forever",
      "Coordinating private showings is all manual",
      "Staying close to my HNW sphere slips",
      "Following up after every showing is slow",
    ],
  },
  {
    keywords: ["commercial", "cre", "industrial", "retail lease", "office space"],
    pains: [
      "Lease and financial analysis eats my week",
      "Tenant and buyer research takes forever",
      "Drafting LOIs and proposals is slow",
      "Market reports pull me off deals",
      "Pipeline follow-up slips through the cracks",
    ],
  },
  {
    keywords: ["property management", "property manager", "rentals", "landlord", "leasing"],
    pains: [
      "Tenant comms and maintenance requests pile up",
      "Chasing late rent eats my week",
      "Owner reporting takes too long",
      "Marketing vacancies is all manual",
      "Lease renewals slip through the cracks",
    ],
  },
  {
    keywords: ["team", "group", "realty group", "brokerage", "broker"],
    pains: [
      "Routing leads to the right agent is manual",
      "Onboarding new agents takes forever",
      "Transaction coordination at scale is chaos",
      "Marketing is inconsistent across the team",
      "Reporting to agents eats my week",
    ],
  },
  {
    keywords: ["new construction", "builder", "developer", "new homes", "spec home"],
    pains: [
      "Keeping buyers updated on build timelines is manual",
      "Spec and option sheets take forever",
      "Lender and title coordination is slow",
      "Following up with model-home visitors slips",
      "Marketing each release eats my time",
    ],
  },
];

/**
 * Returns pain points tailored to the visitor's real estate niche, or the
 * everyday-agent set when nothing matches. Always returns a non-empty list.
 */
export function painsFor(business: string): string[] {
  const text = business.toLowerCase();
  const match = JOB_PAINS.find((job) =>
    job.keywords.some((kw) => text.includes(kw)),
  );
  return match ? match.pains : GENERIC_PAINS;
}
