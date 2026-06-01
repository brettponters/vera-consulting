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
  title: "Agentic AI for Real Estate Agents | VERA Consulting",
  description:
    "Agentic AI for real estate agents: coaching, strategy, and integration that puts AI on the busywork, follow-ups, listings, research, and contracts, without losing the client relationships. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Agentic AI for Real Estate Agents | VERA Consulting",
    description:
      "Agentic AI for real estate agents: coaching, strategy, and integration that puts AI on the busywork, follow-ups, listings, research, and contracts, without losing the client relationships.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI for Real Estate Agents | VERA Consulting",
    description:
      "Agentic AI for real estate agents: coaching, strategy, and integration that puts AI on the busywork, follow-ups, listings, research, and contracts, without losing the client relationships.",
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
