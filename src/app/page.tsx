import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import ScrollZoom from "@/components/sections/ScrollZoom";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { FounderVision } from "@/components/sections/FounderVision";
// import Testimonials from "@/components/sections/Testimonials";
import { SouthFlorida } from "@/components/sections/SouthFlorida";
import { BookACall } from "@/components/sections/BookACall";

export const metadata: Metadata = {
  title: "AI Strategy, Integration & Coaching | VERA, South Florida",
  description:
    "VERA is a senior AI consulting practice based in South Florida. Strategy, integration, and coaching for companies adopting AI. Serving Boca Raton, Delray Beach, Boynton Beach, Deerfield Beach, and Fort Lauderdale.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Strategy, Integration & Coaching | VERA, South Florida",
    description:
      "Senior AI consulting for South Florida companies. Strategy, integration, and coaching, done right from the start.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy, Integration & Coaching | VERA, South Florida",
    description:
      "Senior AI consulting for South Florida companies. Strategy, integration, and coaching, done right.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <ScrollZoom />
      <WhatWeDo />
      <FounderVision />
      {/* <Testimonials /> */}
      <SouthFlorida />
      <BookACall />
    </>
  );
}
