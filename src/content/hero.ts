/**
 * Hero section copy.
 * TODO: founder to confirm final H1 and subhead before launch.
 */

export const hero = {
  eyebrow: "AI consulting · Public Benefit Corporation",

  // ~22 words. Names what RAIN is and who it serves.
  // Explicit positioning: research-grounded, hands-on, accountable.
  h1: "RAIN is an AI strategy and implementation consultancy for regulated industries — research-grounded, hands-on, and accountable to the result.",

  // ~50 words. Risk-forward. Names the audience by sector.
  // Honest about the stakes; no soft-pedaling.
  subhead:
    "The decisions your organization makes about AI this year will be on your audit trail for a decade. We help companies integrate in finance, healthcare, legal, and regulated B2B SaaS make them on purpose — with the depth to know how the systems behave under pressure.",

  ctas: {
    primary: {
      label: "See how we engage →",
      href: "#three-shapes",
    },
    secondary: {
      label: "Book a call",
      href: "#book-a-call",
    },
  },
} as const;
