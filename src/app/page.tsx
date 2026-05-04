import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { BookACall } from "@/components/sections/BookACall";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <WhatWeDo />
      <BookACall />
    </>
  );
}
