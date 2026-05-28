"use client";

import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTypingPrompt } from "./useTypingPrompt";
import type { Scene } from "./types";
import { BannerArtifact } from "./artifacts/Banner";
import { VoiceGuideArtifact } from "./artifacts/VoiceGuide";
import { StrategyMemoArtifact } from "./artifacts/StrategyMemo";
import { VendorBriefArtifact } from "./artifacts/VendorBrief";
import { ProposalArtifact } from "./artifacts/Proposal";

type Phase = "typing" | "thinking" | "ready";

const SCENES: Scene[] = [
  {
    key: "banner",
    category: "Brand",
    title: "LinkedIn cover",
    filename: "linkedin-cover.png",
    prompt:
      "Make me a LinkedIn cover for VERA. Cream and terracotta, type-led, no stock photos. Three variants.",
    model: "claude sonnet 4.6",
    tokens: 1487,
    seconds: 9.2,
    steps: [
      { label: "reading brand notes", detail: "vera-foundation.md", duration: 1100 },
      { label: "pulling palette tokens", detail: "cream, terracotta", duration: 900 },
      { label: "compositing 1584 × 396", detail: "three variant layouts", duration: 1500 },
      { label: "rendering png", detail: "deliverables/banners/", duration: 1100 },
    ],
    artifact: <BannerArtifact />,
  },
  {
    key: "voice",
    category: "Brand",
    title: "Brand voice guide",
    filename: "voice-guide.md",
    prompt:
      "Draft a one-page brand voice guide for VERA. Match the tone we've been writing in.",
    model: "claude sonnet 4.6",
    tokens: 2218,
    seconds: 11.4,
    steps: [
      { label: "reading prior copy", detail: "site, foundation doc, last emails", duration: 1200 },
      { label: "extracting tone signatures", detail: "12 reference lines", duration: 1100 },
      { label: "drafting three pillars", duration: 1400 },
      { label: "writing before / after pairs", duration: 1100 },
      { label: "exporting markdown", detail: "voice-guide.md, 312 words", duration: 800 },
    ],
    artifact: <VoiceGuideArtifact />,
  },
  {
    key: "strategy",
    category: "Operations",
    title: "Q1 priorities memo",
    filename: "q1-priorities.md",
    prompt:
      "Q1 strategy memo. Three priorities, named owners, real metrics. Cut the rest.",
    model: "claude sonnet 4.6",
    tokens: 1742,
    seconds: 8.1,
    steps: [
      { label: "reading last quarter's memo", detail: "q4-2025.md", duration: 1000 },
      { label: "pulling pipeline data", detail: "crm, 14 active conversations", duration: 1100 },
      { label: "ranking by signal", duration: 1100 },
      { label: "drafting priority list", detail: "3 priorities, 3 owners", duration: 1200 },
    ],
    artifact: <StrategyMemoArtifact />,
  },
  {
    key: "vendor",
    category: "Research",
    title: "Proposal tools brief",
    filename: "vendor-eval.md",
    prompt:
      "Compare three AI proposal tools for a two-person practice. Score on security, price, switching cost.",
    model: "claude sonnet 4.6 + web",
    tokens: 2904,
    seconds: 12.0,
    steps: [
      { label: "searching vendor sites", detail: "propelo, pitchworks, helix", duration: 1400 },
      { label: "reading trust portals", detail: "soc2 reports, subprocessor lists", duration: 1300 },
      { label: "comparing pricing pages", duration: 1000 },
      { label: "building eval matrix", detail: "4 criteria × 3 vendors", duration: 1200 },
      { label: "writing verdict", duration: 900 },
    ],
    artifact: <VendorBriefArtifact />,
  },
  {
    key: "proposal",
    category: "Client work",
    title: "Marlin Industries",
    filename: "marlin-proposal-v1.md",
    prompt:
      "Draft proposal opening for Marlin Industries, 90-day operating review. Family business, third-gen handoff next year.",
    model: "claude sonnet 4.6",
    tokens: 3120,
    seconds: 14.3,
    steps: [
      { label: "reading discovery notes", detail: "marlin-intake.md, 2 calls", duration: 1300 },
      { label: "matching template", detail: "templates/proposal-90day.md", duration: 900 },
      { label: "drafting engagement scope", duration: 1400 },
      { label: "phasing the 90 days", detail: "3 phases, 13 weeks", duration: 1200 },
      { label: "compiling investment line", duration: 1000 },
      { label: "exporting pdf", detail: "marlin-proposal-v1.pdf", duration: 1000 },
    ],
    artifact: <ProposalArtifact />,
  },
];

