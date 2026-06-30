import type { Metadata } from "next";
import OurStrategyClient from "./OurStrategyClient";

export const metadata: Metadata = {
  title: "AI Strategy for Real Estate Wholesalers | VERA",
  description:
    "How VERA sources deals by your criteria, underwrites every contract, and finds the buyer. A JV partnership for real estate wholesalers. We only win when you close.",
  alternates: { canonical: "/our-strategy" },
  openGraph: {
    title: "AI Strategy for Real Estate Wholesalers | VERA",
    description:
      "How VERA sources deals, underwrites contracts, and connects wholesalers with the right buyer. We JV on every deal and only win when you close.",
    url: "https://veraconsulting.co/our-strategy",
    type: "article",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy for Real Estate Wholesalers | VERA",
    description:
      "Deal sourcing, underwriting, and buyer matching for real estate wholesalers. We JV on every deal and only win when you close.",
  },
};

export default function OurStrategyPage() {
  return <OurStrategyClient />;
}
