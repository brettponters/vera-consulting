import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import { PromptPersonalize } from "@/components/sections/PromptPersonalize";
import { AIRoadmap } from "@/components/sections/AIRoadmap";
import { FounderVision } from "@/components/sections/FounderVision";
// import Testimonials from "@/components/sections/Testimonials";
import { SouthFlorida } from "@/components/sections/SouthFlorida";
import { BookACall } from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "AI Readiness & Governance for Professional Services | VERA Consulting",
  description:
    "AI readiness, governance, safe implementation, and training for professional services firms. Capture the upside of AI without putting client trust or compliance at risk. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Readiness & Governance for Professional Services | VERA Consulting",
    description:
      "AI readiness, governance, and training for professional services firms. Capture the upside of AI without putting client trust or compliance at risk.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Readiness & Governance for Professional Services | VERA Consulting",
    description:
      "AI readiness, governance, and training for professional services firms. Capture the upside of AI without putting client trust or compliance at risk.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <PromptPersonalize />
      <AIRoadmap />
      <FounderVision />
      {/* <Testimonials /> */}
      <SouthFlorida />
      <BookACall />
    </>
  );
}
