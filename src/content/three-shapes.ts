/**
 * Three Shapes section copy.
 *
 * Each shape.description is a verb-led sentence, ~22–28 words, in studio voice.
 * Written for a regulated-industry buyer (finance, healthcare, legal, B2B SaaS).
 *
 * TODO (founder to review and confirm): all three one-liners below are drafts.
 * Replace with your final language before launch.
 */

export interface Shape {
  name: string;
  // founder to review and confirm
  description: string;
}

export const threeShapes = {
  h2: "Three shapes. Sized to the work.",
  closing: "Most engagements start with a Strategy conversation.",

  shapes: [
    {
      name: "Strategy",
      // founder to review and confirm
      description:
        "Assess your current AI surface area against what regulators, auditors, and your own leadership team will need to see — and give you a written plan worth acting on.",
    },
    {
      name: "Build",
      // founder to review and confirm
      description:
        "Design and ship a custom AI system — scoped small enough to monitor, documented well enough to defend, and tested for the failure modes that matter in your operation.",
    },
    {
      name: "Steward",
      // founder to review and confirm
      description:
        "Stay alongside your team through the first year a system runs in production, handling the reviews, adjustments, and incidents that determine whether it holds up.",
    },
  ] satisfies Shape[],
} as const;
