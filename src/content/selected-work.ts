/**
 * Selected Work section copy.
 *
 * Only confirmed, named projects appear here. Do not add projects until
 * the client has agreed to be named.
 *
 * TODO (founder to review and confirm): CoAgent description below is a draft
 * drawn from the business plan. Confirm exact language before launch.
 */

export interface WorkItem {
  name: string;
  // founder to review and confirm
  description: string;
  cta: { label: string; href: string };
}

export const selectedWork = {
  eyebrow: "Selected work",

  featured: {
    name: "CoAgent",
    // founder to review and confirm
    description:
      "A local-first autonomous AI agent built end-to-end: no cloud database, no third-party data pipeline. It sources off-market deals and ranks motivated-seller leads on the user's own machine, using the open Model Context Protocol to integrate with their tools. Currently deployed in real estate; architecture is general.",
    cta: {
      label: "Read the deep-dive →",
      href: "/work/coagent",
    },
  } satisfies WorkItem,

  holdingLine:
    "More work to come, by name, when clients have agreed to be named.",
} as const;
