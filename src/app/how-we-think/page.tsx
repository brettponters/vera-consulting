"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { HowWeThink } from "@/components/sections/HowWeThink";
import { Button } from "@/components/ui/Button";

/* ─── Process phases (from how-we-work) ─── */

const PHASES = [
  {
    number: "01",
    title: "Discover",
    description:
      "We spend time with your team — engineers, ops, compliance — and learn how your business actually runs. We look at your data, your infrastructure, your regulatory situation, what you've tried before. We ask a lot of questions. By the end, we put together an honest assessment of what's feasible and what isn't.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We write the plan — architecture, evaluation criteria, governance, timeline. We define what success looks like together and scope everything to what your team can maintain long-term. You review it, we revise it, and nothing moves forward until we're both confident in it.",
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "We join your team — same codebase, same standups, same channels. We write the code together, set up guardrails and monitoring together, and document everything as we go. Your engineers are part of the entire integration.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "After launch, we stay on. We monitor performance, watch for model drift and data shifts, and make adjustments over time. We check in quarterly to review how things are running and flag anything that needs attention.",
  },
];

export default function HowWeThinkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-8 md:pt-20 md:pb-12 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-5">How we think &amp; work</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
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
                What we believe and how we put it into practice.
              </motion.span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <HowWeThink />

      {/* Process */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <Reveal>
            <Eyebrow className="mb-4">The process</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-16 md:mb-20">
              How an engagement works.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-16 md:gap-24">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.title} delay={0.05 + i * 0.05}>
                <div>
                  <Hairline className="mb-10" />
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                        {phase.number}
                      </span>
                      <h3 className="font-sans font-semibold text-xl md:text-2xl text-[var(--color-heading)] uppercase tracking-[0.06em]">
                        {phase.title}
                      </h3>
                    </div>
                    <div className="max-w-[640px]">
                      <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                Want to talk through your situation?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                Book a call and we&rsquo;ll walk through where you are
                and what might make sense.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book a call
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
