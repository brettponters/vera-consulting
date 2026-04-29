import Hero from "@/components/sections/Hero";
import WhyNow from "@/components/sections/WhyNow";
import { ThreeShapes } from "@/components/sections/ThreeShapes";
import Testimonials from "@/components/sections/Testimonials";
import { ResearchBacked } from "@/components/sections/ResearchBacked";
import About from "@/components/sections/About";
import BookACall from "@/components/sections/BookACall";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyNow />
      <ThreeShapes />
      <Testimonials />
      <ResearchBacked />
      <About />
      <BookACall />
    </>
  );
}
