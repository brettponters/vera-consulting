"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Interactive pillars — spotlight glow cards.
 * Clicked card expands smoothly in-place; others dim without jumping.
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

function GlowCard({
  pillar,
  isActive,
  anyActive,
  onSelect,
}: {
  pillar: (typeof PILLARS)[number];
  isActive: boolean;
  anyActive: boolean;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden rounded-2xl"
      animate={{
        opacity: anyActive && !isActive ? 0.4 : 1,
        scale: anyActive && !isActive ? 0.98 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Glow border effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered && !isActive ? 0.8 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 123, 63, 0.12), transparent 60%)`,
        }}
      />

      {/* Card surface */}
      <div
        className={`relative h-full rounded-2xl border transition-all duration-500 ease-out ${
          isActive
            ? "border-[var(--color-accent)]/25 bg-white shadow-lg shadow-[var(--color-accent)]/5"
            : "border-[var(--color-hairline)] bg-white hover:border-[var(--color-accent)]/15"
        } p-7 md:p-9`}
      >
        {/* Large decorative number */}
        <span
          className="absolute top-3 right-5 font-sans font-bold pointer-events-none select-none transition-all duration-700 ease-out"
          style={{
            fontSize: isActive ? "8rem" : "5rem",
            color: "var(--color-accent)",
            opacity: isActive ? 0.07 : 0.04,
          }}
        >
          {pillar.number}
        </span>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
              {pillar.number}
            </span>
            <div
              className="h-px bg-[var(--color-accent)]/30 origin-left transition-all duration-700 ease-out"
              style={{
                width: isActive ? "3rem" : "0rem",
                opacity: isActive ? 1 : 0,
              }}
            />
          </div>

          <h3
            className="font-sans font-semibold text-[var(--color-heading)] transition-all duration-500 ease-out"
            style={{ fontSize: isActive ? "1.5rem" : "1.2rem" }}
          >
            {pillar.title}
          </h3>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.p
                  className="mt-5 font-sans text-[15px] md:text-base leading-[1.7] text-[var(--color-body)]"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -5, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {pillar.detail}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand indicator */}
        <div
          className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-[var(--color-accent)]/15 flex items-center justify-center transition-all duration-500 ease-out"
          style={{ transform: `rotate(${isActive ? 45 : 0}deg)` }}
        >
          <span className="text-[var(--color-accent)] text-sm leading-none">+</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollZoom() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-surface)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((pillar, i) => (
            <GlowCard
              key={pillar.title}
              pillar={pillar}
              isActive={active === i}
              anyActive={active !== null}
              onSelect={() => setActive(active === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
