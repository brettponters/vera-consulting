"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Your Criteria",
    description:
      "We start with what you actually want: the markets you work, the types of deals you take under contract, and the buyers you already know. The sharper your criteria, the sharper what we source.",
    details: [
      "Your target markets",
      "Deal criteria and price range",
      "Your existing buyers",
      "Property types",
      "Timeline and volume",
    ],
  },
  {
    number: "2",
    title: "We Source and Underwrite",
    description:
      "We source off-market properties by your criteria using fresh data pulled county by county from our own database, underwrite every contract, and match the deal to the right buyer on our list. You get deals with the math done, not raw lists to dig through.",
    details: [
      "Off-market deal sourcing",
      "Fresh data, county by county",
      "ARV and underwriting",
      "Pre-screened to your criteria",
      "Buyer list matching",
    ],
  },
  {
    number: "3",
    title: "We JV, You Close",
    description:
      "You take the deal under contract. We handle the underwriting and connect you with the right buyer. We JV on every deal together, so we only win when you close. The partnership keeps running as long as you keep closing.",
    details: [
      "Deal under contract",
      "We find the buyer",
      "JV on every deal",
      "Paid when you close",
      "A real partnership",
    ],
  },
];

const TIMELINE = [
  { label: "Your Criteria", value: "1 call" },
  { label: "We Source", value: "Ongoing" },
  { label: "You Close", value: "We JV the deal" },
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
                It starts with your criteria, runs on the deals we source and
                underwrite, and pays off when you close. We JV on every deal,
                so we only win when you do. For
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
