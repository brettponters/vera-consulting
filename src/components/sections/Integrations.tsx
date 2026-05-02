"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Integrations — animated orbit of tool icons.
 *
 * Left: copy about integrating AI into existing systems.
 * Right: tool icons orbiting slowly around an ellipse,
 * each icon counter-rotates to stay upright.
 */

const TOOLS = [
  { name: "Claude", bg: "#D4A574", text: "#fff", letter: "C" },
  { name: "Slack", bg: "#4A154B", text: "#fff", letter: "S" },
  { name: "Zoom", bg: "#2D8CFF", text: "#fff", letter: "Z" },
  { name: "Outlook", bg: "#0078D4", text: "#fff", letter: "O" },
  { name: "OpenAI", bg: "#10A37F", text: "#fff", letter: "AI" },
  { name: "Teams", bg: "#6264A7", text: "#fff", letter: "T" },
  { name: "Notion", bg: "#151515", text: "#fff", letter: "N" },
  { name: "Salesforce", bg: "#00A1E0", text: "#fff", letter: "SF" },
  { name: "HubSpot", bg: "#FF7A59", text: "#fff", letter: "H" },
  { name: "Google", bg: "#4285F4", text: "#fff", letter: "G" },
];

const ORBIT_DURATION = 80; // seconds per full revolution

export default function Integrations() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg)] overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Copy */}
          <div className="max-w-[520px]">
            <Reveal>
              <Eyebrow className="mb-4">Built to integrate</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-6">
                AI that works inside the tools your team already uses.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                We don&rsquo;t integrate AI that lives in a silo. Everything we
                ship connects to the systems you already run. Slack, Outlook,
                Zoom, Salesforce, your internal tools. The goal is AI that
                fits into how your team actually works, not a new platform
                they have to learn.
              </p>
            </Reveal>
          </div>

          {/* Orbiting icons */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 380, height: 380 }}>
              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-[var(--color-surface)] border border-[var(--color-hairline)] flex items-center justify-center">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-muted)]">
                    Your stack
                  </span>
                </div>
              </div>

              {/* Orbit track (subtle) */}
              <div className="absolute inset-6 rounded-full border border-[var(--color-hairline)] opacity-40" />

              {/* Rotating container */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: ORBIT_DURATION,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {TOOLS.map((tool, i) => {
                  const angle = (i / TOOLS.length) * 360;
                  const radiusX = 155;
                  const radiusY = 155;
                  const x = Math.cos((angle * Math.PI) / 180) * radiusX;
                  const y = Math.sin((angle * Math.PI) / 180) * radiusY;

                  return (
                    <motion.div
                      key={tool.name}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      // Counter-rotate to keep icons upright
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: ORBIT_DURATION,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: tool.bg }}
                        title={tool.name}
                      >
                        <span
                          className="font-sans text-xs font-bold"
                          style={{ color: tool.text }}
                        >
                          {tool.letter}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
