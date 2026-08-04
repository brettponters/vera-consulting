import type { Metadata } from "next";
import GetStartedClient from "./GetStartedClient";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Tell us about your real estate business and we'll reach out within 24 hours. VERA sources deals, underwrites fast, and finds the buyer. We earn only when you close.",
  alternates: { canonical: "/get-started" },
  openGraph: {
    title: "Get Started",
    description:
      "Tell us about your business and we'll reach out within 24 hours. AI deal sourcing, underwriting, and buyer matching for wholesalers, investors, and realtors.",
    type: "website",
    url: "https://veraconsulting.co/get-started",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Started",
    description:
      "AI deal sourcing, underwriting, and buyer matching for wholesalers, investors, and realtors. We win only when you close.",
  },
};

export default function GetStartedPage() {
  return <GetStartedClient />;
}