const AUTO_ADVANCE_DELAY_MS = 4500;

/* ─── Component ──────────────────────────────────────────────── */

interface WorkspaceProps {
  autoplay?: boolean;
}

export function Workspace({ autoplay = true }: WorkspaceProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [toolsOpen, setToolsOpen] = useState(true);
  const [completedKeys, setCompletedKeys] = useState<Set<string>>(new Set());
  const userSwitchedRef = useRef(false);
  const advanceTimerRef = useRef<number | null>(null);

  const active = SCENES[activeIdx];

  useEffect(() => {
    setPhase("typing");
    setToolsOpen(true);
    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  }, [activeIdx]);

  const handleTypingDone = useCallback(() => {
    setPhase("thinking");
  }, []);

  const { typed, isTyping } = useTypingPrompt(active.prompt, {
    active: phase === "typing",
    onComplete: handleTypingDone,
  });

  // After thinking, mark ready
  useEffect(() => {
    if (phase !== "thinking") return;
    const totalDuration = active.steps.reduce((sum, s) => sum + s.duration, 0);
    const t = window.setTimeout(() => setPhase("ready"), totalDuration);
    return () => window.clearTimeout(t);
  }, [phase, active.steps]);

  // Auto-collapse tools once artifact is ready
  useEffect(() => {
    if (phase === "ready") {
      const t = window.setTimeout(() => setToolsOpen(false), 900);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  // Auto-advance
  useEffect(() => {
    if (phase !== "ready") return;
    setCompletedKeys((prev) => {
      if (prev.has(active.key)) return prev;
      const next = new Set(prev);
      next.add(active.key);
      return next;
    });
    if (!autoplay) return;
    if (userSwitchedRef.current) {
      userSwitchedRef.current = false;
      return;
    }
    advanceTimerRef.current = window.setTimeout(() => {
      setActiveIdx((i) => (i + 1) % SCENES.length);
    }, AUTO_ADVANCE_DELAY_MS);
    return () => {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
        advanceTimerRef.current = null;
      }
    };
  }, [phase, active.key, autoplay]);

  const switchTo = useCallback((idx: number) => {
    userSwitchedRef.current = true;
    setActiveIdx(idx);
  }, []);

  return (
    <div className="rounded-xl border border-[var(--color-hairline)] bg-[var(--color-bg)] overflow-hidden shadow-[0_24px_60px_-30px_rgba(15,15,16,0.22)]">
      {/* Top chrome */}
      <TopBar model={active.model} />

      {/* Three panes */}
      <div className="grid grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr_minmax(380px,46%)] min-h-[640px]">
        <ChatList
          scenes={SCENES}
          activeIdx={activeIdx}
          completedKeys={completedKeys}
          onSelect={switchTo}
        />

        <ChatThread
          scene={active}
          phase={phase}
          typedPrompt={typed}
          isTyping={isTyping && phase === "typing"}
          toolsOpen={toolsOpen}
          onToggleTools={() => setToolsOpen((v) => !v)}
        />

        {/* Artifact panel, lg breakpoint and up */}
        <ArtifactPanel scene={active} phase={phase} />
      </div>
    </div>
  );
}

/* ─── TopBar ─────────────────────────────────────────────────── */

function TopBar({ model }: { model: string }) {
  return (
    <header className="flex items-center justify-between gap-3 px-4 md:px-5 py-2.5 border-b border-[var(--color-hairline)] bg-[var(--color-surface)]/80">
      <div className="flex items-center gap-2.5 min-w-0">
        <VMark />
        <span className="font-sans font-semibold text-[var(--color-heading)] text-[12.5px] tracking-tight">
          vera
        </span>
        <span className="font-mono text-[10.5px] text-[var(--color-muted)] truncate hidden sm:inline">
          workspace
        </span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="font-mono text-[10px] text-[var(--color-muted)] hidden md:inline">
          {model}
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[var(--color-muted)]">
          <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]/50" />
          autosave on
        </span>
      </div>
    </header>
  );
}

/* ─── ChatList (sidebar) ─────────────────────────────────────── */

function ChatList({
  scenes,
  activeIdx,
  completedKeys,
  onSelect,
}: {
  scenes: Scene[];
  activeIdx: number;
  completedKeys: Set<string>;
  onSelect: (idx: number) => void;
}) {
  return (
    <aside className="border-r border-[var(--color-hairline)] bg-[var(--color-surface)]/40 flex flex-col">
      <div className="px-3.5 py-3 border-b border-[var(--color-hairline)]/60">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          chats
        </p>
      </div>
      <ul className="list-none m-0 p-0 flex-1">
        {scenes.map((s, idx) => {
          const isActive = idx === activeIdx;
          const isDone = completedKeys.has(s.key);
          return (
            <li key={s.key}>
              <button
                onClick={() => onSelect(idx)}
                className={[
                  "w-full text-left px-3.5 py-3 transition-colors duration-150 border-l-2",
                  isActive
                    ? "bg-[var(--color-bg)] border-l-[var(--color-accent)]"
                    : "bg-transparent border-l-transparent hover:bg-[var(--color-bg)]/60",
                ].join(" ")}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={[
                      "block h-1.5 w-1.5 rounded-full transition-colors",
                      isActive
                        ? "bg-[var(--color-accent)] animate-pulse"
                        : isDone
                          ? "bg-[var(--color-accent)]/40"
                          : "bg-[var(--color-hairline)]",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "font-mono text-[9px] uppercase tracking-[0.2em]",
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-muted)]",
                    ].join(" ")}
                  >
                    {s.category}
                  </span>
                </div>
                <p
                  className={[
                    "font-sans text-[13px] leading-snug",
                    isActive
                      ? "text-[var(--color-heading)] font-medium"
                      : "text-[var(--color-body)]",
                  ].join(" ")}
                >
                  {s.title}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-[var(--color-hairline)]/60 px-3.5 py-2.5">
        <p className="font-mono text-[9.5px] text-[var(--color-muted)]">
          5 conversations
        </p>
      </div>
    </aside>
  );
}

/* ─── ChatThread (center) ────────────────────────────────────── */

function ChatThread({
  scene,
  phase,
  typedPrompt,
  isTyping,
  toolsOpen,
  onToggleTools,
}: {
  scene: Scene;
  phase: Phase;
  typedPrompt: string;
  isTyping: boolean;
  toolsOpen: boolean;
  onToggleTools: () => void;
}) {
  return (
    <section className="flex flex-col min-w-0 bg-[var(--color-bg)]">
      {/* Thread title */}
      <div className="px-5 md:px-7 py-3.5 border-b border-[var(--color-hairline)]">
        <p className="font-sans text-[var(--color-heading)] text-[15px] font-semibold tracking-tight">
          {scene.title}
        </p>
        <p className="font-mono text-[10.5px] text-[var(--color-muted)] mt-0.5">
          {scene.filename}
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 md:px-7 py-6 space-y-7">
        {/* User message */}
        <UserMessage typed={typedPrompt} isTyping={isTyping} />

        {/* Claude response, appears after typing done */}
        <AnimatePresence mode="wait">
          {phase !== "typing" && (
            <motion.div
              key={`response-${scene.key}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ClaudeResponse
                scene={scene}
                phase={phase}
                toolsOpen={toolsOpen}
                onToggleTools={onToggleTools}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Faux input bar */}
      <div className="px-5 md:px-7 py-4 border-t border-[var(--color-hairline)] bg-[var(--color-surface)]/40">
        <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-bg)] px-4 py-3 flex items-center justify-between">
          <span className="font-sans text-[13px] text-[var(--color-muted)]">
            Message Claude...
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9.5px] text-[var(--color-muted)] hidden sm:inline">
              ⌘ + enter
            </span>
            <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
              <ArrowUp />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function UserMessage({ typed, isTyping }: { typed: string; isTyping: boolean }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--color-surface)] border border-[var(--color-hairline)] px-4 py-3">
        <p
          className="font-sans text-[var(--color-heading)] leading-relaxed"
          style={{ fontSize: "clamp(13.5px, 1vw, 14.5px)", minHeight: "1.4em" }}
        >
          {typed}
          {isTyping && <BlinkCursor />}
        </p>
      </div>
    </div>
  );
}

function ClaudeResponse({
  scene,
  phase,
  toolsOpen,
  onToggleTools,
}: {
  scene: Scene;
  phase: Phase;
  toolsOpen: boolean;
  onToggleTools: () => void;
}) {
  const stepsRunning = phase === "thinking";
  const ready = phase === "ready";

  return (
    <div className="flex gap-3">
      <ClaudeAvatar />
      <div className="flex-1 min-w-0 space-y-3">
        {/* Tool use disclosure */}
        <ToolUseDisclosure
          steps={scene.steps}
          running={stepsRunning}
          ready={ready}
          open={toolsOpen}
          onToggle={onToggleTools}
          resetKey={scene.key}
        />

        {/* Final response text + artifact tile */}
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-3"
          >
            <p className="font-sans text-[var(--color-heading)] leading-relaxed text-[14px]">
              Done. <span className="text-[var(--color-muted)]">{scene.filename}</span> is open in the artifact panel.
            </p>
            <ArtifactTile scene={scene} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ClaudeAvatar() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0 mt-0.5"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
    </span>
  );
}

function ToolUseDisclosure({
  steps,
  running,
  ready,
  open,
  onToggle,
  resetKey,
}: {
  steps: Scene["steps"];
  running: boolean;
  ready: boolean;
  open: boolean;
  onToggle: () => void;
  resetKey: string;
}) {
  const [completedSteps, setCompletedSteps] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setCompletedSteps(0);
    setCurrentStep(0);
  }, [resetKey]);

  useEffect(() => {
    if (!running) {
      if (ready) setCompletedSteps(steps.length);
      return;
    }
    let cancelled = false;
    let i = 0;
    const runStep = () => {
      if (cancelled || i >= steps.length) return;
      setCurrentStep(i);
      const dur = steps[i].duration;
      window.setTimeout(() => {
        if (cancelled) return;
        setCompletedSteps(i + 1);
        i += 1;
        runStep();
      }, dur);
    };
    runStep();
    return () => {
      cancelled = true;
    };
  }, [running, ready, steps]);

  const totalSteps = steps.length;
  const labelText = ready
    ? `Used ${totalSteps} tools`
    : running
      ? `Using tools, ${completedSteps} of ${totalSteps}`
      : "Preparing";

  return (
    <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-surface)]/50 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 hover:bg-[var(--color-surface)]/80 transition-colors"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <Chevron open={open} />
          <span className="font-sans text-[12.5px] text-[var(--color-body)] font-medium">
            {labelText}
          </span>
          {running && (
            <span className="inline-flex gap-0.5 items-center">
              <Dot delay="0s" />
              <Dot delay="0.15s" />
              <Dot delay="0.3s" />
            </span>
          )}
        </div>
        <span className="font-mono text-[10px] text-[var(--color-muted)] tabular-nums">
          {totalSteps} steps
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="list-none m-0 p-0 border-t border-[var(--color-hairline)]">
              {steps.map((step, idx) => {
                const stepDone = idx < completedSteps;
                const stepRunning = running && idx === currentStep && !stepDone;
                const stepReady = ready || stepDone;
                return (
                  <li
                    key={`${resetKey}-step-${idx}`}
                    className="flex items-start gap-3 px-3.5 py-2 border-b border-[var(--color-hairline)]/40 last:border-b-0"
                  >
                    <StepIcon
                      done={stepDone || stepReady}
                      running={stepRunning}
                    />
                    <div className="min-w-0 flex-1">
                      <p
                        className={[
                          "font-mono text-[11.5px] leading-snug",
                          stepRunning
                            ? "text-[var(--color-heading)]"
                            : "text-[var(--color-body)]",
                        ].join(" ")}
                      >
                        {step.label}
                      </p>
                      {step.detail && (
                        <p className="font-mono text-[10px] text-[var(--color-muted)] mt-0.5">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepIcon({ done, running }: { done: boolean; running: boolean }) {
  if (done) {
    return (
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] shrink-0"
      >
        <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 6 L5 9 L10 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (running) {
    return (
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-3.5 w-3.5 items-center justify-center shrink-0"
      >
        <span className="block h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] animate-spin" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 inline-flex h-3.5 w-3.5 items-center justify-center shrink-0"
    >
      <span className="block h-1.5 w-1.5 rounded-full bg-[var(--color-hairline)]" />
    </span>
  );
}

function ArtifactTile({ scene }: { scene: Scene }) {
  return (
    <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-surface)]/60 px-3.5 py-2.5 flex items-center gap-3 hover:border-[var(--color-accent)]/50 transition-colors cursor-default">
      <span className="inline-flex h-9 w-9 rounded-md bg-[var(--color-accent)]/15 text-[var(--color-accent)] items-center justify-center shrink-0">
        <DocIcon />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-sans text-[12.5px] text-[var(--color-heading)] font-medium truncate">
          {scene.filename}
        </p>
        <p className="font-mono text-[10px] text-[var(--color-muted)]">
          {scene.tokens.toLocaleString()} tokens · {scene.seconds.toFixed(1)}s
        </p>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] font-semibold shrink-0">
        open →
      </span>
    </div>
  );
}

/* ─── ArtifactPanel (right) ──────────────────────────────────── */

function ArtifactPanel({ scene, phase }: { scene: Scene; phase: Phase }) {
  const ready = phase === "ready";
  return (
    <aside className="hidden lg:flex flex-col border-l border-[var(--color-hairline)] bg-[var(--color-surface)]/30 min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-hairline)] bg-[var(--color-surface)]/60">
        <div className="flex items-center gap-2 min-w-0">
          <DocIcon className="h-3.5 w-3.5 text-[var(--color-accent)]" />
          <span className="font-mono text-[11px] text-[var(--color-heading)] truncate">
            {scene.filename}
          </span>
        </div>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {ready ? "ready" : "rendering"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-5 min-w-0">
        <AnimatePresence mode="wait" initial={false}>
          {ready ? (
            <motion.div
              key={`art-${scene.key}`}
              initial={{ opacity: 0, scale: 0.985, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              {scene.artifact}
            </motion.div>
          ) : (
            <motion.div
              key={`skel-${scene.key}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              <SkeletonLine width="62%" />
              <SkeletonLine width="88%" />
              <SkeletonLine width="74%" />
              <div className="h-32 rounded-md bg-[var(--color-hairline)]/40 animate-pulse mt-4" />
              <SkeletonLine width="52%" />
              <SkeletonLine width="80%" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}

function SkeletonLine({ width }: { width: string }) {
  return (
    <div
      className="h-3 rounded bg-[var(--color-hairline)]/50 animate-pulse"
      style={{ width }}
    />
  );
}

/* ─── Small bits ─────────────────────────────────────────────── */

function BlinkCursor() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-[2px] align-baseline ml-[1px] bg-[var(--color-accent)]"
      style={{
        height: "0.95em",
        transform: "translateY(0.12em)",
        animation: "blink 0.53s step-end infinite",
      }}
    />
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block text-[var(--color-muted)] transition-transform duration-200"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2 L8 6 L4 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Dot({ delay }: { delay: string }) {
  return (
    <span
      className="block h-1 w-1 rounded-full bg-[var(--color-accent)]"
      style={{
        animation: "dotPulse 1.2s ease-in-out infinite",
        animationDelay: delay,
      }}
    />
  );
}

function ArrowUp() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 13 V3 M3 8 L8 3 L13 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 1.5 H10 L13 4.5 V14.5 H3 Z" strokeLinejoin="round" />
      <path d="M10 1.5 V4.5 H13" strokeLinejoin="round" />
    </svg>
  );
}

function VMark() {
  return (
    <svg viewBox="0 0 360 540" className="h-3.5 w-auto" aria-hidden="true">
      <path
        d="M 0 0 L 180 540 L 360 0"
        stroke="#C97B3F"
        strokeWidth="72"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
