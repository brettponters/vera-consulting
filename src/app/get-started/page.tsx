import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

export const metadata: Metadata = {
  title: "Get Started | VERA for Real Estate Wholesalers",
  description:
    "Tell us about your wholesaling business and we'll reach out within 24 hours. VERA sources deals, underwrites contracts, and finds the buyer. We JV on every deal.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started | VERA for Real Estate Wholesalers",
    description:
      "Tell us about your business and we'll reach out within 24 hours. AI deal sourcing, underwriting, and buyer matching for real estate wholesalers.",
    type: "website",
    url: "https://veraconsulting.co/get-started",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started | VERA for Real Estate Wholesalers",
    description:
      "AI deal sourcing, underwriting, and buyer matching for real estate wholesalers. We JV on every deal and win only when you close.",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
