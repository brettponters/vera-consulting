"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollZoom — a bold statement that scales up as you scroll into it.
 * Creates a cinematic "zooming in" feel.
 */
export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale from 0.85 → 1 as it enters view
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  // Fade in
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-40 bg-[var(--color-surface)] overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto max-w-[1000px] px-6 md:px-10 text-center"
      >
        <p
          className="font-sans font-bold text-[var(--color-heading)] leading-[1.1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)" }}
        >
          Most AI projects fail because someone skipped the part that matters.
        </p>
        <p className="mt-6 font-sans text-base md:text-lg text-[var(--color-muted)] max-w-[540px] mx-auto leading-relaxed">
          We don&rsquo;t skip it.
        </p>
      </motion.div>
    </section>
  );
}
