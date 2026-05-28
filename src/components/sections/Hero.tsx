"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const H1_TEXT = "AI that's powerful, accountable, and designed to last.";
const H1_WORDS = H1_TEXT.split(" ");

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative pt-14 pb-14 md:pt-20 md:pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <svg
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M -40 620 C 180 180, 420 220, 680 420 C 940 620, 1140 60, 1480 80"
            stroke="white"
            strokeWidth="55"
            strokeLinecap="round"
            opacity="0.45"
            filter="url(#softedge)"
          />
          <defs>
            <filter id="softedge" x="-5%" y="-5%" width="110%" height="110%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
        </svg>
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-[1040px]">
          <Reveal delay={0}>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                AI consulting · Public Benefit Corporation
              </p>
            </div>
          </Reveal>

          <h1
            aria-label={H1_TEXT}
            className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}
          >
            {H1_WORDS.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                aria-hidden="true"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + i * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block whitespace-pre"
              >
                {word}
                {i < H1_WORDS.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.55}>
            <p className="font-sans font-normal text-[var(--color-body)] text-lg md:text-xl leading-relaxed max-w-[680px] mb-10">
              AI strategy, integration, and foundation. Research-backed and
              built for your team.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="filled" size="md" arrow>
                Book a call
              </Button>
              <Button href="/how-we-work" variant="ghost" size="md" arrow>
                See how we work
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
