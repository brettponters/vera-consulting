import type { Metadata } from "next";
import ReadingClient from "./ReadingClient";

export const metadata: Metadata = {
  title: "AI Research and Reading for Consultants",
  description:
    "The research, papers, and writing shaping how VERA thinks about AI strategy, integration, and coaching.",
  alternates: { canonical: "/reading" },
  openGraph: {
    title: "Reading, VERA on AI Research",
    description:
      "Research, papers, and writing shaping how we think about AI strategy and integration.",
    url: "https://veraconsulting.co/reading",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function ReadingPage() {
  return <ReadingClient />;
}
