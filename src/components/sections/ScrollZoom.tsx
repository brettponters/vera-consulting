"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollDraw — neural network that branches out from left, expands in the middle,
 * and converges back on the right. Draws left-to-right on scroll.
 */

// Nodes: starts narrow (2), branches wide (8-10), converges back (2)
const LAYERS = [
  // Start — tight
  [{ x: 40, y: 225 }, { x: 40, y: 275 }],
  // Expand
  [{ x: 160, y: 130 }, { x: 160, y: 210 }, { x: 160, y: 290 }, { x: 160, y: 370 }],
  // Wide
  [{ x: 300, y: 60 }, { x: 300, y: 140 }, { x: 300, y: 220 }, { x: 300, y: 300 }, { x: 300, y: 380 }, { x: 300, y: 440 }],
  // Widest
  [{ x: 460, y: 35 }, { x: 460, y: 100 }, { x: 460, y: 165 }, { x: 460, y: 230 }, { x: 460, y: 295 }, { x: 460, y: 360 }, { x: 460, y: 425 }, { x: 460, y: 475 }],
  // Converge
  [{ x: 620, y: 60 }, { x: 620, y: 140 }, { x: 620, y: 220 }, { x: 620, y: 300 }, { x: 620, y: 380 }, { x: 620, y: 440 }],
  // Narrow
  [{ x: 760, y: 130 }, { x: 760, y: 210 }, { x: 760, y: 290 }, { x: 760, y: 370 }],
  // End — tight
  [{ x: 900, y: 225 }, { x: 900, y: 275 }],
];

// Generate connections between adjacent layers
function getConnections() {
  const connections: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const current = LAYERS[l];
    const next = LAYERS[l + 1];
    for (const from of current) {
      for (const to of next) {
        const dist = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
        const op = Math.max(0.06, 0.45 - (dist / 600) * 0.35);
        connections.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y, opacity: op });
      }
    }
  }
  return connections;
}

const CONNECTIONS = getConnections();

export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.7], [0, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0.02, 0.1, 0.82, 0.95], [0, 1, 1, 0]);
  const nodeOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 0.7]);

  return (
    <section
      ref={ref}
      className="relative py-8 md:py-12 flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      <motion.svg
        viewBox="0 0 940 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[1000px] h-auto px-4"
        style={{ opacity: containerOpacity }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {CONNECTIONS.map((conn, i) => (
          <motion.line
            key={`c-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#C97B3F"
            strokeWidth="1.2"
            opacity={conn.opacity}
            strokeLinecap="round"
            style={{ pathLength }}
          />
        ))}

        {/* Nodes */}
        {LAYERS.map((layer, l) =>
          layer.map((node, n) => {
            // Bigger nodes at edges, medium in middle
            const isEdge = l === 0 || l === LAYERS.length - 1;
            const isWidest = l === 3;
            const size = isEdge ? 7 : isWidest ? 4.5 : 5.5;
            const color = isWidest ? "#6B8775" : "#C97B3F";
            return (
              <motion.circle
                key={`n-${l}-${n}`}
                cx={node.x}
                cy={node.y}
                r={size}
                fill={color}
                style={{ opacity: nodeOpacity }}
              />
            );
          })
        )}

        {/* Glow rings on converge nodes */}
        {[LAYERS[0][0], LAYERS[0][1], LAYERS[6][0], LAYERS[6][1]].map((node, i) => (
          <motion.circle
            key={`g-${i}`}
            cx={node.x}
            cy={node.y}
            r={14}
            fill="none"
            stroke="#C97B3F"
            strokeWidth="2"
            filter="url(#glow)"
            style={{ opacity: glowOpacity }}
          />
        ))}
      </motion.svg>
    </section>
  );
}
