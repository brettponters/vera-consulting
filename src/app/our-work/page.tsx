import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected engagements and case patterns: AI strategy, integration, and the foundations underneath. What we've built and what it produced.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work, VERA Engagements & Case Patterns",
    description:
      "What we've built for clients adopting AI strategy, integration, and the foundations underneath.",
    url: "https://veraconsulting.co/our-work",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
