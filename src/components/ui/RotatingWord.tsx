"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface RotatingWordProps {
  words: readonly string[];
  holdMs?: number;
  fixedWidth?: number | string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Cycles through words with a clipped scroll-up + slight 3D flip.
 * Container width eases to each word's width so surrounding text
 * slides smoothly instead of jumping. Inherits font styles from its
 * parent; color via className/style.
 */
export function RotatingWord({
  words,
  holdMs = 5000,
  fixedWidth,
  className,
  style,
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number | "auto">("auto");
  const measureRef = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const word = words[index];

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      holdMs,
    );
    return () => clearInterval(id);
  }, [words.length, holdMs]);

  useEffect(() => {
    if (measureRef.current) setWidth(measureRef.current.offsetWidth);
  }, [word]);

  return (
    <motion.span
      className={`relative inline-grid overflow-hidden align-bottom ${className ?? ""}`}
      initial={false}
      animate={{ width: fixedWidth ?? width }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        perspective: 900,
        paddingBottom: "0.08em",
        marginBottom: "-0.08em",
        ...style,
      }}
    >
      {/* Invisible copy of the current word; sole purpose is width measurement.
          Inner span shrink-wraps to the text, the grid item itself stretches
          to the container's animated width, so it can't be measured directly. */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        <span ref={measureRef} className="inline-block whitespace-nowrap">
          {word}
        </span>
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
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
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
