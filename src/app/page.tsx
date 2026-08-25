import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import { GrowthPartnership } from "@/components/sections/GrowthPartnership";
import { PromptPersonalize } from "@/components/sections/PromptPersonalize";
import { AIRoadmap } from "@/components/sections/AIRoadmap";
import { FounderVision } from "@/components/sections/FounderVision";
// import Testimonials from "@/components/sections/Testimonials";
import { SouthFlorida } from "@/components/sections/SouthFlorida";
import { BookACall } from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: {
    absolute: "Outcome-Aligned B2B Growth Partner | VERA Solutions",
  },
  description:
    "VERA Solutions turns measurable B2B growth targets into operated acquisition systems, with compensation aligned to the outcome.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Outcome-Aligned B2B Growth Partner | VERA Solutions",
    description:
      "VERA Solutions turns measurable B2B growth targets into operated acquisition systems, with compensation aligned to the outcome.",
    type: "website",
    url: "https://www.verasolutions.ai",
    siteName: "VERA Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outcome-Aligned B2B Growth Partner | VERA Solutions",
    description:
      "VERA Solutions turns measurable B2B growth targets into operated acquisition systems, with compensation aligned to the outcome.",
  },
};

export default function Home() {
  return (
    <>
      <Hero outbound />
      <IndustriesMarquee outbound />
      <PromptPersonalize outbound />
      <GrowthPartnership />
      <AIRoadmap outbound />
      <FounderVision outbound />
      {/* <Testimonials /> */}
      <SouthFlorida outbound />
      <BookACall outbound />
    </>
  );
}
