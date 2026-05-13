"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const RISKS = [
  {
    number: "01",
    title: "Bias & Fairness",
    detail:
      "AI systems inherit and amplify biases from training data. In hiring, lending, healthcare, and insurance, this leads to discriminatory outcomes that create legal exposure and erode public trust.",
  },
  {
    number: "02",
    title: "Hallucination & Accuracy",
    detail:
      "Large language models produce confident outputs that can be factually wrong. Without validation pipelines, incorrect information enters your workflows and corrupts downstream decision-making.",
  },
  {
    number: "03",
    title: "Data Privacy & Security",
    detail:
      "AI creates new attack surfaces — from prompt injection to training data extraction — that traditional security frameworks weren't designed to address. Compliance with GDPR, CCPA, and HIPAA requires AI-specific controls.",
  },
  {
    number: "04",
    title: "Regulatory Exposure",
    detail:
      "What's compliant today may not be compliant next quarter. The EU AI Act, state-level legislation, and FTC enforcement are accelerating. Retroactive compliance costs significantly more than building it in from the start.",
  },
  {
    number: "05",
    title: "Workforce Disruption",
    detail:
      "Without a transition plan, AI adoption creates friction and talent gaps instead of productivity gains. Organizations that invest in change management see 3x higher adoption rates.",
  },
  {
    number: "06",
    title: "Vendor Lock-in",
    detail:
      "Architecture decisions made today determine your flexibility for years. Committing to a single vendor without proper evaluation is expensive to undo and often requires rebuilding from scratch.",
  },
];

function RiskCard({
  risk,
  isActive,
  anyActive,
  onSelect,
}: {
  risk: (typeof RISKS)[number];
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
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
        opacity: anyActive && !isActive ? 0.35 : 1,
        scale: anyActive && !isActive ? 0.98 : 1,
        filter: anyActive && !isActive ? "blur(1px)" : "blur(0px)",
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered && !isActive ? 0.8 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(201, 123, 63, 0.12), transparent 60%)`,
        }}
      />

      <div
        className={`relative h-full rounded-2xl border transition-all duration-500 ease-out ${
          isActive
            ? "border-[var(--color-accent)]/25 bg-white shadow-lg shadow-[var(--color-accent)]/5"
            : "border-[var(--color-hairline)] bg-white hover:border-[var(--color-accent)]/15"
        } p-7 md:p-9`}
      >
        <span
          className="absolute top-3 right-5 font-sans font-bold pointer-events-none select-none transition-all duration-700 ease-out"
          style={{
            fontSize: isActive ? "8rem" : "5rem",
            color: "var(--color-accent)",
            opacity: isActive ? 0.07 : 0.04,
          }}
        >
          {risk.number}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
              {risk.number}
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
            style={{ fontSize: isActive ? "1.4rem" : "1.15rem" }}
          >
            {risk.title}
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
                  transition={{
                    duration: 0.4,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {risk.detail}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-[var(--color-accent)]/15 flex items-center justify-center transition-all duration-500 ease-out"
          style={{ transform: `rotate(${isActive ? 45 : 0}deg)` }}
        >
          <span className="text-[var(--color-accent)] text-sm leading-none">
            +
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function StrategyRisks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end mb-12 md:mb-16">
          <div>
            <Reveal>
              <Eyebrow className="mb-4">Key risks</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-[1.05] max-w-[640px]">
                Where AI adoption goes wrong.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-base md:text-lg leading-relaxed text-[var(--color-body)] max-w-[560px] mt-6">
                Most AI failures aren&rsquo;t technical. They&rsquo;re
                organizational. These are the six areas where we see companies
                get caught off guard.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="text-left md:text-right">
              <div className="font-sans font-bold text-5xl md:text-6xl text-[var(--color-accent)] leading-none tracking-[-0.03em]">
                58pt
              </div>
              <div className="font-sans text-xs md:text-sm text-[var(--color-muted)] mt-2 max-w-[180px] md:ml-auto leading-snug">
                gap between AI adoption and governance readiness
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RISKS.map((risk, i) => (
            <RiskCard
              key={risk.title}
              risk={risk}
              isActive={active === i}
              anyActive={active !== null}
              onSelect={() => setActive(active === i ? null : i)}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="flex gap-4 items-stretch mt-16 max-w-[820px] mx-auto">
            <div className="w-[3px] bg-[var(--color-accent)] rounded-sm shrink-0" />
            <p className="font-sans italic text-lg md:text-xl text-[var(--color-heading)] leading-relaxed py-1">
              &ldquo;The companies that get AI right aren&rsquo;t the ones that
              move fastest. They&rsquo;re the ones that build the governance to
              sustain it.&rdquo;
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
