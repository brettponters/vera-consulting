import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import ScrollZoom from "@/components/sections/ScrollZoom";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { AIRoadmap } from "@/components/sections/AIRoadmap";
import { FounderVision } from "@/components/sections/FounderVision";
// import Testimonials from "@/components/sections/Testimonials";
import { SouthFlorida } from "@/components/sections/SouthFlorida";
import { BookACall } from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "AI Consulting for Coaches and Consultants | VERA",
  description:
    "AI strategy, integration, and coaching for solo experts whose businesses run on what they know. Built for coaches, consultants, marketing pros, and agencies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Consulting for Coaches and Consultants | VERA",
    description:
      "AI strategy, integration, and coaching for solo experts. Built for coaches, consultants, marketing pros, and agencies whose business runs on what they know.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting for Coaches and Consultants | VERA",
    description:
      "AI strategy, integration, and coaching for coaches, consultants, marketing pros, and agencies.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <ScrollZoom />
      <WhatWeDo />
      <AIRoadmap />
      <FounderVision />
      {/* <Testimonials /> */}
      <SouthFlorida />
      <BookACall />
    </>
  );
}
