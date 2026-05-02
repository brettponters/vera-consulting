"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedDiagram } from "@/components/ui/AnimatedDiagram";

// founder to confirm — all card copy below

const shapes = [
  {
    title: "Strategy",
    // founder to confirm
    body: "We sit with your team, read your stack, and write the plan that actually fits — what to integrate, what to buy, what to leave alone.",
    diagram: (
      // Circle mark for Strategy
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke="var(--diagram-accent)"
          strokeWidth="var(--diagram-stroke)"
        />
      </svg>
    ),
  },
  {
    title: "Integrate",
    // founder to confirm
    body: "We design and ship the systems hands-on — models, evals, retrieval, agent workflows — with the depth to know how they behave under load.",
    diagram: (
      // Square mark for Build
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        aria-hidden="true"
      >
        <rect
          x="7"
          y="7"
          width="26"
          height="26"
          stroke="var(--diagram-accent)"
          strokeWidth="var(--diagram-stroke)"
        />
      </svg>
    ),
  },
  {
    title: "Operate",
    // founder to confirm
    body: "We stay long enough to watch what we built run in production, tune it, document it, and hand it off so your team owns what they run.",
    diagram: (
      // Triangle mark for Operate
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        aria-hidden="true"
      >
        <polygon
          points="20,6 34,34 6,34"
          stroke="var(--diagram-accent)"
          strokeWidth="var(--diagram-stroke)"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function ThreeShapes() {
  return (
    <section
      id="three-shapes"
      className="py-16 md:py-24 bg-[var(--color-bg)]"
    >
      <Container size="wide">
        <Reveal>
          <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] mb-12 md:mb-16">
            Three shapes. Sized to the work.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {shapes.map((shape, i) => (
            <Reveal key={shape.title} delay={i * 0.1}>
              <div className="group py-8 px-8 bg-[var(--color-bg)] border border-[var(--color-hairline)] hover:border-[var(--color-body)] transition-colors duration-300">
                <AnimatedDiagram
                  reveal="fade"
                  delay={i * 0.1 + 0.1}
                  strokeWidth={1.5}
                  className="mb-6"
                >
                  {shape.diagram}
                </AnimatedDiagram>

                <h3 className="font-sans font-semibold text-xl text-[var(--color-heading)] mb-3">
                  {shape.title}
                </h3>

                {/* founder to confirm */}
                <p className="font-sans font-normal text-base text-[var(--color-body)] leading-relaxed">
                  {shape.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
