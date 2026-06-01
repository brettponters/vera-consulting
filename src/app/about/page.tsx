import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: { absolute: "About VERA, Agentic AI for Real Estate Agents" },
  description:
    "VERA is a founder-led agentic AI practice for real estate agents, teams, and brokers. Research-first strategy, hands-on integration, and 1:1 coaching. Public Benefit Corporation in Boca Raton, FL.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VERA, Agentic AI for Real Estate Agents",
    description:
      "A founder-led practice for real estate agents: agentic AI strategy, integration, and 1:1 coaching. Public Benefit Corporation in Boca Raton, FL.",
    url: "https://veraconsulting.co/about",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
