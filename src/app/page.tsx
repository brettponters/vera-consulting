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
  title: "AI Tools for Real Estate Agents | VERA Consulting",
  description:
    "AI tools, coaching, and training for real estate agents. Learn how to use AI and ChatGPT for lead generation, listing descriptions, follow-ups, and market research, without losing the client relationships. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Tools for Real Estate Agents | VERA Consulting",
    description:
      "AI tools, coaching, and training for real estate agents. Learn how to use AI and ChatGPT for lead generation, listings, follow-ups, and research, without losing the client relationships.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools for Real Estate Agents | VERA Consulting",
    description:
      "AI tools, coaching, and training for real estate agents. How to use AI and ChatGPT for lead gen, listings, follow-ups, and research, without losing the client relationships.",
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
