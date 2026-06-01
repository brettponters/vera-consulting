import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "AI Strategy for Real Estate Agents: Coaching, Strategy & Integration",
  description:
    "How VERA helps real estate agents and brokers adopt agentic AI: weekly 1:1 coaching, a strategy for which workflows are worth building, and the integration to ship them. Boca Raton, FL.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "Real Estate AI Strategy: Coaching, Strategy & Integration | VERA",
    description:
      "How VERA helps real estate agents and brokers adopt agentic AI: weekly 1:1 coaching, a strategy for which workflows are worth building, and the integration to ship them.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate AI Strategy: Coaching, Strategy & Integration | VERA",
    description:
      "Agentic AI coaching, strategy, and integration for real estate agents, teams, and brokers.",
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
