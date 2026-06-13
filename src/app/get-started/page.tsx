import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

export const metadata: Metadata = {
  title: "Get Started, AI for Real Estate Investors",
  description:
    "Tell us about your real estate business and we'll reach out within 24 hours. VERA sources off-market deals and motivated seller leads, and earns only when you close.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started with VERA, AI for Real Estate Investors",
    description:
      "Tell us about your business and we'll reach out within 24 hours. Off-market deals and motivated seller leads for real estate investors and agents.",
    type: "website",
    url: "https://veraconsulting.co/get-started",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started with VERA, AI for Real Estate Investors",
    description:
      "Off-market deals and motivated seller leads for real estate investors, agents, teams, and brokers. We win only when you close.",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
