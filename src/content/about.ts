/**
 * About section copy, founder-forward, home page.
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

  // TODO: founder photo, replace src in About.tsx with real path
  founderPhotoSrc: "/founder-placeholder.jpg",

  // ~95 words, first-person, calm, risk-forward by being plain.
  // Bracketed items need founder confirmation. Do NOT invent specifics.
  paragraph:
    "I'm [Founder Name]. Before VERA, I spent [N years] in [the field I worked in], including [prior role at firm], where I watched the people running the sharpest AI models find the opportunities first. I started VERA to put that edge into real estate deals. We source off-market deals and motivated seller leads, run the numbers fast, and partner on performance. We make money only when you close.",

  // Keep verbatim, set by foundation.
  pbcStatement:
    "VERA is incorporated as a Public Benefit Corporation. 5% of net revenue is committed annually to independent AI safety research, in our charter.",

  moreLink: {
    label: "More about VERA →",
    href: "/about",
  },
} as const;
