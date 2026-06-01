import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Agentic AI Case Studies",
  description:
    "Agentic AI case studies and builds for real estate agents, teams, and brokers: AI agents, automation, strategy, and integration. What we've built and what it actually changed.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work, VERA Engagements & Case Studies",
    description:
      "What we've built for real estate agents and brokers adopting agentic AI strategy, integration, and coaching.",
    url: "https://veraconsulting.co/our-work",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
