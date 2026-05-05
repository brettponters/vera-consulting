"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * ScrollDraw — neural network that branches out left-to-right.
 * Layers reveal one at a time (nodes + their connections appear together).
 * Lines always connect fully between nodes — no half-drawn stubs.
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

// Connections grouped by which layer-pair they belong to
function getConnectionsByLayer() {
  const grouped: { x1: number; y1: number; x2: number; y2: number; opacity: number }[][] = [];
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const conns: typeof grouped[0] = [];
    for (const from of LAYERS[l]) {
      for (const to of LAYERS[l + 1]) {
        const dist = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);
        const op = Math.max(0.08, 0.5 - (dist / 500) * 0.35);
        conns.push({ x1: from.x, y1: from.y, x2: to.x, y2: to.y, opacity: op });
      }
    }
    grouped.push(conns);
  }
  return grouped;
}

const CONN_GROUPS = getConnectionsByLayer();
const NUM_GROUPS = CONN_GROUPS.length;

function LayerGroup({
  connections,
  nodes,
  layerIndex,
  scrollYProgress,
}: {
  connections: typeof CONN_GROUPS[0];
  nodes: typeof LAYERS[0];
  layerIndex: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Each layer reveals at a staggered scroll point
  const start = 0.05 + (layerIndex / NUM_GROUPS) * 0.6;
  const end = start + 0.12;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const isEdge = layerIndex === 0 || layerIndex === LAYERS.length - 1;
  const isWidest = layerIndex === 3;

  return (
    <motion.g style={{ opacity }}>
      {/* Full connections — always complete lines */}
      {connections.map((conn, i) => (
        <line
          key={`c-${layerIndex}-${i}`}
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
      {/* Nodes for this layer */}
      {nodes.map((node, n) => {
        const size = isEdge ? 7 : isWidest ? 4.5 : 5.5;
        const color = isWidest ? "#6B8775" : "#C97B3F";
        return (
          <circle
            key={`n-${layerIndex}-${n}`}
            cx={node.x}
            cy={node.y}
            r={size}
            fill={color}
          />
        );
      })}
    </motion.g>
  );
}

export default function ScrollZoom() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const containerOpacity = useTransform(scrollYProgress, [0.0, 0.08, 0.85, 1], [0, 1, 1, 0]);

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
        {/* First layer nodes (no connections before them) */}
        <LayerGroup
          connections={[]}
          nodes={LAYERS[0]}
          layerIndex={0}
          scrollYProgress={scrollYProgress}
        />
        {/* Subsequent layers with their incoming connections */}
        {CONN_GROUPS.map((conns, i) => (
          <LayerGroup
            key={`lg-${i}`}
            connections={conns}
            nodes={LAYERS[i + 1]}
            layerIndex={i + 1}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </motion.svg>
    </section>
  );
}
