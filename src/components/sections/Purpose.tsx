"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Purpose — why RAIN exists, what we believe, PBC commitment.
 *
 * Replaces ThreeShapes. This is the values section — it should
 * feel like a founder talking, not a deck presenting.
 */
export default function Purpose() {
  return (
    <section
      id="purpose"
      aria-label="Why we exist"
      className="py-16 md:py-24 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <div className="max-w-[760px]">
          <Reveal>
            <Eyebrow className="mb-4">Why we’re doing this</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
              AI is going to change how every industry works. The question is
              whether the people building it care what happens after it ships.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="font-sans text-lg leading-relaxed text-[var(--color-body)] mb-6">
              This is why VERA exists.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
              Most companies are moving very quickly on AI and figuring out the
              consequences later. We think that’s backwards. Especially
              when the systems are making real decisions for real people.
              We’d rather be proactive than reactive. We’d rather go
              deep than go wide. And we’d rather build something that
              scales in five years than something that works well today.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-10">
              We build AI that’s efficient, responsible, and ready for
              production. All three, not a tradeoff. The companies we work
              with need systems they can actually stand behind.
            </p>
          </Reveal>

          {/* PBC commitment */}
          <Reveal delay={0.3}>
            <Hairline className="mb-8" />
            <div className="flex flex-col gap-4">
              <p className="font-sans font-semibold text-sm uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Public Benefit Corporation
              </p>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                VERA is incorporated as a Public Benefit Corporation. A fixed
                percentage of every dollar we earn goes directly to independent
                AI safety research. We made that commitment because this
                technology is powerful, and someone should be making sure
                it keeps working for people, not just on them.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
