"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { RotatingWord } from "@/components/ui/RotatingWord";

export default function Hero({ outbound = false }: { outbound?: boolean }) {
  const lineOneWords = (outbound ? "Cold Email Outbound" : "Agentic AI Solutions").split(" ");
  const audiences = ["Wholesalers.", "Investors.", "Agents."];
  return (
    <section
      aria-label="Introduction"
      className="relative pt-14 pb-8 md:pt-20 md:pb-12 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F8F6F1 0%, #F1EDE5 45%, #F1EDE5 72%, #F8F6F1 100%)",
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
        <div className={outbound ? "max-w-[1200px]" : "max-w-[1040px]"}>
          <Reveal delay={0}>
            <div className="mb-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                {outbound
                  ? "A founder-led outbound partner"
                  : "A performance-based intelligence partner"}
              </p>
            </div>
          </Reveal>

          <h1
            aria-label={
              outbound
                ? "Cold Email Outbound for Growing PPC Agencies."
                : "Agentic AI Solutions for Real Estate Wholesalers, Investors, and Agents."
            }
            className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
            style={{
              fontSize: outbound
                ? "clamp(2.5rem, 4.7vw, 4.5rem)"
                : "clamp(2.5rem, 5.5vw, 5rem)",
            }}
          >
            <span aria-hidden="true" className="block">
              {lineOneWords.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + i * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block whitespace-pre"
                >
                  {word}
                  {i < lineOneWords.length - 1 ? " " : ""}
                </motion.span>
              ))}
            </span>
            <motion.span
              aria-hidden="true"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              for{" "}
              {outbound ? (
                <span style={{ color: "var(--color-accent)" }}>
                  Growing PPC Agencies.
                </span>
              ) : (
                <>
                  <span style={{ color: "var(--color-accent)" }}>Real Estate</span>{" "}
                  <RotatingWord
                    words={audiences}
                    style={{ color: "var(--color-accent)" }}
                  />
                </>
              )}
            </motion.span>
          </h1>

          <Reveal delay={0.55}>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[640px] mb-2">
              {outbound
                ? "We build and run the outbound system that turns your agency’s work into qualified conversations, without adding another job to your team."
                : "We can bring you more deals and buyers and better spreads, without ever losing what makes you… you."}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
