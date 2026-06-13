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
  title: "AI for Real Estate Investors & Agents | VERA",
  description:
    "Off-market real estate deals and motivated seller leads, found first. VERA is an AI deal sourcing partner for investors and agents. We earn only when you close. No retainer. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI for Real Estate Investors & Agents | VERA",
    description:
      "Off-market real estate deals and motivated seller leads, found first. VERA is an AI deal sourcing partner for investors and agents. We earn only when you close. No retainer.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Real Estate Investors & Agents | VERA",
    description:
      "Off-market deals and motivated seller leads, found first. VERA is an AI deal sourcing partner for real estate investors and agents. We earn only when you close.",
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
