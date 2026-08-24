import type { Metadata } from "next";
import ReadingClient from "./ReadingClient";

export const metadata: Metadata = {
  title: "AI Research and Reading for Real Estate",
  description:
    "The research, papers, and writing that shape how VERA finds the edge in real estate: sourcing off-market deals, motivated seller leads, and reading markets before the crowd.",
  alternates: { canonical: "/reading" },
  openGraph: {
    title: "Reading, VERA on AI for Real Estate",
    description:
      "Research, papers, and writing that shape how VERA sources off-market deals and reads markets before the crowd for real estate investors and agents.",
    url: "https://www.verasolutions.ai/reading",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function ReadingPage() {
  return <ReadingClient />;
}
