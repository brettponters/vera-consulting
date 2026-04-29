"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { palette } from "@/lib/theme";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

/**
 * Testimonials — horizontal scroll-snap carousel.
 *
 * Architecture:
 * - Desktop (> 640px): cards sit in a horizontal overflow-x scroll track
 *   with scroll-snap-type: x mandatory. Each card snaps cleanly.
 *   framer-motion whileInView drives the section-entry reveal.
 * - Mobile (≤ 640px): always a vertical stack; no horizontal scroll.
 * - prefers-reduced-motion: all motion stripped; vertical static list
 *   at every breakpoint.
 *
 * Motion is in the same ease-out family as WhyNow but deliberately quieter —
 * this is not the showpiece. Cards stagger-fade into view on section entry.
 * No autoplay. No arrow buttons. No pagination dots.
 *
 * Terracotta appears once: the opening quotation mark on each card.
 * All other color is palette-locked.
 *
 * All testimonial content is bracketed placeholder. Do NOT invent quotes
 * or attribution before the founder has confirmed with each client.
 */
export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section aria-label="Client testimonials">
      {/* ── Mobile + reduced-motion: vertical static stack ── */}
      <div
        className={
          shouldReduceMotion ? "block" : "block sm:hidden"
        }
      >
        <VerticalStack />
      </div>

      {/* ── Desktop: horizontal scroll-snap track ── */}
      {!shouldReduceMotion && (
        <div className="hidden sm:block">
          <HorizontalTrack />
        </div>
      )}
    </section>
  );
}

// ─── Horizontal scroll-snap (desktop) ─────────────────────────────────────────

function HorizontalTrack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className="py-24"
      style={{ backgroundColor: `var(--color-bg)` }}
    >
      {/* Section heading — contained, never scrolls */}
      <Container size="wide">
        <motion.h2
          className="font-serif font-normal text-[clamp(1.5rem,2.8vw,2.25rem)] leading-tight mb-2"
          style={{ color: palette.heading }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {testimonials.h2}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <Hairline />
        </motion.div>
      </Container>

      {/*
       * Scroll track: full-width, overflows horizontally.
       * Padding-left aligns the first card with the Container grid;
       * padding-right gives the last card room to breathe.
       * scroll-snap-type: x mandatory — each card locks to a snap point.
       */}
      <div
        className="mt-10 flex flex-row overflow-x-auto gap-6 pb-6"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          // Align track start with Container wide grid (matches px-6 md:px-10 lg:px-12)
          paddingLeft: "clamp(1.5rem, calc((100vw - 1200px) / 2 + 3rem), 50vw)",
          paddingRight: "clamp(1.5rem, calc((100vw - 1200px) / 2 + 3rem), 50vw)",
          // Hide scrollbar visually; track is still scrollable
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        // Webkit scrollbar hidden via CSS class below
        aria-label="Testimonials — scroll to see all"
      >
        {testimonials.cards.map((card, i) => (
          <motion.div
            key={i}
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: i * 0.08,
            }}
          >
            <TestimonialCard card={card} />
          </motion.div>
        ))}
      </div>

      {/* Scroll hint — a hairline indicator, no dots or arrows */}
      <Container size="wide">
        <motion.p
          className="font-sans text-xs mt-4"
          style={{ color: palette.muted }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          Scroll to read all
        </motion.p>
      </Container>
    </div>
  );
}

// ─── Vertical stack (mobile + reduced-motion) ──────────────────────────────────

function VerticalStack() {
  return (
    <div
      className="py-20"
      style={{ backgroundColor: `var(--color-bg)` }}
    >
      <Container size="wide">
        <h2
          className="font-serif font-normal text-[clamp(1.4rem,5vw,2.25rem)] leading-tight mb-2"
          style={{ color: palette.heading }}
        >
          {testimonials.h2}
        </h2>

        <Hairline />

        <div className="mt-10 flex flex-col gap-8">
          {testimonials.cards.map((card, i) => (
            <TestimonialCard key={i} card={card} />
          ))}
        </div>
      </Container>
    </div>
  );
}

// ─── Card ──────────────────────────────────────────────────────────────────────

interface TestimonialCardProps {
  card: {
    quote: string;
    name: string;
    role: string;
    organization: string;
  };
}

/**
 * A single testimonial card.
 *
 * Visual anatomy:
 * - Opening quote glyph in terracotta (accent) — the only accent touch in the section
 * - Quote body in display serif, generous leading
 * - Attribution: name · role · organization in muted sans
 * - Raised surface background, hairline border
 *
 * Width on desktop: 420px fixed, tall enough to hold a ~20-word quote comfortably.
 * On mobile the card fills the container width.
 */
function TestimonialCard({ card }: TestimonialCardProps) {
  return (
    <article
      className="
        flex flex-col justify-between
        w-full sm:w-[420px] sm:flex-shrink-0
        rounded-sm border p-8 sm:p-10
      "
      style={{
        backgroundColor: `var(--color-surface)`,
        borderColor: palette.hairline,
        minHeight: "260px",
      }}
    >
      {/* Quote body */}
      <div>
        {/* Terracotta opening mark — the single accent touch per the palette contract */}
        <span
          aria-hidden="true"
          className="font-serif font-normal block leading-none mb-4"
          style={{
            color: palette.accent,
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            lineHeight: 1,
          }}
        >
          &#8220;
        </span>

        <blockquote
          className="font-serif font-normal leading-relaxed"
          style={{
            color: palette.heading,
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
          }}
        >
          {card.quote}
        </blockquote>
      </div>

      {/* Attribution */}
      <footer className="mt-8 pt-6 border-t" style={{ borderColor: palette.hairline }}>
        <p
          className="font-sans text-sm leading-snug"
          style={{ color: palette.muted }}
        >
          <span style={{ color: palette.body }}>{card.name}</span>
          {" · "}
          {card.role}
          {" · "}
          {card.organization}
        </p>
      </footer>
    </article>
  );
}
