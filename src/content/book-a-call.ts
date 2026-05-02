/**
 * Book a Call section copy.
 * TODO: founder to supply:
 *   - Real name (replace [Founder Name])
 *   - Calendar URL (replace #schedule placeholder)
 *   - Confirm email address (currently founder@rain.studio — mark as unverified)
 */

export const bookACall = {
  h2: "Book a call.",

  body: [
    "Calls are 30 minutes.",
    "We talk about what you're trying to do, what you've tried, and what would actually help.",
    "No deck. No pitch. If we're not the right fit, we'll say so.",
  ],

  scheduleLink: {
    // TODO: founder to confirm real name
    label: "Schedule a call with [Founder Name] →",
    // TODO: founder calendar URL — do not replace with a real Calendly/Cal.com URL until confirmed
    href: "#schedule",
  },

  // TODO: founder to confirm this email address before making it a mailto link
  email: "founder@rain.studio",
} as const;
