"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Six AI capabilities for real estate and real estate investing.
 * Each card: custom minimal SVG line icon + layered editorial treatment.
 * Staggered scroll-reveal. Compositor-friendly (transform + opacity only).
 */

interface Capability {
  key: string;
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
}

// ── Custom SVG icons, 24×24 viewBox, 1.5px stroke, no fill ──────────────

function IconMarketing() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Megaphone / broadcast shape */}
      <path
        d="M4 9v6h3l5 4V5L7 9H4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17 7c1.66 1.1 2.5 2.7 2.5 5s-.84 3.9-2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 9.5c.9.7 1.5 1.7 1.5 2.5s-.6 1.8-1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconFollowUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Clock with a reply arrow */}
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4l-2.5 2.5M20 4h-3M20 4v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconResearch() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* House outline + magnifier */}
      <path d="M3 11L12 4l9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 9.5V20h5v-5h4v5h5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="18.5" y1="18.5" x2="20.5" y2="20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconContracts() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Document with shield/check */}
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShowings() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Calendar + map pin */}
      <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="3" x2="7" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13" y1="3" x2="13" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Route dots */}
      <circle cx="20" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M20 11.5c0 2.5-3 5-3 5s-3-2.5-3-5a3 3 0 0 1 6 0z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconExperience() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Star / person with radiate lines, client delight */}
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sparkle marks */}
      <line x1="19" y1="5" x2="21" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="19" y1="3" x2="21" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="3" y1="5" x2="5" y2="3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="3" y1="3" x2="5" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

const CAPABILITIES: Capability[] = [
  {
    key: "research",
    num: "01",
    title: "Off-market deal sourcing",
    body: "Off-market properties, distressed and motivated-seller signals, surfaced before they hit the market.",
    icon: <IconResearch />,
  },
  {
    key: "followups",
    num: "02",
    title: "Motivated-seller leads",
    body: "Seller leads answered in minutes, the slow ones nudged, your buyer and seller lists kept warm.",
    icon: <IconFollowUp />,
  },
  {
    key: "showings",
    num: "03",
    title: "Comps, ARV & underwriting",
    body: "Comps, repair estimates, and rent or flip math run against your buy box, so you know the number fast.",
    icon: <IconShowings />,
  },
  {
    key: "marketing",
    num: "04",
    title: "Listing & disposition marketing",
    body: "Listing copy, just-listed and just-sold posts, and dispo blasts to your buyer list, in your voice.",
    icon: <IconMarketing />,
  },
  {
    key: "contracts",
    num: "05",
    title: "Contracts & compliance",
    body: "Paperwork prepped, signatures chased, disclosures and code flagged.",
    icon: <IconContracts />,
  },
  {
    key: "experience",
    num: "06",
    title: "Client & seller experience",
    body: "Instant answers and proactive updates, so every client and seller feels like your only one.",
    icon: <IconExperience />,
  },
];

function CapabilityCard({
  cap,
  index,
}: {
  cap: Capability;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduced = useReducedMotion();

  const show = inView || reduced;
  const ease = [0.22, 1, 0.36, 1] as const;

  // Alternate between surface and bg for visual rhythm
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease }}
      className="relative rounded-2xl overflow-hidden group"
      style={{
        background: isEven ? "var(--color-surface)" : "var(--color-bg)",
        border: "1px solid var(--color-hairline)",
      }}
    >
      {/* Top accent bar, grows from left on hover, pure transform */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: "var(--color-hairline)" }}
      />
      <div
        className="absolute top-0 left-0 h-[2px] transition-all duration-500 ease-out"
        style={{
          backgroundColor: "var(--color-accent)",
          width: "0%",
        }}
      />

      <div className="p-6 md:p-7 flex flex-col gap-5 h-full">
        {/* Header row: num + icon */}
        <div className="flex items-start justify-between">
          {/* Decorative numeral, outlined, large, behind icon */}
          <span
            aria-hidden="true"
            className="font-sans font-black select-none leading-none"
            style={{
              fontSize: "clamp(2.5rem, 3.5vw, 3.25rem)",
              color: "transparent",
              WebkitTextStroke: "1.2px var(--color-accent)",
              opacity: 0.3,
              letterSpacing: "-0.04em",
            }}
          >
            {cap.num}
          </span>

          {/* Icon in a soft terracotta-tinted pill */}
          <div
            className="flex items-center justify-center rounded-xl transition-colors duration-300"
            style={{
              width: 44,
              height: 44,
              backgroundColor: "rgba(201,123,63,0.07)",
              color: "var(--color-accent)",
            }}
          >
            {cap.icon}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.015em] leading-snug"
            style={{ fontSize: "clamp(1rem, 1.1vw, 1.125rem)" }}
          >
            {cap.title}
          </h3>
          <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[var(--color-body)] m-0">
            {cap.body}
          </p>
        </div>

        {/* Bottom accent hairline */}
        <div
          className="h-[1px] w-8"
          style={{ backgroundColor: "var(--color-accent)", opacity: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export function CapabilityCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {CAPABILITIES.map((cap, i) => (
        <CapabilityCard key={cap.key} cap={cap} index={i} />
      ))}
    </div>
  );
}
