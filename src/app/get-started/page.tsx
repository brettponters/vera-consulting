import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

export const metadata: Metadata = {
  title: "Get Started, Agentic AI for Real Estate Agents",
  description:
    "Tell us about your real estate business and we'll reach out within 24 hours. Agentic AI coaching, strategy, and integration for agents, teams, and brokers in Boca Raton, FL.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started with VERA, Agentic AI for Real Estate Agents",
    description:
      "Tell us about your business and we'll reach out within 24 hours. Agentic AI for real estate agents, teams, and brokers.",
    type: "website",
    url: "https://veraconsulting.co/get-started",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started with VERA, Agentic AI for Real Estate Agents",
    description:
      "Agentic AI coaching, strategy, and integration for real estate agents, teams, and brokers.",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
