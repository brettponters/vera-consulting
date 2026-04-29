/**
 * Research-backed section copy.
 *
 * DO NOT fill in real paper titles, authors, or "why it matters" lines here
 * until the founder has confirmed the reading list. Every entry below is a
 * clearly-marked placeholder.
 *
 * TODO (founder to confirm): replace all placeholder entries with the actual
 * papers and books the practice is built on before launch.
 */

export interface ReadingEntry {
  // founder to confirm
  title: string;
  // founder to confirm
  author: string;
  // founder to confirm
  year: string;
  // founder to confirm
  whyItMatters: string;
}

export const researchBacked = {
  eyebrow: "Research-backed",
  h2: "The papers and books our practice is built on.",
  cta: {
    label: "See the full reading list →",
    href: "/reading",
  },

  // founder to confirm — replace these placeholders with the real reading list
  entries: [
    {
      title: "Title placeholder",
      author: "Author placeholder",
      year: "20XX",
      whyItMatters: "Why it matters placeholder. Founder to confirm reading list.",
    },
    {
      title: "Title placeholder",
      author: "Author placeholder",
      year: "20XX",
      whyItMatters: "Why it matters placeholder. Founder to confirm reading list.",
    },
    {
      title: "Title placeholder",
      author: "Author placeholder",
      year: "20XX",
      whyItMatters: "Why it matters placeholder. Founder to confirm reading list.",
    },
    {
      title: "Title placeholder",
      author: "Author placeholder",
      year: "20XX",
      whyItMatters: "Why it matters placeholder. Founder to confirm reading list.",
    },
  ] satisfies ReadingEntry[],
} as const;
