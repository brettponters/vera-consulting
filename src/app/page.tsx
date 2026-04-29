import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import { ThreeShapes } from "@/components/sections/ThreeShapes";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ResearchBacked } from "@/components/sections/ResearchBacked";
import About from "@/components/sections/About";
import BookACall from "@/components/sections/BookACall";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyNow />
      <ThreeShapes />
      <SelectedWork />
      <ResearchBacked />
      <About />
      <BookACall />
    </>
  );
}
