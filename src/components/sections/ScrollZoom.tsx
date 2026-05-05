"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollStat — one massive number that scroll-reveals into view.
 * Takes up the viewport. Makes you stop.
 */
export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-[var(--color-bg)]"
    >
      <div className="text-center px-6">
        <motion.p
          style={{ opacity, y, fontSize: "clamp(6rem, 20vw, 14rem)" }}
          className="font-sans font-bold text-[var(--color-heading)] tracking-[-0.04em] leading-none"
        >
          42%
        </motion.p>
        <motion.p
          style={{ opacity: captionOpacity }}
          className="mt-6 font-sans text-base md:text-lg text-[var(--color-muted)] max-w-[480px] mx-auto"
        >
          of AI agents fail within 10 steps in production.
        </motion.p>
      </div>
    </section>
  );
}
