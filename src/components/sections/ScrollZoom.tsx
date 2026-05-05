"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollDraw — a neural network that draws itself as you scroll.
 * Multiple layers, many connections, organic feel.
 */

// Neural network node positions — 5 layers
const LAYERS = [
  // Input layer (3 nodes)
  [{ x: 80, y: 120 }, { x: 80, y: 240 }, { x: 80, y: 360 }],
  // Hidden layer 1 (5 nodes)
  [{ x: 250, y: 60 }, { x: 250, y: 150 }, { x: 250, y: 240 }, { x: 250, y: 330 }, { x: 250, y: 420 }],
  // Hidden layer 2 (6 nodes)
  [{ x: 440, y: 40 }, { x: 440, y: 120 }, { x: 440, y: 200 }, { x: 440, y: 280 }, { x: 440, y: 360 }, { x: 440, y: 440 }],
  // Hidden layer 3 (4 nodes)
  [{ x: 630, y: 100 }, { x: 630, y: 200 }, { x: 630, y: 300 }, { x: 630, y: 400 }],
  // Output layer (2 nodes)
  [{ x: 820, y: 190 }, { x: 820, y: 310 }],
];

// Generate connections between adjacent layers
function getConnections() {
  const connections: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const current = LAYERS[l];
    const next = LAYERS[l + 1];
    for (const from of current) {
      for (const to of next) {
        // Vary opacity based on distance for depth
        const dist = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
        const maxDist = 500;
        const op = Math.max(0.08, 0.4 - (dist / maxDist) * 0.3);
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

  const pathLength = useTransform(scrollYProgress, [0.08, 0.75], [0, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0.03, 0.15, 0.8, 0.95], [0, 1, 1, 0]);
  const nodeOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 0.6]);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--color-bg)]"
    >
      <motion.svg
        viewBox="0 0 900 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[min(92vw,800px)] h-auto"
        style={{ opacity: containerOpacity }}
      >
        {/* Glow effects */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections — draw on scroll */}
        {CONNECTIONS.map((conn, i) => (
          <motion.line
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#C97B3F"
            strokeWidth="1"
            opacity={conn.opacity}
            strokeLinecap="round"
            style={{ pathLength }}
          />
        ))}

        {/* Nodes — fade in after connections start */}
        {LAYERS.map((layer, l) =>
          layer.map((node, n) => {
            const isEdge = l === 0 || l === LAYERS.length - 1;
            const size = isEdge ? 6 : l === 2 ? 5 : 4;
            const color = l === 2 ? "#6B8775" : "#C97B3F";
            return (
              <motion.circle
                key={`node-${l}-${n}`}
                cx={node.x}
                cy={node.y}
                r={size}
                fill={color}
                style={{ opacity: nodeOpacity }}
              />
            );
          })
        )}

        {/* Highlight pulse on key nodes */}
        {[LAYERS[2][2], LAYERS[3][1], LAYERS[4][0]].map((node, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={node.x}
            cy={node.y}
            r={12}
            fill="none"
            stroke="#C97B3F"
            strokeWidth="1.5"
            filter="url(#glow)"
            style={{ opacity: glowOpacity }}
          />
        ))}
      </motion.svg>
    </section>
  );
}
