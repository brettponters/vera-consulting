"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollDraw — neural network.
 * Dots are always visible. Lines fade in as you scroll to the middle,
 * then fade back out as you scroll past.
 */

const LAYERS = [
  [{ x: 40, y: 225 }, { x: 40, y: 275 }],
  [{ x: 160, y: 130 }, { x: 160, y: 210 }, { x: 160, y: 290 }, { x: 160, y: 370 }],
  [{ x: 300, y: 60 }, { x: 300, y: 140 }, { x: 300, y: 220 }, { x: 300, y: 300 }, { x: 300, y: 380 }, { x: 300, y: 440 }],
  [{ x: 460, y: 35 }, { x: 460, y: 100 }, { x: 460, y: 165 }, { x: 460, y: 230 }, { x: 460, y: 295 }, { x: 460, y: 360 }, { x: 460, y: 425 }, { x: 460, y: 475 }],
  [{ x: 620, y: 60 }, { x: 620, y: 140 }, { x: 620, y: 220 }, { x: 620, y: 300 }, { x: 620, y: 380 }, { x: 620, y: 440 }],
  [{ x: 760, y: 130 }, { x: 760, y: 210 }, { x: 760, y: 290 }, { x: 760, y: 370 }],
  [{ x: 900, y: 225 }, { x: 900, y: 275 }],
];

function getAllConnections() {
  const connections: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    for (const from of LAYERS[l]) {
      for (const to of LAYERS[l + 1]) {
        const dist = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
        const op = Math.max(0.08, 0.5 - (dist / 500) * 0.35);
        connections.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y, opacity: op });
      }
    }
  }
  return connections;
}

const CONNECTIONS = getAllConnections();

export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Lines: fade in → full at middle → fade out
  const lineOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.55, 0.85], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-12 flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      <svg
        viewBox="0 0 940 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[1000px] h-auto px-4"
      >
        {/* Connections — fade in/out on scroll */}
        <motion.g style={{ opacity: lineOpacity }}>
          {CONNECTIONS.map((conn, i) => (
            <line
              key={`c-${i}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="#C97B3F"
              strokeWidth="1.2"
              opacity={conn.opacity}
              strokeLinecap="round"
            />
          ))}
        </motion.g>

        {/* Nodes — always visible */}
        {LAYERS.map((layer, l) =>
          layer.map((node, n) => {
            const isEdge = l === 0 || l === LAYERS.length - 1;
            const isWidest = l === 3;
            const size = isEdge ? 7 : isWidest ? 4.5 : 5.5;
            const color = isWidest ? "#6B8775" : "#C97B3F";
            return (
              <circle
                key={`n-${l}-${n}`}
                cx={node.x}
                cy={node.y}
                r={size}
                fill={color}
              />
            );
          })
        )}
      </svg>
    </section>
  );
}
