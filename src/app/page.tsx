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
  title: "AI for Real Estate Wholesalers | VERA",
  description:
    "AI for real estate wholesalers. VERA sources deals by your criteria, underwrites every contract, and connects you with the right buyer. We JV on every deal. No retainer, nothing until you close.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI for Real Estate Wholesalers | VERA",
    description:
      "AI for real estate wholesalers. VERA sources deals by your criteria, underwrites every contract, and connects you with the right buyer. We JV on every deal.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Real Estate Wholesalers | VERA",
    description:
      "AI for real estate wholesalers. VERA sources deals, underwrites contracts, and finds the buyer. We JV on every deal. No retainer, nothing until you close.",
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
