"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StrategyLandscape } from "@/components/sections/StrategyLandscape";
import { StrategyRisks } from "@/components/sections/StrategyRisks";
import { StrategyServices } from "@/components/sections/StrategyServices";
import { StrategyProcess } from "@/components/sections/StrategyProcess";

export default function OurStrategyClient() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 30%, #F5F4F1 70%, #FFFFFF 100%)",
        }}
      >
        {/* Decorative giant V watermark */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewBox="0 0 400 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-[420px] md:w-[640px] h-auto pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M 100 0 L 200 380 L 300 0"
            stroke="#C97B3F"
            strokeWidth="56"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.06"
          />
        </motion.svg>

        <Container size="wide" className="relative z-10">
          <div className="max-w-[860px]">
            <Reveal>
              <Eyebrow className="mb-6">Strategy Guide · May 2026</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Coaching, Strategy{" "}
                <span className="text-[var(--color-accent)]">&amp;</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                Integration.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[660px] mb-10">
                How we help solo experts and practices get fluent in AI on
                the work they already do. Three things: weekly 1:1
                coaching, a strategy for which workflows are worth
                building, and the integration to actually ship them.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="filled" size="lg" arrow>
                  Book a call
                </Button>
                <a
                  href="/strategy-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[var(--color-heading)] no-underline hover:text-[var(--color-accent)] transition-colors group"
                >
                  <span className="border-b border-[var(--color-heading)] group-hover:border-[var(--color-accent)] pb-0.5 transition-colors">
                    Download the PDF
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 2v9m0 0l3.5-3.5M7 11L3.5 7.5M2 12h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Section nav strip */}
          <Reveal delay={0.6}>
            <div className="mt-16 md:mt-24 pt-8 border-t border-[var(--color-hairline)] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[920px]">
              {[
                { num: "01", label: "Landscape" },
                { num: "02", label: "Risks" },
                { num: "03", label: "Services" },
                { num: "04", label: "Process" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-3">
                  <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                    {s.num}
                  </span>
                  <span className="font-sans text-sm md:text-base font-medium text-[var(--color-heading)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <StrategyLandscape />
      <StrategyRisks />
      <StrategyServices />
      <StrategyProcess />

      {/* ─── FOUNDER VISION ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[1080px] mx-auto">
            <Reveal>
              <div>
                <Eyebrow className="mb-5">Our vision</Eyebrow>
                <div className="flex gap-5 items-stretch">
                  <div className="w-[3px] bg-[var(--color-accent)] rounded-sm shrink-0" />
                  <div>
                    <p className="font-sans italic text-lg md:text-xl text-[var(--color-heading)] leading-relaxed mb-5">
                      &ldquo;I started VERA because AI is going to change
                      knowledge work at an unprecedented pace, and the
                      people whose businesses run on what they know are the
                      ones with the most to gain and the most to lose. We
                      use AI to strengthen what people already do well, pick
                      the workflows worth building instead of the ten that
                      look good in a deck, and stay honest about both the
                      risks and the opportunities ahead.&rdquo;
                    </p>
                    <div className="font-sans text-sm font-semibold text-[var(--color-heading)]">
                      Brett Ponters
                    </div>
                    <div className="font-sans text-xs text-[var(--color-muted)] mt-0.5">
                      Founder, VERA Consulting
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <Eyebrow className="mb-5">What to expect</Eyebrow>
                <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)]">
                  VERA is incorporated as a Public Benefit Corporation. A fixed
                  percentage of every dollar we earn goes to independent AI
                  safety research.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 md:py-28 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px] mx-auto text-center">
            <Reveal>
              <Eyebrow className="mb-5">Start the conversation</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05] mb-6">
                Want to talk through your situation?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-10">
                Book a call and we&rsquo;ll walk through where you are and
                what might make sense.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="filled" size="lg" arrow>
                  Book a call
                </Button>
                <a
                  href="/strategy-guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[var(--color-heading)] no-underline hover:text-[var(--color-accent)] transition-colors group"
                >
                  <span className="border-b border-[var(--color-heading)] group-hover:border-[var(--color-accent)] pb-0.5 transition-colors">
                    Download the PDF
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 2v9m0 0l3.5-3.5M7 11L3.5 7.5M2 12h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
