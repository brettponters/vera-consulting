"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { researchBacked } from "@/content/research-backed";

/**
 * Research-backed section — card grid with click-to-expand.
 *
 * Cards show title + metadata. Click to reveal "why it matters."
 */

function PaperCard({
  entry,
  index,
}: {
  entry: (typeof researchBacked.entries)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="group relative flex flex-col text-left rounded-lg border border-[var(--color-hairline)] bg-white p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md w-full cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4 w-full">
        <div className="flex-1">
          {/* Number */}
          <span className="font-sans text-xs font-semibold tracking-wider text-[var(--color-accent)]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <p className="font-sans font-semibold text-base md:text-lg text-[var(--color-heading)] mt-3 leading-snug">
            {entry.title}
          </p>
        </div>

        {/* Toggle indicator */}
        <span
          className="mt-1 text-[var(--color-muted)] transition-transform duration-200 text-sm shrink-0"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>

      {/* Author · Year */}
      <p className="font-sans text-xs text-[var(--color-muted)] tracking-wider mt-3">
        {entry.author}&nbsp;&middot;&nbsp;{entry.year}
      </p>

      {/* Expandable "why it matters" */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-4 pt-4 border-t border-[var(--color-hairline)] font-sans text-sm text-[var(--color-body)] leading-relaxed">
              {entry.summary}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function ResearchBacked() {
  const { eyebrow, h2, entries } = researchBacked;

  return (
    <section
      id="research-backed"
      className="py-16 md:py-24 bg-[var(--color-surface)]"
    >
      <Container size="wide">
        <Reveal>
          <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-sans font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.02em] text-[var(--color-heading)] mb-12 md:mb-16 max-w-xl">
            {h2}
          </h2>
        </Reveal>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
          {entries.map((entry, i) => (
            <Reveal key={i} delay={0.05 + i * 0.05}>
              <PaperCard entry={entry} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
