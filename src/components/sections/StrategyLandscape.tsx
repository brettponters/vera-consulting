"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    value: 82,
    suffix: "%",
    label: "of real estate professionals now use AI tools, up from 58% in 2024",
    source: "RPR, 2026",
  },
  {
    value: 88,
    suffix: "%",
    label: "of real estate investors are already piloting AI across their operations",
    source: "JLL, 2026",
  },
  {
    value: 17,
    suffix: "%",
    label: "say AI has had a significant positive impact on their business",
    source: "NAR, 2025",
  },
  {
    value: 40,
    suffix: "%",
    label: "of enterprise applications will embed AI agents by end of 2026, up from under 5% in 2025",
    source: "Gartner, 2026",
  },
  {
    value: 301,
    prefix: "$",
    suffix: "B",
    label: "global AI spending in 2026, up 35% year-over-year",
    source: "Gartner, 2026",
  },
];

function CountUp({
  to,
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(to);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setVal(0);
  }, []);

  useEffect(() => {
    if (!hydrated || !inView) return;
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hydrated, inView, to, duration]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

const COPY = [
  {
    head: "AI is everywhere in real estate now",
    body: "82% of real estate professionals use AI tools and 88% of real estate investors are actively piloting it. The biggest operators have standardized on it. The edge is moving to whoever uses it deepest, not just first.",
  },
  {
    head: "Almost nobody is getting real value",
    body: "Only 17% say AI has had a significant positive impact on their business. Adoption raced ahead of results. Most wholesalers are still buying the same tired lists and running the same generic outreach. That gap is the opening. Real deal intelligence looks nothing like bolting a chatbot onto your CRM.",
  },
  {
    head: "The technology moves every week",
    body: "New models, new data sources, new ways to find motivated sellers ship constantly. A tool you buy is behind the day it arrives. A partner who stays at the frontier and puts what they find into your deals is the only thing that keeps compounding. That is the difference between a tool and a partner.",
  },
  {
    head: "The agentic wave is just arriving",
    body: "Gartner puts global AI spending at $301 billion in 2026 and projects 40% of enterprise applications will embed AI agents by year end, up from under 5% last year. The wholesalers who set up real AI deal flow now own the edge for the next decade.",
  },
];

export function StrategyLandscape() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="max-w-[820px] mb-16 md:mb-20">
          <Reveal>
            <Eyebrow className="mb-4">The AI landscape</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05]">
              The edge is here.{" "}
              <span className="text-[var(--color-muted)]">
                Most of the market is missing it.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Big stat row */}
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-[var(--color-hairline)]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`py-8 md:py-10 px-4 md:px-6 ${
                i % 2 === 1 ? "md:border-l" : ""
              } ${i > 0 ? "md:border-l" : ""} border-[var(--color-hairline)] ${
                i === 2 || i === 4
                  ? "border-l border-[var(--color-hairline)]"
                  : ""
              }`}
            >
              <div className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--color-accent)] leading-none tracking-[-0.03em]">
                {s.prefix}
                <CountUp to={s.value} decimals={0} />
                {s.suffix}
              </div>
              <p className="font-sans text-xs md:text-sm text-[var(--color-body)] mt-4 leading-snug">
                {s.label}
              </p>
              <p className="font-sans text-[10px] md:text-xs italic text-[var(--color-muted)] mt-2">
                {s.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Context paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-14 mt-16 md:mt-20 max-w-[1080px]">
          {COPY.map((p, i) => (
            <Reveal key={p.head} delay={0.05 + i * 0.05}>
              <h3 className="font-sans font-semibold text-base md:text-lg text-[var(--color-heading)] mb-3 tracking-[-0.01em]">
                {p.head}
              </h3>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
