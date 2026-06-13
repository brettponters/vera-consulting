import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "Off-Market Deal Sourcing & AI for Real Estate Investors",
  description:
    "How VERA sources off-market deals and motivated seller leads for real estate investors and agents. A performance partnership: we win when you close. Boca Raton, FL.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "Off-Market Deal Sourcing for Real Estate Investors | VERA",
    description:
      "How VERA sources off-market deals and motivated seller leads for real estate investors and agents. A performance partnership: we win when you close.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Market Deal Sourcing for Real Estate Investors | VERA",
    description:
      "Off-market deals, motivated seller leads, and deal analysis for real estate investors, agents, and teams. We win when you close.",
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
