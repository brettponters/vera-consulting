/**
 * The four phases of a VERA partnership. Shared by the client UI and the
 * server page's HowTo JSON-LD, so it lives in a plain (non-"use client")
 * module both can import.
 */
export const PHASES = [
  {
    number: "01",
    title: "Fit",
    description:
      "We start with your buy box: your market, your price band, your criteria, what you have already tried. We look at where deal flow is thin and where an edge actually exists for you. If we can find you one, we agree on how the partnership and the fee work before anything else, with no retainer and nothing to pay to start.",
    deliverables: [
      "Your buy box, market, and criteria mapped",
      "An honest read on where the edge is",
      "Deal and fee structure agreed up front",
      "No retainer, nothing to pay to start",
    ],
  },
  {
    number: "02",
    title: "Source",
    description:
      "We hunt the deals that never hit the MLS: absentee owners, tax delinquency, pre-foreclosure, probate, code violations, tired landlords in your target areas. We score every owner by real motivation signals, skip-trace current contact behind LLCs and trusts, and run the comps, ARV, and rehab math before anything reaches you.",
    deliverables: [
      "Off-market deals matched to your buy box",
      "Motivated-seller leads scored by real signals",
      "Comps, ARV, and rehab math on every deal",
      "Skip-traced contacts behind LLCs and trusts",
    ],
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "The scored deals and leads land straight in your pipeline, with first-touch outreach going out in your name. You get the address, the numbers, and the reason it is worth a call, so you can offer with confidence and move before the crowd. The seller who calls back is calling you.",
    deliverables: [
      "Scored deals routed into your pipeline",
      "First-touch outreach in your name",
      "The numbers you need to offer with confidence",
      "Signals on which sellers are ready to move",
    ],
  },
  {
    number: "04",
    title: "Close and compound",
    description:
      "You make the calls and close the deals. We get paid on the deal and at no other time, so our incentive is your next closing. We keep sourcing, keep scoring, and keep the sharpest models current in your market, so the edge compounds instead of aging out.",
    deliverables: [
      "You close, we get paid only then",
      "A steady flow of new sourced opportunities",
      "The frontier kept current in your deals",
      "A partner who stays as long as the deals do",
    ],
  },
];
