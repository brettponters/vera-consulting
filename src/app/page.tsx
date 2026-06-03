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
  title: "AI Solutions for Real Estate | VERA Consulting",
  description:
    "AI tools, coaching, and training for real estate professionals. Learn how to use AI and ChatGPT for lead generation, listings, deal research, and follow-ups, without losing the personal relationships that close deals. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Solutions for Real Estate | VERA Consulting",
    description:
      "AI tools, coaching, and training for real estate professionals. Learn how to use AI and ChatGPT for lead generation, listings, deal research, and follow-ups, without losing the personal relationships that close deals.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions for Real Estate | VERA Consulting",
    description:
      "AI tools, coaching, and training for real estate professionals. How to use AI and ChatGPT for lead gen, listings, deal research, and follow-ups, without losing the personal relationships that close deals.",
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
