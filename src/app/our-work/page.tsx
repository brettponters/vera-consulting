import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Agentic AI Case Studies",
  description:
    "Agentic AI case studies and builds for solo experts: AI agents, automation, strategy, and integration. What we've built and what it produced.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work, VERA Engagements & Case Patterns",
    description:
      "What we've built for clients adopting AI strategy, integration, and coaching.",
    url: "https://veraconsulting.co/our-work",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
