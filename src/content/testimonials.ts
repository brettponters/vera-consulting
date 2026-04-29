/**
 * Testimonials section copy.
 *
 * All entries are placeholders. Brackets signal "not yet real."
 * Founder to confirm each quote and attribution with the client
 * before any entry goes live.
 *
 * Do NOT remove brackets or invent names.
 */

export interface Testimonial {
  // Quote placeholder — founder to confirm with client
  quote: string;
  name: string;
  role: string;
  organization: string;
}

export const testimonials = {
  h2: "Notes from the work.",

  cards: [
    {
      // Quote placeholder — founder to confirm with client
      quote:
        "[Quote placeholder — founder to confirm with client.]",
      name: "[Client name]",
      role: "[Role]",
      organization: "[Organization]",
    },
    {
      // Quote placeholder — founder to confirm with client
      quote:
        "[Quote placeholder — founder to confirm with client.]",
      name: "[Client name]",
      role: "[Role]",
      organization: "[Organization]",
    },
    {
      // Quote placeholder — founder to confirm with client
      quote:
        "[Quote placeholder — founder to confirm with client.]",
      name: "[Client name]",
      role: "[Role]",
      organization: "[Organization]",
    },
  ] satisfies Testimonial[],
} as const;
