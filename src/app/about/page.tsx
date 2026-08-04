import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: { absolute: "About VERA, AI Partner for Real Estate" },
  description:
    "VERA is an intelligence partner for real estate wholesalers, investors, and realtors. We find off-market deals and motivated seller leads, and we only earn when you close. Based in Boca Raton, FL.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About VERA, AI Partner for Real Estate",
    description:
      "An intelligence partner for real estate wholesalers, investors, and realtors. We source off-market deals and motivated seller leads, and win only when you close. Boca Raton, FL.",
    url: "https://veraconsulting.co/about",
    type: "website",
    images: ["/opengraph-image"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
