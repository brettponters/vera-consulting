"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whyNow } from "@/content/why-now";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";

/**
 * WhyNow, "The 18 months" capability-partner reframe.
 *
 * Scroll-revealed editorial section with a left-edge progress rail
 * that fills as the reader moves through the three pairs. Each pair
 * is numbered (01 → 02 → 03) and animates in on viewport entry.
 */

export default function WhyNow() {
  const pairsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: pairsRef,
    offset: ["start 70%", "end 30%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section aria-label="The next 18 months">
      <Container size="wide">
        <div className="py-24 md:py-32">
          {/* Eyebrow + H2 */}
          <Reveal delay={0}>
            <Eyebrow className="mb-6">{whyNow.eyebrow}</Eyebrow>
            <h2 className="font-sans font-semibold text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.02em] text-[var(--color-heading)] max-w-[760px]">
              {whyNow.h2}
            </h2>
          </Reveal>

          {/* Three pairs with progress rail */}
          <div ref={pairsRef} className="mt-20 md:mt-28 relative">
            {/* Background rail (full track) */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-hairline)]"
            />
            {/* Filled rail (terracotta, scroll-tied) */}
            <motion.div
              aria-hidden="true"
              style={{ height: railHeight }}
              className="absolute left-0 top-0 w-px bg-[var(--color-accent)] origin-top"
            />

            <div className="flex flex-col pl-8 md:pl-14">
              {whyNow.pairs.map((pair, i) => (
                <div key={i}>
                  <Hairline className="mb-16 md:mb-20" />
                  <Reveal delay={i * 0.12}>
                    <div className="pb-16 md:pb-20 flex flex-col gap-5 max-w-[860px]">
                      {/* Pair numeral */}
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs tracking-[0.18em] text-[var(--color-muted)]"
                      >
                        {String(i + 1).padStart(2, "0")} / 03
                      </span>

                      {/* DECISION NOW label + body */}
                      <div className="flex flex-col gap-3">
                        <span className="font-sans font-medium text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
                          Decision now
                        </span>
                        <p className="font-sans font-medium text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug text-[var(--color-heading)]">
                          {pair.decisionNow}
                        </p>
                      </div>

                      {/* POSITIONING BY 2027 label + body */}
                      <div className="flex flex-col gap-3 mt-2">
                        <span className="font-sans font-medium text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                          Positioning by 2027
                        </span>
                        <p className="font-sans font-medium text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug text-[var(--color-muted)]">
                          {pair.positioningBy2027}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Closing prose */}
          <Reveal delay={0.36}>
            <Hairline className="mb-12" />
            <div className="flex flex-col gap-6 max-w-[680px]">
              {whyNow.closingProse.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans font-normal text-base leading-relaxed text-[var(--color-body)]"
                  style={i === 1 ? { color: "var(--color-muted)" } : undefined}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
