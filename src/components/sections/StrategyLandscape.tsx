"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    value: 88,
    suffix: "%",
    label: "of organizations use AI regularly in at least one business function",
    source: "McKinsey, 2026",
  },
  {
    value: 92,
    suffix: "%",
    label: "of Fortune 500 companies have deployed generative AI",
    source: "Fortune, 2026",
  },
  {
    value: 25,
    suffix: "%",
    label: "have governance frameworks robust enough to match adoption pace",
    source: "Grant Thornton, 2026",
  },
  {
    value: 78,
    suffix: "%",
    label: "of executives lack confidence they could pass an AI governance audit",
    source: "Grant Thornton, 2026",
  },
  {
    value: 2.5,
    prefix: "$",
    suffix: "T",
    label: "global AI spending in 2026, up 44% year-over-year",
    source: "Gartner, 2026",
    decimals: 1,
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
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, to, duration]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

const COPY = [
  {
    head: "Adoption has outpaced readiness",
    body: "88% of organizations now use AI regularly in at least one business function. 92% of Fortune 500 companies have deployed generative AI across their operations. But only 25% have governance frameworks robust enough to match that pace.",
  },
  {
    head: "The governance gap is real",
    body: "AI adoption has outrun AI governance by 58 percentage points — the widest enterprise adoption-to-governance gap on record. 78% of executives say they lack confidence their company could pass an independent AI governance audit within 90 days.",
  },
  {
    head: "Regulation is accelerating",
    body: "The EU AI Act is in effect. U.S. states are passing AI-specific legislation. The SEC has issued disclosure guidance. NIST has published its AI Risk Management Framework. Companies that built without governance are retrofitting under pressure.",
  },
  {
    head: "The gap is widening",
    body: "McKinsey identifies a small group of AI high performers (roughly 6% of companies) that attribute more than 5% of EBIT to AI. These organizations are 2.8x more likely to have fundamentally redesigned their workflows around AI, not just layered it on top.",
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
              The adoption is here.{" "}
              <span className="text-[var(--color-muted)]">
                The infrastructure isn&rsquo;t.
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
                <CountUp to={s.value} decimals={s.decimals ?? 0} />
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
