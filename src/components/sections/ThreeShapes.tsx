"use client";

import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { threeShapes } from "@/content/three-shapes";

/**
 * Three Shapes section.
 *
 * No eyebrow — the H2 carries the section.
 * Three equal-weight typographic cards: Strategy / Build / Steward.
 * No prices, no tiers, no "Learn more" buttons, no icons.
 */
export function ThreeShapes() {
  return (
    <section
      id="three-shapes"
      className="py-24 md:py-32 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <Reveal>
          <h2 className="font-serif font-normal text-3xl md:text-4xl text-[var(--color-heading)] mb-16">
            {threeShapes.h2}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {threeShapes.shapes.map((shape, i) => (
            <Reveal key={shape.name} delay={i * 0.1}>
              <div className="flex flex-col gap-4 pr-0 md:pr-12 pb-10 md:pb-0">
                {i > 0 && (
                  <Hairline
                    variant="contained"
                    className="block md:hidden mb-2"
                  />
                )}
                <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  {shape.name}
                </p>
                <p className="font-serif font-normal text-xl md:text-2xl text-[var(--color-heading)] leading-snug">
                  {shape.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-14 md:mt-16">
            <Hairline />
            <p className="mt-6 font-sans text-sm text-[var(--color-muted)]">
              {threeShapes.closing}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
