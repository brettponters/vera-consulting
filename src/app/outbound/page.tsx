import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import { PromptPersonalize } from "@/components/sections/PromptPersonalize";
import { AIRoadmap } from "@/components/sections/AIRoadmap";
import { FounderVision } from "@/components/sections/FounderVision";
import { SouthFlorida } from "@/components/sections/SouthFlorida";
import { BookACall } from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "Outcome-Aligned B2B Growth Partner | VERA Solutions",
  description:
    "VERA Solutions turns measurable B2B growth targets into operated acquisition systems, with compensation aligned to the outcome.",
  alternates: { canonical: "/outbound" },
};

export default function OutboundPage() {
  return (
    <>
      <Hero outbound />
      <IndustriesMarquee outbound />
      <PromptPersonalize outbound />
      <AIRoadmap outbound />
      <FounderVision outbound />
      <SouthFlorida outbound />
      <BookACall outbound />
    </>
  );
}
