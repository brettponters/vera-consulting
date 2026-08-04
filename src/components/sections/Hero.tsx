"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const LINE_ONE_WORDS = "Agentic AI Solutions".split(" ");

const AUDIENCES = ["Wholesalers.", "Investors.", "Realtors."];
const AUDIENCE_HOLD_MS = 5000;

function RotatingAudience() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % AUDIENCES.length),
      AUDIENCE_HOLD_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="relative inline-grid overflow-hidden align-bottom"
      style={{
        perspective: 900,
        paddingBottom: "0.08em",
        marginBottom: "-0.08em",
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={AUDIENCES[index]}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { y: "105%", rotateX: -35, opacity: 0 }
          }
          animate={{ y: 0, rotateX: 0, opacity: 1 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { y: "-105%", rotateX: 35, opacity: 0 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1"
          style={{ color: "var(--color-accent)" }}
        >
          {AUDIENCES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
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
        <div className="max-w-[1040px]">
          <Reveal delay={0}>
            <div className="mb-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                A performance-based intelligence partner
              </p>
            </div>
          </Reveal>

          <h1
            aria-label="Agentic AI Solutions for Real Estate Wholesalers, Investors, and Realtors."
            className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
          >
            <span aria-hidden="true" className="block">
              {LINE_ONE_WORDS.map((word, i) => (
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
                  {i < LINE_ONE_WORDS.length - 1 ? " " : ""}
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
              <span style={{ color: "var(--color-accent)" }}>Real Estate</span>{" "}
              <RotatingAudience />
            </motion.span>
          </h1>

          <Reveal delay={0.55}>
            <p className="font-sans font-semibold text-[var(--color-body)] text-xl md:text-2xl leading-snug max-w-[640px] mb-2">
              We can bring you more deals and buyers and better spreads, without
              ever losing what makes you&hellip; you.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
