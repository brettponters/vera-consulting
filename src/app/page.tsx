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
  title: {
    absolute: "Outbound Client Acquisition for Growing Agencies | VERA Solutions",
  },
  description:
    "VERA Solutions builds and runs outbound client-acquisition systems for growing paid media and digital advertising agencies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Outbound Client Acquisition for Growing Agencies | VERA Solutions",
    description:
      "VERA Solutions builds and runs outbound client-acquisition systems for growing paid media and digital advertising agencies.",
    type: "website",
    url: "https://www.verasolutions.ai",
    siteName: "VERA Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outbound Client Acquisition for Growing Agencies | VERA Solutions",
    description:
      "VERA Solutions builds and runs outbound client-acquisition systems for growing paid media and digital advertising agencies.",
  },
};

export default function Home() {
  return (
    <>
      <Hero outbound />
      <IndustriesMarquee outbound />
      <PromptPersonalize outbound />
      <AIRoadmap outbound />
      <FounderVision outbound />
      {/* <Testimonials /> */}
      <SouthFlorida outbound />
      <BookACall outbound />
    </>
  );
}
