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
      "Every recommendation we make traces back to real research. A published paper, a benchmark, the technical gap between what models can do and what actually works in production. We read the research, test it, and only bring it to you when we know it holds up.",
      "For you, that means the strategy we write is based on Artificial Intelligence fundamentals. When we tell you a particular model fits your use case, or that a certain architecture will scale, we want to have evidence it will hold up.",
      "We stay current with what's happening in AI research every week to push innovation and help keep the foundation current in an ever moving market.",
    ],
  },
  {
    number: "02",
    heading: "Responsibly powerful",
    paragraphs: [
      "We believe AI is an extremely powerful tool and as it gets more powerful, capabilities will increase exponentially. Our goal is to provide reliability to that power. We focus on solving real operational problems and creating real value for your business.",
      "But power without responsibility is a liability. Every system we build has guardrails, evaluation frameworks, and documented.",
      "You shouldn't have to choose between AI that works and AI that's safe. The whole point is building systems that earn the trust to be used at scale. That means they're capable enough to make a real difference and reliable enough to trust.",
    ],
  },
  {
    number: "03",
    heading: "Transparency and integrity",
    paragraphs: [
      "We believe that this technology will outgrow even what we can envision eventually, in every industry across the world. To this point, there are real risks here for business and even humanity. Our goal is to provide transparent and honest implantation on what and why certain use cases make sense.",
      "This matters because AI systems make decisions that can affect real people, and the people responsible for those decisions need to be informed on the real risks and on a positive note massive opportunities in this field.",
    ],
  },
  {
    number: "04",
    heading: "Proactive AI",
    paragraphs: [
      "We believe Artificial Intelligence is in the midst of transforming from this reactionary technology (AI Chatbots) to a proactive assistant. This transformation has sparked a new way of thinking, along with creating severe limitations that frontier labs are actively solving. Our goal here is to bring this new ideology to how we think and implement.",
      "1. This means we help you build the policies, the evaluation frameworks, and the operational processes needed.\n2. Your AI strategy accounts for where regulation is heading, not just where it is today.\n3. It means when your competitors are scrambling to catch up with new requirements, you've already addressed them.",
      "The companies that get ahead of these problems now are the ones that won't be paying for them later. We'd rather spend time planning than firefighting, and we'd rather help you build something right the first time than fix it after it's in production.",
    ],
  },
];

export function HowWeThink() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
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
