"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Hero visual for the AI-in-Real-Estate page.
 *
 * Concept: an abstract "agentic network", nodes connected by flowing lines,
 * evoking both a floor plan and a neural decision graph. Pure SVG + framer-motion.
 * Colors exclusively from the VERA design token palette.
 *
 * Compositor-friendly: only opacity and transform are animated.
 */
export function HeroVisual() {
  const reduced = useReducedMotion();

  // Node positions (cx, cy), arranged to suggest a property + workflow graph
  const nodes: { cx: number; cy: number; r: number; accent?: boolean }[] = [
    { cx: 80,  cy: 120, r: 5, accent: true },   // primary node (goal)
    { cx: 200, cy: 60,  r: 3.5 },
    { cx: 290, cy: 130, r: 4, accent: true },
    { cx: 340, cy: 240, r: 3 },
    { cx: 230, cy: 280, r: 3.5, accent: true },
    { cx: 130, cy: 260, r: 3 },
    { cx: 60,  cy: 220, r: 2.5 },
    { cx: 310, cy: 350, r: 4 },
    { cx: 180, cy: 390, r: 3, accent: true },
    { cx: 80,  cy: 340, r: 2.5 },
  ];

  // Edges (pairs of node indices)
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [5, 6], [6, 0], [4, 7], [7, 8], [8, 9],
    [9, 5], [2, 4], [0, 5],
  ];

  // Floor-plan rectangle motif (abstract "property" shape)
  const rooms = [
    { x: 105, y: 155, w: 100, h: 75 },
    { x: 205, y: 155, w: 80, h: 75 },
    { x: 105, y: 230, w: 180, h: 55 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none w-full h-full"
    >
      <svg
        viewBox="0 0 420 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="hero-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hero-soft" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>

          {/* Gradient for the "path" lines */}
          <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C97B3F" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0E1B33" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6B8775" stopOpacity="0.08" />
          </linearGradient>

          {/* Animated dash for active edge */}
          <marker id="hero-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="#C97B3F" opacity="0.5" />
          </marker>
        </defs>

        {/* Background: abstract floor-plan / property grid */}
        <motion.g
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {rooms.map((r, i) => (
            <rect
              key={i}
              x={r.x}
              y={r.y}
              width={r.w}
              height={r.h}
              stroke="#0E1B33"
              strokeWidth="0.75"
              strokeDasharray="4 3"
              fill="none"
              opacity="0.06"
            />
          ))}
          {/* Room door notches */}
          <line x1="205" y1="192" x2="205" y2="230" stroke="#0E1B33" strokeWidth="0.5" opacity="0.08" />
          <line x1="155" y1="230" x2="155" y2="285" stroke="#0E1B33" strokeWidth="0.5" opacity="0.08" />
        </motion.g>

        {/* Background large circle, soft halo */}
        <motion.circle
          cx="210"
          cy="230"
          r="185"
          stroke="#C97B3F"
          strokeWidth="0.5"
          opacity="0.06"
          initial={reduced ? {} : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "210px 230px" }}
        />
        <circle
          cx="210"
          cy="230"
          r="130"
          stroke="#C97B3F"
          strokeWidth="0.4"
          strokeDasharray="3 6"
          opacity="0.07"
        />

        {/* Network edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[a];
          const nb = nodes[b];
          const isAccentEdge = na.accent && nb.accent;
          return (
            <motion.line
              key={i}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke={isAccentEdge ? "#C97B3F" : "url(#hero-line-grad)"}
              strokeWidth={isAccentEdge ? 1.2 : 0.75}
              opacity={isAccentEdge ? 0.35 : 0.22}
              markerEnd={isAccentEdge ? "url(#hero-arrow)" : undefined}
              initial={reduced ? {} : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: isAccentEdge ? 0.35 : 0.22 }}
              transition={{
                pathLength: { duration: 1.4, delay: 0.3 + i * 0.06, ease: "easeOut" },
                opacity: { duration: 0.6, delay: 0.3 + i * 0.06 },
              }}
            />
          );
        })}

        {/* Animated "pulse" traveling along a key path to suggest agentic flow */}
        {!reduced && (
          <motion.circle
            r="3"
            fill="#C97B3F"
            opacity="0.7"
            filter="url(#hero-glow)"
            animate={{
              cx: [80, 200, 290, 340, 230, 130, 80],
              cy: [120, 60, 130, 240, 280, 260, 120],
              opacity: [0.7, 0.85, 0.7, 0.6, 0.8, 0.65, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.18, 0.36, 0.52, 0.68, 0.84, 1],
              delay: 1.5,
            }}
          />
        )}

        {/* Network nodes */}
        {nodes.map((n, i) => (
          <motion.g key={i}>
            {/* Outer ring on accent nodes */}
            {n.accent && (
              <motion.circle
                cx={n.cx}
                cy={n.cy}
                r={n.r + 5}
                stroke="#C97B3F"
                strokeWidth="0.8"
                fill="none"
                opacity="0.18"
                initial={reduced ? {} : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.18 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
              />
            )}
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={n.accent ? "#C97B3F" : "#0E1B33"}
              opacity={n.accent ? 0.75 : 0.25}
              initial={reduced ? {} : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: n.accent ? 0.75 : 0.25 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
            />
          </motion.g>
        ))}

        {/* Large decorative "V" letterform, VERA brand mark, very faint */}
        <motion.path
          d="M 120 30 L 210 320 L 300 30"
          stroke="#C97B3F"
          strokeWidth="44"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.04"
          fill="none"
          initial={reduced ? {} : { opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Grain texture overlay via SVG feTurbulence */}
        <rect
          x="0"
          y="0"
          width="420"
          height="460"
          fill="url(#grain)"
          opacity="0.03"
        />
        <defs>
          <filter id="grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect id="grain" filter="url(#grain-filter)" x="0" y="0" width="420" height="460" />
        </defs>
      </svg>
    </div>
  );
}
