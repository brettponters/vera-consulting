"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Interactive pillars — 4 cards you click/tap to expand.
 * Shows the heading always, reveals the detail on interaction.
 */

const PILLARS = [
  {
    number: "01",
    title: "Research-grounded",
    detail:
      "Every recommendation traces back to published research, tested benchmarks, or proven production patterns. When we say a model fits your use case or an architecture will scale, we have evidence for it.",
  },
  {
    number: "02",
    title: "Responsibly powerful",
    detail:
      "AI should be capable enough to make a real difference and reliable enough to trust. Every system we integrate ships with guardrails, evaluation frameworks, and documentation. You don't have to choose between AI that works and AI that's safe.",
  },
  {
    number: "03",
    title: "Transparent",
    detail:
      "AI systems make decisions that affect real people. We're honest about what works, what doesn't, and where the real risks are — so you can make informed decisions about what to deploy and how.",
  },
  {
    number: "04",
    title: "Built to stay ahead",
    detail:
      "AI is shifting from reactive tools to proactive systems, and regulation is following close behind. We help you build policies, evaluation frameworks, and operational processes that account for where things are heading — not just where they are today.",
  },
];

export default function ScrollZoom() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PILLARS.map((pillar, i) => {
            const isOpen = active === i;
            return (
              <motion.button
                key={pillar.title}
                type="button"
                onClick={() => setActive(isOpen ? null : i)}
                className="relative text-left rounded-xl border border-[var(--color-hairline)] bg-white p-6 md:p-8 transition-all duration-200 hover:shadow-md cursor-pointer w-full"
                layout
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                      {pillar.number}
                    </span>
                    <h3 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)]">
                      {pillar.title}
                    </h3>
                  </div>
                  <span
                    className="text-[var(--color-muted)] transition-transform duration-200 text-lg shrink-0 mt-1"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-[var(--color-hairline)] font-sans text-sm md:text-base leading-relaxed text-[var(--color-body)]">
                        {pillar.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
