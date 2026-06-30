"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * HowWeThink, four pillars, fully expanded, editorial layout.
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
    heading: "Aligned with you",
    paragraphs: [
      "We make money only when our partners close. No retainer, no hourly, no paying to try. That one fact decides everything: we send deals that actually work for you, because deals that don't never pay us.",
    ],
  },
  {
    number: "02",
    heading: "Fresh data. Full service.",
    paragraphs: [
      "The technology changes every week. We pull our data fresh, county by county, from our own maintained database. Not a shared list that is already six months old when you touch it. We stay at the frontier and put what we find into your deals: sourcing properties based on your criteria, running the underwriting, and finding the right buyer. We earn only when you close.",
    ],
  },
  {
    number: "03",
    heading: "Numbers you can trust",
    paragraphs: [
      "A deal is only as good as the math behind it. We back every ARV, rent, and rehab figure with real data, and we are honest about what we don't know. You make the offer with confidence because the numbers hold up.",
    ],
  },
  {
    number: "04",
    heading: "A partner, not a tool",
    paragraphs: [
      "We don't hand you software and walk away. We source the deals, surface the sellers, run the numbers, and stay in it as the market and the models shift. The edge keeps coming because someone is out at the frontier finding it for you.",
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
