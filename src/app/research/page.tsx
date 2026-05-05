"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchBacked } from "@/components/sections/ResearchBacked";

/* ─── VERA's own research / conclusions ─── */

const VERA_REPORTS = [
  {
    title: "Why most AI agents aren't ready for production",
    date: "May 2026",
    summary:
      "We looked at the data on AI agent reliability across multiple studies. The takeaway: agents that score well on benchmarks still fail at basic production tasks. The gap between demo and deployment is wider than most teams realize.",
    tags: ["AI Agents", "Reliability"],
  },
  {
    title: "The governance gap in enterprise AI",
    date: "April 2026",
    summary:
      "Most AI safety research focuses on pre-deployment testing. Almost nobody is studying what happens after launch — especially in healthcare and finance. This is the gap we exist to fill, and here's what we've found so far.",
    tags: ["Governance", "Enterprise"],
  },
  {
    title: "Agent drift is real and nobody's monitoring for it",
    date: "April 2026",
    summary:
      "Multi-agent systems degrade over time in ways that are hard to detect. We break down the research on semantic drift, coordination drift, and behavioral drift — and what to actually do about it.",
    tags: ["AI Agents", "Monitoring"],
  },
];

export default function Research() {
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
              <Eyebrow className="mb-5">Research</Eyebrow>
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
                What we&rsquo;re seeing and what informs our work.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                Our own conclusions from working in this space, plus the
                published research that backs it up.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* VERA's reports */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <Reveal>
            <Eyebrow className="mb-4">From VERA</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-12">
              Our take on where things are headed.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VERA_REPORTS.map((report, i) => (
              <Reveal key={report.title} delay={0.05 + i * 0.05}>
                <article className="flex flex-col h-full rounded-xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {report.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-accent)] bg-[var(--color-accent)]/8 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-semibold text-base md:text-lg text-[var(--color-heading)] leading-snug mb-3">
                    {report.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-sm leading-relaxed text-[var(--color-body)] mb-4 flex-1">
                    {report.summary}
                  </p>

                  {/* Date */}
                  <p className="font-sans text-xs text-[var(--color-muted)] mt-auto pt-4 border-t border-[var(--color-hairline)]">
                    {report.date}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="px-6 md:px-16">
        <Hairline />
      </div>

      {/* Papers we reference */}
      <ResearchBacked />
    </>
  );
}
