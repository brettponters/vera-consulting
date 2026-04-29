import { Fraunces, Inter_Tight } from "next/font/google";

// Fraunces — optical-size variable serif. The ink-trap details at display
// sizes and the warm, humanist construction give headings the feel of a
// Knopf hardcover spine. Italic is expressive without being decorative.
export const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

// Inter Tight — the condensed sibling of Inter. More economical on the
// page than plain Inter, with the discipline of a Swiss grotesque. Reads
// as a precise, unhurried voice in body copy.
export const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
