import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "AI Strategy for Wholesalers, Investors & Agents",
  description:
    "How VERA sources deals by your criteria, underwrites every contract, and finds the buyer. A performance partnership for wholesalers, investors, and agents. We only win when you close.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "AI Strategy for Wholesalers, Investors & Agents",
    description:
      "How VERA sources deals, underwrites contracts, and connects you with the right buyer. A performance partnership, we only win when you close.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy for Wholesalers, Investors & Agents",
    description:
      "Deal sourcing, underwriting, and buyer matching for wholesalers, investors, and agents. We only win when you close.",
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
