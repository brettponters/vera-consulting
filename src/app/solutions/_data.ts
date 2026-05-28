/**
 * Shared solution catalog. Drives the homepage marquee, the /solutions index,
 * and the "other solutions" footer on each individual /solutions/[slug] page.
 *
 * Adding a solution: add an entry here, create the matching folder under
 * /solutions/[slug]/page.tsx, and add its URL to sitemap.ts.
 */

export interface SolutionItem {
  slug: string;
  label: string;
  oneLiner: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: "strategy",
    label: "AI Strategy",
    oneLiner: "Where AI fits in your business, and where it doesn't.",
  },
  {
    slug: "policy",
    label: "AI Policy",
    oneLiner: "Rules your business can actually follow.",
  },
  {
    slug: "coaching",
    label: "AI Coaching",
    oneLiner: "1:1 AI coaching for business leaders and entrepreneurs.",
  },
  {
    slug: "training",
    label: "AI Training",
    oneLiner: "Get your team using AI consistently.",
  },
  {
    slug: "agents",
    label: "Custom AI Agents",
    oneLiner: "Autonomous workflows that run themselves.",
  },
  {
    slug: "compliance",
    label: "AI Compliance",
    oneLiner: "Regulatory adherence for your industry.",
  },
  {
    slug: "risk",
    label: "AI Risk Assessment",
    oneLiner: "Find failure modes before they reach a client.",
  },
  {
    slug: "evaluation",
    label: "AI Evaluation",
    oneLiner: "Measure whether your AI actually works.",
  },
];
