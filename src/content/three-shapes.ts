/**
 * Three Shapes section copy.
 *
 * Each shape.description is a verb-led sentence, ~22–28 words, in studio voice.
 * Written for real estate investors and agents sourcing off-market deals.
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
  h2: "Source. Analyze. Close.",
  closing: "Most partnerships start with a call about your buy box.",

  shapes: [
    {
      name: "Source",
      // founder to review and confirm
      description:
        "Run the smartest models in the world across the data most investors never touch, and hand you off-market deals and motivated sellers matched to your buy box.",
    },
    {
      name: "Analyze",
      // founder to review and confirm
      description:
        "Run ARV, rehab, rent, and exit math in minutes, backed by real data, so you can make an offer with confidence instead of guessing at the numbers.",
    },
    {
      name: "Close",
      // founder to review and confirm
      description:
        "Keep your pipeline full while you make the offers and close the deals, staying at the frontier of the models and getting paid only when you win.",
    },
  ] satisfies Shape[],
} as const;
