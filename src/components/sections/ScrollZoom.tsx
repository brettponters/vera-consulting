"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";

/**
 * Interactive pillars — spotlight glow cards that expand dramatically on click.
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
  index,
  isActive,
  anyActive,
  onSelect,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
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
      layout
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer overflow-hidden rounded-2xl"
      animate={{
        opacity: anyActive && !isActive ? 0.4 : 1,
        scale: anyActive && !isActive ? 0.97 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ gridColumn: isActive ? "1 / -1" : undefined }}
    >
      {/* Glow border effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered && !isActive ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 123, 63, 0.15), transparent 60%)`,
        }}
      />

      {/* Card surface */}
      <div
        className={`relative h-full rounded-2xl border transition-all duration-300 ${
          isActive
            ? "border-[var(--color-accent)]/30 bg-white shadow-xl"
            : "border-[var(--color-hairline)] bg-white hover:border-[var(--color-accent)]/20 hover:shadow-lg"
        } p-8 md:p-10`}
      >
        {/* Large decorative number */}
        <motion.span
          className="absolute top-4 right-6 font-sans font-bold text-[var(--color-accent)]/[0.06] pointer-events-none select-none"
          animate={{
            fontSize: isActive ? "10rem" : "6rem",
            opacity: isActive ? 1 : 0.7,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {pillar.number}
        </motion.span>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
              {pillar.number}
            </span>
            <div
              className="h-px flex-1 bg-[var(--color-accent)] origin-left transition-transform duration-500"
              style={{ transform: `scaleX(${isActive ? 1 : 0})` }}
            />
          </div>

          <motion.h3
            className="font-sans font-semibold text-[var(--color-heading)] mb-1"
            animate={{ fontSize: isActive ? "1.75rem" : "1.25rem" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {pillar.title}
          </motion.h3>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.p
                  className="mt-4 font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[640px]"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {pillar.detail}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Expand indicator */}
        <motion.div
          className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-[var(--color-accent)]/20 flex items-center justify-center"
          animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="text-[var(--color-accent)] text-lg leading-none">+</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ScrollZoom() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-[var(--color-surface)]">
      <Container size="wide">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PILLARS.map((pillar, i) => (
            <GlowCard
              key={pillar.title}
              pillar={pillar}
              index={i}
              isActive={active === i}
              anyActive={active !== null}
              onSelect={() => setActive(active === i ? null : i)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
