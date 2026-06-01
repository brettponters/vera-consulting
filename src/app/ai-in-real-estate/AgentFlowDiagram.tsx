"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * AgentFlowDiagram, the showpiece for section 03.
 *
 * Left panel: one-shot chatbot reply (you prompt → it answers → end).
 * Right panel: agentic chain (goal → step → step → check-in → done).
 *
 * Both panels animate on scroll. The agent chain draws step by step with
 * staggered connector lines, giving the impression of a running process.
 * Compositor-friendly: only opacity + transform are animated.
 */
export function AgentFlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const reduced = useReducedMotion();

  const show = inView || reduced;

  // Shared ease
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-2"
    >
      {/* ── LEFT: Chatbot panel ── */}
      <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] overflow-hidden relative">
        {/* Panel label */}
        <div className="px-6 pt-5 pb-4 border-b border-[var(--color-hairline)] flex items-center gap-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]"
          >
            Chatbot
          </span>
          {/* Small status dot: grey / idle */}
          <span
            className="inline-block w-[7px] h-[7px] rounded-full"
            style={{ backgroundColor: "#C8C5C0" }}
          />
        </div>

        <div className="px-6 py-7 flex flex-col gap-0 items-center relative">
          {/* Grain texture, adds premium feel without a raster image */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Step nodes for chatbot, single linear flow */}
          {[
            { label: "You prompt it", icon: "person" },
            { label: "It writes one reply", icon: "text" },
            { label: "You forget to follow up", icon: "stop", muted: true },
          ].map((step, i) => (
            <div key={step.label} className="flex flex-col items-center w-full max-w-[220px]">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.15, ease }}
                className="flex items-center gap-3 w-full"
              >
                {/* Icon glyph */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg border"
                  style={{
                    width: 36,
                    height: 36,
                    borderColor: step.muted ? "#E6E6EA" : "var(--color-hairline)",
                    backgroundColor: step.muted ? "transparent" : "#F8F6F1",
                  }}
                >
                  <ChatbotIcon type={step.icon} muted={step.muted} />
                </div>
                <span
                  className="font-sans text-[13px] leading-snug"
                  style={{ color: step.muted ? "#B0ADA9" : "var(--color-heading)" }}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Connector line (skip after last) */}
              {i < 2 && (
                <motion.div
                  initial={reduced ? false : { scaleY: 0, opacity: 0 }}
                  animate={show ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.28 + i * 0.15,
                    ease,
                  }}
                  style={{ transformOrigin: "top" }}
                  className="w-[1px] my-2"
                >
                  <svg
                    width="1"
                    height="28"
                    viewBox="0 0 1 28"
                    fill="none"
                    style={{ display: "block" }}
                  >
                    <line
                      x1="0.5"
                      y1="0"
                      x2="0.5"
                      y2="28"
                      stroke="#C8C5C0"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}

          {/* "Then repeat, forever" tag */}
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
            className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "#B0ADA9" }}
          >
            Then you have to remember
          </motion.p>
        </div>
      </div>

      {/* ── RIGHT: Agent panel ── */}
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{
          border: "2px solid var(--color-accent)",
          background: "var(--color-bg)",
        }}
      >
        {/* Panel label */}
        <div
          className="px-6 pt-5 pb-4 flex items-center gap-3"
          style={{ borderBottom: "1px solid rgba(201,123,63,0.2)" }}
        >
          <span
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--color-accent)" }}
          >
            Agent
          </span>
          {/* Pulsing dot: active */}
          {!reduced && (
            <motion.span
              className="inline-block w-[7px] h-[7px] rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {reduced && (
            <span
              className="inline-block w-[7px] h-[7px] rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          )}
        </div>

        <div className="px-6 py-7 flex flex-col gap-0 items-center relative">
          {[
            { label: "New lead arrives", icon: "goal" },
            { label: "Writes follow-up in minutes", icon: "write" },
            { label: "Schedules next touch", icon: "schedule" },
            { label: "Checks in before anything risky", icon: "check" },
            { label: "Routes hot leads to you", icon: "route", accent: true },
          ].map((step, i) => (
            <div key={step.label} className="flex flex-col items-center w-full max-w-[240px]">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.13, ease }}
                className="flex items-center gap-3 w-full"
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 36,
                    height: 36,
                    border: step.accent
                      ? "1.5px solid var(--color-accent)"
                      : "1px solid rgba(201,123,63,0.3)",
                    backgroundColor: step.accent
                      ? "rgba(201,123,63,0.08)"
                      : "transparent",
                  }}
                >
                  <AgentIcon type={step.icon} accent={step.accent} />
                </div>
                <span
                  className="font-sans text-[13px] leading-snug font-medium"
                  style={{
                    color: step.accent ? "var(--color-accent)" : "var(--color-heading)",
                  }}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Animated connector line (with directional accent for agent) */}
              {i < 4 && (
                <motion.div
                  initial={reduced ? false : { scaleY: 0, opacity: 0 }}
                  animate={show ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.32 + i * 0.13,
                    ease,
                  }}
                  style={{ transformOrigin: "top" }}
                  className="my-2"
                >
                  <svg
                    width="24"
                    height="28"
                    viewBox="0 0 24 28"
                    fill="none"
                    style={{ display: "block" }}
                  >
                    <line
                      x1="12"
                      y1="0"
                      x2="12"
                      y2="22"
                      stroke="#C97B3F"
                      strokeWidth="1.5"
                      strokeOpacity="0.45"
                    />
                    {/* Arrowhead */}
                    <path
                      d="M8 20 L12 26 L16 20"
                      stroke="#C97B3F"
                      strokeWidth="1.5"
                      strokeOpacity="0.55"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}

          {/* "On its own" closing line */}
          <motion.p
            initial={reduced ? false : { opacity: 0 }}
            animate={show ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.95, ease }}
            className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: "var(--color-accent)" }}
          >
            On its own, while you&rsquo;re showing homes
          </motion.p>
        </div>
      </div>
    </div>
  );
}

/* ── Icon primitives, custom SVG glyphs, minimal line style ── */

function ChatbotIcon({ type, muted }: { type: string; muted?: boolean }) {
  const color = muted ? "#C8C5C0" : "#1A1A1A";
  const size = 16;

  if (type === "person") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="5.5" r="2.5" stroke={color} strokeWidth="1.3" />
        <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "text") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke={color} strokeWidth="1.3" />
        <line x1="5" y1="7" x2="11" y2="7" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="5" y1="9.5" x2="9" y2="9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  // stop
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke={color} strokeWidth="1.3" />
      <line x1="5.5" y1="5.5" x2="10.5" y2="10.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function AgentIcon({ type, accent }: { type: string; accent?: boolean }) {
  const color = accent ? "#C97B3F" : "#0E1B33";
  const size = 16;

  if (type === "goal") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="5.5" stroke={color} strokeWidth="1.3" />
        <circle cx="8" cy="8" r="2" fill={color} opacity="0.7" />
      </svg>
    );
  }
  if (type === "write") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 12l2-2 6-6 2 2-6 6-2 2z" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M10 4l2 2" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="3" y1="13" x2="6" y2="13" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "schedule") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" stroke={color} strokeWidth="1.3" />
        <line x1="5" y1="2" x2="5" y2="5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="11" y1="2" x2="11" y2="5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="8" y1="7" x2="8" y2="9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
        <line x1="8" y1="9.5" x2="10" y2="9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "check") {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M3 8.5l3.5 3.5 6.5-6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // route
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h7M8 5l3 3-3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
