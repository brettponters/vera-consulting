import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "AI Strategy for Solo Experts: Coaching, Strategy & Integration",
  description:
    "How VERA helps solo experts adopt agentic AI: weekly 1:1 coaching, a strategy for which workflows are worth building, and the integration to ship them. Boca Raton, FL.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "AI Strategy for Solo Experts: Coaching, Strategy & Integration | VERA",
    description:
      "How VERA helps solo experts adopt agentic AI: weekly 1:1 coaching, a strategy for which workflows are worth building, and the integration to ship them.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy for Solo Experts: Coaching, Strategy & Integration | VERA",
    description:
      "Agentic AI coaching, strategy, and integration for coaches, consultants, and solo experts.",
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
