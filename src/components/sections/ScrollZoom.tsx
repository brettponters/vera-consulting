"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollBlob — an abstract gradient orb that scales and shifts on scroll.
 * Creates a visual pause between sections. Brand colors, no text.
 */
export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      <motion.div
        style={{ scale, opacity, rotate, y }}
        className="relative w-[min(80vw,500px)] h-[min(80vw,500px)]"
      >
        {/* Main blob */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, #C97B3F 0%, transparent 50%), radial-gradient(circle at 70% 60%, #6B8775 0%, transparent 50%), radial-gradient(circle at 50% 50%, #F5F4F1 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Secondary orb */}
        <motion.div
          className="absolute inset-[15%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 60% 30%, #C97B3F 0%, transparent 60%), radial-gradient(circle at 40% 70%, #E6E6EA 0%, transparent 50%)",
            filter: "blur(30px)",
            rotate: useTransform(scrollYProgress, [0, 1], [0, -30]),
          }}
        />
        {/* Inner core */}
        <div
          className="absolute inset-[30%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #FFFFFF 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </section>
  );
}
