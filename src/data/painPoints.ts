/**
 * Job-specific pain points for the "See what VERA can do" personalizer.
 *
 * When a visitor types their business, we match it to an archetype and show
 * pains specific to that field, so the menu feels seen without any AI cost.
 * Each archetype's pains are written to generalize across most people in it.
 * No match falls back to GENERIC_PAINS.
 *
 * Matching is first-hit by keyword, so order MORE specific archetypes before
 * broader ones (e.g. "real estate" before "marketing").
 */

export interface JobPains {
  /** Lowercase substrings matched against the visitor's input. */
  keywords: string[];
  pains: string[];
}

export const GENERIC_PAINS: string[] = [
  "Admin and follow-up eat my week",
  "My content and marketing are inconsistent",
  "Finding and qualifying leads is slow",
  "Proposals and scoping take too long",
  "Client research and prep takes forever",
  "I'm the bottleneck in every conversation",
];

const JOB_PAINS: JobPains[] = [
  {
    keywords: ["real estate", "real-estate", "realtor", "realty", "broker"],
    pains: [
      "Following up with leads is slow",
      "Listing copy and marketing eat my time",
      "Showings and paperwork are all manual",
      "Staying top of mind with past clients slips",
      "Qualifying buyers takes too long",
    ],
  },
  {
    keywords: ["coach", "coaching"],
    pains: [
      "No-shows and reschedules wreck my calendar",
      "Session recaps and follow-ups take hours",
      "My content is inconsistent between clients",
      "Discovery calls don't reliably convert",
      "Onboarding new clients is all manual",
    ],
  },
  {
    keywords: ["therapist", "therapy", "counselor", "counsel", "psycholog", "social work"],
    pains: [
      "Notes and admin eat my evenings",
      "Intake and scheduling is all manual",
      "Referral follow-up slips",
      "Repetitive client questions take time",
      "Keeping notes consistent is stressful",
    ],
  },
  {
    keywords: ["trainer", "fitness", "gym", "yoga", "pilates", "nutrition", "wellness", "dietitian"],
    pains: [
      "Client check-ins and programming take hours",
      "No-shows and scheduling are a mess",
      "My posting is inconsistent",
      "Intake and onboarding is manual",
      "Following up with leads is slow",
    ],
  },
  {
    keywords: ["accountant", "accounting", "bookkeep", "cpa", "tax prep", "tax service", "payroll"],
    pains: [
      "Chasing client documents eats my week",
      "Repetitive client questions take time",
      "Onboarding and intake is manual",
      "Reporting and reconciliations are slow",
      "Following up on invoices slips",
    ],
  },
  {
    keywords: ["lawyer", "attorney", "legal", "law firm", "paralegal"],
    pains: [
      "Drafting routine docs takes too long",
      "Client intake and follow-up is manual",
      "Research and prep eats billable hours",
      "Chasing documents and signatures is slow",
      "Repetitive client questions take time",
    ],
  },
  {
    keywords: ["copywriter", "copywriting", "ghostwriter", "content writer", "writer"],
    pains: [
      "Finding and pitching clients is slow",
      "Research and first drafts take forever",
      "Invoicing and admin pull me off the work",
      "Repurposing work into marketing is tedious",
      "Following up with leads slips",
    ],
  },
  {
    keywords: ["design", "designer", "branding", "creative", "studio", "photograph", "videograph"],
    pains: [
      "Scoping and quoting takes forever",
      "Revisions and feedback are chaos",
      "Proposals pull me off the work",
      "Marketing my own studio comes last",
      "Client onboarding is all manual",
    ],
  },
  {
    keywords: ["consultant", "consulting", "advisor", "advisory", "fractional", "strategist"],
    pains: [
      "Proposals and SOWs take days",
      "Client research and prep eats billable time",
      "Lead follow-up slips through the cracks",
      "Turning calls into deliverables is slow",
      "I'm the bottleneck on every project",
    ],
  },
  {
    keywords: ["agency", "marketing", "marketer", "seo", "ads", "social media", "content", "pr ", "publicist"],
    pains: [
      "Content output is inconsistent",
      "Client reporting eats a full day",
      "Outreach and lead gen is manual",
      "Repurposing across channels is tedious",
      "Client onboarding takes too long",
    ],
  },
];

/**
 * Returns pain points tailored to the visitor's business, or the generic set
 * when nothing matches. Always returns a non-empty list.
 */
export function painsFor(business: string): string[] {
  const text = business.toLowerCase();
  const match = JOB_PAINS.find((job) =>
    job.keywords.some((kw) => text.includes(kw)),
  );
  return match ? match.pains : GENERIC_PAINS;
}
