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
  title: "AI for Real Estate Wholesalers, Investors & Realtors | VERA",
  description:
    "Agentic AI for real estate wholesalers, investors, and realtors. VERA sources off-market deals, underwrites fast, and matches the right buyer. No retainer, nothing until you close.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI for Real Estate Wholesalers, Investors & Realtors | VERA",
    description:
      "Agentic AI for real estate wholesalers, investors, and realtors. VERA sources off-market deals, underwrites fast, and matches the right buyer.",
    type: "website",
    url: "https://veraconsulting.co",
    siteName: "VERA",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Real Estate Wholesalers, Investors & Realtors | VERA",
    description:
      "Agentic AI for wholesalers, investors, and realtors. VERA sources deals, underwrites fast, and finds the buyer. Nothing upfront, we earn only when you close.",
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
