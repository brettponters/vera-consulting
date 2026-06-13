"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Your Buy Box",
    description:
      "We start with what you actually want: market, asset type, price band, strategy, and the deals you'd buy tomorrow. The sharper your buy box, the sharper what we send. No deal we source is worth anything if it doesn't fit how you operate.",
    details: [
      "Market and neighborhoods",
      "Asset type and price band",
      "Wholesale, flip, hold, or land",
      "Capital and timeline",
      "Deal criteria",
    ],
  },
  {
    number: "2",
    title: "We Source",
    description:
      "We run the smartest models in the world across the data most investors never touch, surface off-market deals and motivated sellers, and run the numbers before we send anything. You get deals that fit, with the math already done, not raw lists to dig through.",
    details: [
      "Off-market deal sourcing",
      "Motivated-seller signals",
      "ARV, rehab, and rent comps",
      "Pre-screened to your buy box",
      "Refreshed as inventory moves",
    ],
  },
  {
    number: "3",
    title: "You Close, We Win",
    description:
      "You make the offers and close the deals. We stay at the frontier of the technology and keep feeding your pipeline. We only get paid when you close, so our incentive is simple: more deals that actually work for you.",
    details: [
      "Deals delivered, not dashboards",
      "Disposition and buyer matching",
      "Always at the model frontier",
      "Paid only when you close",
      "A partnership, not a contract",
    ],
  },
];

const TIMELINE = [
  { label: "Your Buy Box", value: "1 call" },
  { label: "We Source", value: "Ongoing" },
  { label: "You Close", value: "We win when you do" },
];

export function StrategyProcess() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 md:gap-16 mb-16 md:mb-20 items-end">
          <div className="max-w-[820px]">
            <Reveal>
              <Eyebrow className="mb-4">Process</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05] mb-6">
                How the partnership works.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[560px]">
                It starts with your buy box, runs on the deals and seller leads
                we source, and pays off when you close. We win when you win. For
                more on how we run it, see{" "}
                <a
                  href="/how-we-work"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  how we work
                </a>
                .
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="border-l-2 border-[var(--color-accent)] pl-5">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-accent)] mb-3">
                Typical Timeline
              </div>
              <div className="space-y-2">
                {TIMELINE.map((t) => (
                  <div
                    key={t.label}
                    className="flex justify-between items-baseline gap-4 font-sans text-sm"
                  >
                    <span className="font-semibold text-[var(--color-heading)]">
                      {t.label}
                    </span>
                    <span className="text-[var(--color-muted)]">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vertical progress line + steps */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[14px] md:left-[28px] top-2 bottom-2 w-px bg-[var(--color-accent)]/30 origin-top hidden md:block"
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start">
                  {/* Number marker */}
                  <div className="flex items-start gap-3 relative">
                    <div className="w-7 h-7 md:w-14 md:h-14 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center shrink-0 relative z-10">
                      <span className="font-sans font-bold text-sm md:text-2xl text-[var(--color-accent)]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-[760px]">
                    <h3 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] mb-6">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 pt-4 border-t border-[var(--color-hairline)]">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className="font-mono text-[11px] tracking-[0.06em] uppercase text-[var(--color-muted)]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
