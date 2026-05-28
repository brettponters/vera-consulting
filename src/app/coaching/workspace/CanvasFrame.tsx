"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CanvasFrameProps {
  filename: string;
  seconds: number;
  tokens: number;
  /** Once true, child artifact fades + lifts in. */
  ready: boolean;
  children: ReactNode;
}

/**
 * The right-side "canvas" panel that hosts each artifact.
 *
 * Visual model: a document window inside the workspace.
 *  - Top chrome shows the filename, a build state, and inert toolbar icons
 *    (copy, share, download), present to read as a real product, not
 *    interactive.
 *  - While `ready` is false, a low-key skeleton block holds the space so
 *    the layout doesn't shift when the artifact lands.
 */
export function CanvasFrame({
  filename,
  seconds,
  tokens,
  ready,
  children,
}: CanvasFrameProps) {
  return (
    <div className="flex h-full min-h-[460px] flex-col rounded-md border border-[var(--color-hairline)] bg-[var(--color-bg)] overflow-hidden">
      {/* Canvas chrome */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-[var(--color-hairline)] bg-[var(--color-surface)]/70">
        <div className="flex items-center gap-2.5 min-w-0">
          <DocumentIcon />
          <span className="font-mono text-[11.5px] text-[var(--color-heading)] truncate">
            {filename}
          </span>
          <span className="font-sans text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-muted)] font-semibold border-l border-[var(--color-hairline)] pl-2.5">
            {ready ? "v1, draft" : "building"}
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {ready && (
            <span className="hidden sm:inline font-mono text-[10.5px] text-[var(--color-muted)] tabular-nums">
              {seconds.toFixed(1)}s · {tokens.toLocaleString()} tok
            </span>
          )}
          <ToolbarIcon kind="copy" />
          <ToolbarIcon kind="download" />
          <ToolbarIcon kind="more" />
        </div>
      </div>

      {/* Canvas body */}
      <div className="relative flex-1 overflow-hidden">
        {!ready && <SkeletonArtifact />}

        <motion.div
          initial={false}
          animate={{
            opacity: ready ? 1 : 0,
            y: ready ? 0 : 14,
            filter: ready ? "blur(0px)" : "blur(6px)",
          }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="h-full overflow-auto px-5 md:px-7 py-6 md:py-8"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

function SkeletonArtifact() {
  // A static "paper" placeholder with shimmer. Deliberately under-designed
  // so it never competes with the real artifact.
  return (
    <div className="absolute inset-0 px-5 md:px-7 py-6 md:py-8">
      <div className="space-y-3">
        <SkeletonLine width="42%" tall />
        <SkeletonLine width="68%" />
        <div className="h-3" />
        <SkeletonLine width="92%" />
        <SkeletonLine width="88%" />
        <SkeletonLine width="74%" />
        <div className="h-3" />
        <SkeletonLine width="58%" />
        <SkeletonLine width="80%" />
      </div>
    </div>
  );
}

function SkeletonLine({
  width,
  tall = false,
}: {
  width: string;
  tall?: boolean;
}) {
  return (
    <div
      style={{ width }}
      className={[
        "relative overflow-hidden rounded-[3px] bg-[var(--color-hairline)]/55",
        tall ? "h-4" : "h-2.5",
      ].join(" ")}
    >
      <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-[shimmer_1.4s_ease-in-out_infinite]" />
    </div>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 text-[var(--color-muted)]"
      aria-hidden="true"
    >
      <path
        d="M3.5 1.5h6L12.5 4.5v10h-9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 1.5v3h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ToolbarIcon({ kind }: { kind: "copy" | "download" | "more" }) {
  // Inert decorative icons. Pointer-events disabled to communicate they're
  // chrome, not real buttons.
  const stroke = "var(--color-muted)";
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 w-6 items-center justify-center rounded-[5px] text-[var(--color-muted)] pointer-events-none"
    >
      {kind === "copy" && (
        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none">
          <rect
            x="4"
            y="4"
            width="8"
            height="8"
            rx="1.2"
            stroke={stroke}
            strokeWidth="1.1"
          />
          <path
            d="M2.5 9.5V3a1 1 0 0 1 1-1H9"
            stroke={stroke}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      )}
      {kind === "download" && (
        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none">
          <path
            d="M7 2v7m0 0 2.6-2.6M7 9 4.4 6.4M2.5 11.5h9"
            stroke={stroke}
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {kind === "more" && (
        <svg viewBox="0 0 14 14" className="h-3.5 w-3.5" fill="none">
          <circle cx="3.5" cy="7" r="1" fill={stroke} />
          <circle cx="7" cy="7" r="1" fill={stroke} />
          <circle cx="10.5" cy="7" r="1" fill={stroke} />
        </svg>
      )}
    </span>
  );
}
