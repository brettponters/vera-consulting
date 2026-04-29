/**
 * About section copy — founder-forward, home page.
 * TODO: founder to supply:
 *   - Real name (replace [Founder Name])
 *   - Years in prior field (replace [N years])
 *   - Field of prior work (replace [the field I worked in])
 *   - Prior role / firm (replace [prior role at firm])
 *   - Photo (replace /founder-placeholder.jpg with real path)
 *   - Confirm or rewrite the paragraph in own voice
 */

export const about = {
  // TODO: founder to confirm real name
  founderName: "[Founder Name]",

  // TODO: founder photo — replace src in About.tsx with real path
  founderPhotoSrc: "/founder-placeholder.jpg",

  // ~95 words, first-person, calm, risk-forward by being plain.
  // Bracketed items need founder confirmation. Do NOT invent specifics.
  paragraph:
    "I'm [Founder Name]. Before RAIN, I spent [N years] in [the field I worked in] — including [prior role at firm] — where I watched organizations make high-stakes decisions on AI systems they didn't fully understand. I started RAIN because that gap has real costs, and closing it requires someone who has done the reading and will tell you the truth. I take a small number of engagements each year. The work is hands-on. I write the strategy, build the systems, and stay accountable to what they produce.",

  // Keep verbatim — set by foundation.
  pbcStatement:
    "RAIN is incorporated as a Public Benefit Corporation. 5% of net consulting revenue is committed annually to independent AI safety research, in our charter.",

  moreLink: {
    label: "More about RAIN →",
    href: "/about",
  },
} as const;
