import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import ScrollZoom from "@/components/sections/ScrollZoom";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { BookACall } from "@/components/sections/BookACall";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <ScrollZoom />
      <WhatWeDo />
      <BookACall />
    </>
  );
}
