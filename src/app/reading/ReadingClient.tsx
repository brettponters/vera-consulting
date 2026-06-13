"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchBacked } from "@/components/sections/ResearchBacked";

export default function ReadingClient() {
  return (
    <>
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-5">Reading</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                The papers we keep coming back to.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                This is the research that shapes how we find the edge in real
                estate. We stay at the frontier so the work points at your
                deals. We update this list as the field moves.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ResearchBacked />
    </>
  );
}
