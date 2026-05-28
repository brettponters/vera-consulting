"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Assessment",
    description:
      "We start by understanding where you are, infrastructure, AI maturity, goals, and constraints. We evaluate what's working, what's not, and where AI can create real value. The strategy we build is only as good as our understanding of your reality.",
    details: [
      "Infrastructure review",
      "Stakeholder interviews",
      "Data readiness",
      "Risk identification",
      "Competitive landscape",
    ],
  },
  {
    number: "2",
    title: "Scope of Work",
    description:
      "We define exactly what we'll deliver, when, and what success looks like. Every scope of work includes measurable success criteria. We typically present two or three options at different levels of depth so you can choose the engagement that fits your budget and timeline.",
    details: [
      "Defined deliverables",
      "Timeline and milestones",
      "Resource requirements",
      "Success criteria",
      "Investment summary",
    ],
  },
  {
    number: "3",
    title: "Execution",
    description:
      "We do the work, strategy, integration, foundation, training, whatever the scope calls for. Regular updates, full documentation, no lock-in. When we're done, you own everything we built. Every engagement includes a 30-day post-completion support window.",
    details: [
      "Weekly check-ins",
      "Progress reporting",
      "Full documentation",
      "Knowledge transfer",
      "Post-engagement support",
    ],
  },
];

const TIMELINE = [
  { label: "Assessment", value: "2-3 weeks" },
  { label: "Scope of Work", value: "1 week" },
  { label: "Execution", value: "4-12 weeks" },
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
                How we scope a strategy engagement.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[560px]">
                Every engagement starts with an honest assessment, a scoped
                proposal, and a defined execution plan. For the deeper
                implementation phases, see{" "}
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
