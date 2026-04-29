/**
 * Why Now section copy — verbatim from wireframe §3.
 * Do NOT paraphrase these strings without a design review.
 */

export const whyNow = {
  h2: "What gets shipped between now and 2027 will set the audit trail for a decade.",

  anchors: [
    {
      quarter: "Q2 2026",
      decisionNow: "Pick a model vendor without an audit interface.",
      consequenceBy2027:
        "External audit reveals months of unloggable inference with no recourse to reconstruct.",
    },
    {
      quarter: "Q3 2026",
      decisionNow: "Train on customer data without provenance tagging.",
      consequenceBy2027:
        "First GDPR / CCPA discovery request your team can't answer.",
    },
    {
      quarter: "Q4 2026",
      decisionNow:
        "Wire an agent into a core workflow without a rollback path.",
      consequenceBy2027:
        "The system can't be removed without halting the operation it now runs.",
    },
  ],

  closingProse: [
    "None of these are predictions. They are decisions being made this quarter, in companies that will spend the next ten years living with them. We help our clients make them on purpose.",
    "We are not, and do not aim to be, a large firm. We take on a small number of engagements where we can be accountable to the result.",
  ],
} as const;
