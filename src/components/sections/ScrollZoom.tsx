"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollDraw — an SVG path that draws itself as you scroll.
 * Abstract network/flow shape using brand accent color.
 */
export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      <motion.svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[min(90vw,700px)] h-auto"
        style={{ opacity }}
      >
        {/* Main flowing path — abstract network/circuit feel */}
        <motion.path
          d="M 50 200 C 120 80, 200 320, 280 200 S 400 50, 480 200 S 600 350, 680 200 C 720 120, 750 200, 750 200"
          stroke="#C97B3F"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength }}
        />
        {/* Secondary branch — splits off */}
        <motion.path
          d="M 280 200 C 300 140, 340 100, 400 110 C 440 115, 460 140, 480 200"
          stroke="#C97B3F"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
          style={{ pathLength }}
        />
        {/* Third branch */}
        <motion.path
          d="M 480 200 C 500 260, 540 300, 600 290 C 640 285, 660 260, 680 200"
          stroke="#6B8775"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
          style={{ pathLength }}
        />
        {/* Nodes — appear along the path */}
        <motion.circle cx="280" cy="200" r="5" fill="#C97B3F" style={{ opacity: pathLength }} />
        <motion.circle cx="480" cy="200" r="5" fill="#C97B3F" style={{ opacity: pathLength }} />
        <motion.circle cx="680" cy="200" r="5" fill="#C97B3F" style={{ opacity: pathLength }} />
        <motion.circle cx="400" cy="110" r="3.5" fill="#6B8775" style={{ opacity: pathLength }} />
        <motion.circle cx="600" cy="290" r="3.5" fill="#6B8775" style={{ opacity: pathLength }} />
      </motion.svg>
    </section>
  );
}
