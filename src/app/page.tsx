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
  title: "Agentic AI for Coaches and Consultants | VERA Consulting",
  description:
    "Agentic AI coaching, strategy, and integration for coaches, consultants, marketing pros, and solo experts whose business runs on trust. Boca Raton, FL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Agentic AI for Coaches and Consultants | VERA Consulting",
    description:
      "Agentic AI coaching, strategy, and integration for coaches, consultants, marketing pros, and solo experts whose business runs on trust.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI for Coaches and Consultants | VERA Consulting",
    description:
      "Agentic AI coaching, strategy, and integration for coaches, consultants, marketing pros, and solo experts whose business runs on trust.",
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
