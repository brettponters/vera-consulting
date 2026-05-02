import Hero from "@/components/sections/Hero";
import IndustriesMarquee from "@/components/sections/IndustriesMarquee";
import Purpose from "@/components/sections/Purpose";
import { HowWeThink } from "@/components/sections/HowWeThink";
import Testimonials from "@/components/sections/Testimonials";
import { ResearchBacked } from "@/components/sections/ResearchBacked";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesMarquee />
      <Purpose />
      <HowWeThink />
      <Testimonials />
      <ResearchBacked />
    </>
  );
}
