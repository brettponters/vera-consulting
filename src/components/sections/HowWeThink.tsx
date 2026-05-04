"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * HowWeThink — four pillars, fully expanded, editorial layout.
 *
 * Each pillar gets a number, heading, and multiple paragraphs of detail.
 * No accordion, no hiding. The reader sees everything.
 */

interface Pillar {
  number: string;
  heading: string;
  paragraphs: string[];
}

const pillars: Pillar[] = [
  {
    number: "01",
    heading: "Research-grounded",
    paragraphs: [
      "Every recommendation traces back to published research, tested benchmarks, or proven production patterns. When we say a model fits your use case or an architecture will scale, we have evidence for it.",
    ],
  },
  {
    number: "02",
    heading: "Responsibly powerful",
    paragraphs: [
      "AI should be capable enough to make a real difference and reliable enough to trust. Every system we integrate ships with guardrails, evaluation frameworks, and documentation. You don't have to choose between AI that works and AI that's safe.",
    ],
  },
  {
    number: "03",
    heading: "Transparent",
    paragraphs: [
      "AI systems make decisions that affect real people. We're honest about what works, what doesn't, and where the real risks are — so you can make informed decisions about what to deploy and how.",
    ],
  },
  {
    number: "04",
    heading: "Built to stay ahead",
    paragraphs: [
      "AI is shifting from reactive tools to proactive systems, and regulation is following close behind. We help you build policies, evaluation frameworks, and operational processes that account for where things are heading — not just where they are today.",
    ],
  },
];

export function HowWeThink() {
  return (
    <section id="how-we-think" className="py-16 md:py-24 bg-[var(--color-surface)]">
      <Container size="wide">
        <Reveal>
          <Eyebrow className="mb-4">How we think</Eyebrow>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] mb-16 md:mb-20">
            Four things we hold to.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.heading} delay={0.05 + i * 0.05}>
              <div>
                <Hairline className="mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
                  {/* Left column: number + heading */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted)]">
                      {pillar.number}
                    </span>
                    <h3 className="font-sans font-semibold text-xl md:text-2xl text-[var(--color-heading)] uppercase tracking-[0.06em]">
                      {pillar.heading}
                    </h3>
                  </div>

                  {/* Right column: detailed paragraphs */}
                  <div className="flex flex-col gap-5 max-w-[640px]">
                    {pillar.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="font-sans text-base leading-relaxed text-[var(--color-body)]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
