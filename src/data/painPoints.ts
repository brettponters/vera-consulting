/**
 * Real estate pain points for the "See where VERA would find your edge"
 * personalizer.
 *
 * VERA's ICP is real estate and real estate investing. When a visitor types
 * their name, company, or site, we match it to a niche and show pains specific
 * to it, so the menu feels seen without any AI cost. No match falls back to
 * GENERIC_PAINS (the deal-sourcing default).
 *
 * Matching is first-hit by keyword, so order MORE specific niches before
 * broader ones.
 */

export interface JobPains {
  /** Lowercase substrings matched against the visitor's input. */
  keywords: string[];
  pains: string[];
}

// Default: sourcing deals and leads, the work that limits every closing.
export const GENERIC_PAINS: string[] = [
  "Finding off-market deals is all manual",
  "Motivated-seller leads go cold before I reach them",
  "Underwriting and running the numbers takes too long",
  "Pulling comps and ARV estimates eats my time",
  "Following up with leads before they go cold",
  "Reading a market early enough to act first is hard",
];

const JOB_PAINS: JobPains[] = [
  {
    keywords: [
      "wholesale",
      "wholesaler",
      "off-market",
      "motivated seller",
      "dispo",
      "cash buyer",
    ],
    pains: [
      "Finding off-market deals is all manual",
      "Motivated-seller leads go cold before I reach them",
      "Skip tracing and list pulling eats my week",
      "Underwriting each deal takes too long",
      "Matching deals to cash buyers is slow",
    ],
  },
  {
    keywords: [
      "flip",
      "flipper",
      "fix and flip",
      "rehab",
      "investor",
      "investment",
      "investments",
      "capital",
      "holdings",
      "ventures",
      "acquisitions",
      "buy and hold",
      "land",
    ],
    pains: [
      "Finding off-market deals before the crowd is hard",
      "Underwriting and ARV analysis takes all night",
      "Vetting motivated-seller leads is all manual",
      "Estimating rehab and holding costs is slow",
      "Reading a market early enough to act first is hard",
    ],
  },
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
 * Returns pain points tailored to the visitor's niche, or the deal-sourcing
 * default when nothing matches. Always returns a non-empty list.
 */
export function painsFor(business: string): string[] {
  const text = business.toLowerCase();
  const match = JOB_PAINS.find((job) =>
    job.keywords.some((kw) => text.includes(kw)),
  );
  return match ? match.pains : GENERIC_PAINS;
}
