import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Off-Market Real Estate Deals: VERA Case Studies",
  description:
    "How VERA sources off-market real estate deals, surfaces motivated seller leads, and runs the numbers for investors, wholesalers, flippers, and agents. The work and what it changed.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "VERA Case Studies: Off-Market Deals & Seller Leads",
    description:
      "What VERA built to find off-market properties and motivated seller leads for real estate investors and agents. Real AI, in production, and what it changed.",
    url: "https://veraconsulting.co/our-work",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
