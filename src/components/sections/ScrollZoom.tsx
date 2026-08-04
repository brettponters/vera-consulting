"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface Pillar {
  letter: string;
  title: string;
  detail: string;
  href?: string;
  hrefLabel?: string;
}

const PILLARS: Pillar[] = [
  {
    letter: "V",
    title: "Value-Driven",
    detail:
      "Every engagement starts with the outcome your business actually needs, then we figure out whether AI is the right way to get there. If something else would work better, that's what we'll tell you. We don't pitch AI just because it's in our name.",
  },
  {
    letter: "E",
    title: "Evidence-Based",
    detail:
      "Every recommendation traces back to something concrete, published research, tested benchmarks, or production patterns we've watched hold up. When we say a model fits your work or a deal is worth your time, we have the evidence for it and we'll show it to you. We don't repeat AI hype back to you.",
  },
  {
    letter: "R",
    title: "Real Estate",
    detail:
      "This isn't general-purpose AI pointed at houses. Everything we build runs on deals: sourcing off-market properties, reading markets and sellers early, underwriting fast, and matching the right buyer to each contract. Real estate is the whole product, not one vertical we happen to serve.",
  },
  {
    letter: "A",
    title: "AI",
    detail:
      "Most consultancies talk about AI. We work in it every day, in how we run VERA itself. That hands-on depth changes what we recommend, how we estimate, and what we tell you not to do. The clearest expression of how we think is in how we run an AI strategy engagement.",
    href: "/our-strategy",
    hrefLabel: "See how we run an AI Strategy engagement",
  },
];

function GlowCard({
  pillar,
  isActive,
  anyActive,
  onSelect,
}: {
  pillar: Pillar;
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
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered && !isActive ? 0.8 : 0,
          background: "radial-gradient(350px circle at " + mousePos.x + "px " + mousePos.y + "px, rgba(201, 123, 63, 0.12), transparent 60%)",
        }}
      />

      <div
        className={"relative h-full rounded-2xl border transition-all duration-500 ease-out " + (isActive ? "border-[var(--color-accent)]/25 bg-white shadow-lg shadow-[var(--color-accent)]/5" : "border-[var(--color-hairline)] bg-white hover:border-[var(--color-accent)]/15") + " p-7 md:p-9"}
      >
        <span
          className="absolute font-sans font-bold pointer-events-none select-none transition-all duration-700 ease-out leading-none"
          style={{
            fontSize: isActive ? "clamp(5rem, 8vw, 8rem)" : "clamp(4rem, 6vw, 6rem)",
            color: "var(--color-accent)",
            opacity: isActive ? 0.08 : 0.06,
            top: "0.75rem",
            right: "1rem",
            letterSpacing: "-0.03em",
          }}
        >
          {pillar.letter}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
              {pillar.letter}
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
            className="font-sans font-black text-[var(--color-heading)] transition-all duration-500 ease-out tracking-[-0.02em] leading-tight"
            style={{ fontSize: isActive ? "2rem" : "1.625rem" }}
          >
            {pillar.title}
          </h3>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <motion.p
                  className="mt-5 font-sans font-medium text-base md:text-lg leading-[1.6] text-[var(--color-body)]"
                  initial={{ y: 8 }}
                  animate={{ y: 0 }}
                  exit={{ y: -5 }}
                  transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {pillar.detail}
                </motion.p>
                {pillar.href && (
                  <motion.div
                    initial={{ y: 6 }}
                    animate={{ y: 0 }}
                    exit={{ y: -3 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5"
                  >
                    <Link
                      href={pillar.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[var(--color-accent)] no-underline hover:opacity-80 transition-opacity"
                    >
                      {pillar.hrefLabel ?? "Learn more"}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 7h10M8 3l4 4-4 4" />
                      </svg>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-[var(--color-accent)]/15 flex items-center justify-center transition-all duration-500 ease-out"
          style={{ transform: "rotate(" + (isActive ? 45 : 0) + "deg)" }}
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
