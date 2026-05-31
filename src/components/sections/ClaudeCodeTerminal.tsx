"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Claude Code terminal animation.
 *
 * Replays a short, real-feeling Claude Code session that does work
 * relevant to VERA's audience (a solo consultant's proposal workflow).
 * Modeled on the actual CLI's visual conventions: ASCII welcome
 * banner, "> " user prompt, streamed assistant response, tool calls
 * rendered as dim chevroned lines, and a blinking caret.
 *
 * Click anywhere on the terminal to restart the sequence.
 *
 * Pure CSS + state machine, no third-party animation libs.
 */

type Line =
  | { kind: "banner"; text: string }
  | { kind: "user"; text: string; type: "instant" | "type" }
  | { kind: "assistant"; text: string }
  | { kind: "tool"; text: string }
  | { kind: "tool-result"; text: string }
  | { kind: "output-block"; text: string }
  | { kind: "status"; text: string }
  | { kind: "blank" };

const BANNER: Line[] = [
  { kind: "banner", text: "╭───────────────────────────────────────────────────────────╮" },
  { kind: "banner", text: "│                                                           │" },
  { kind: "banner", text: "│   ✻ Welcome to Claude Code                                │" },
  { kind: "banner", text: "│                                                           │" },
  { kind: "banner", text: "│   /vera/client-workflows                                  │" },
  { kind: "banner", text: "│   model: claude-opus-4-7                                  │" },
  { kind: "banner", text: "│                                                           │" },
  { kind: "banner", text: "╰───────────────────────────────────────────────────────────╯" },
  { kind: "blank" },
];

const TRANSCRIPT: Line[] = [
  ...BANNER,
  {
    kind: "user",
    text: "turn my discovery call notes into a scoped proposal in my voice",
    type: "type",
  },
  { kind: "blank" },
  {
    kind: "assistant",
    text: "On it. Reading the call notes and your proposal template.",
  },
  { kind: "blank" },
  { kind: "tool", text: "⏵ read_file  calls/acme-discovery.md" },
  { kind: "tool-result", text: "   solo brand strategist · wants AI for proposals, content, recaps" },
  { kind: "blank" },
  { kind: "tool", text: "⏵ read_file  templates/proposal.md" },
  { kind: "tool-result", text: "   3 tiers · scope · deliverables · flat monthly fee" },
  { kind: "blank" },
  {
    kind: "output-block",
    text:
      "  ## Acme Strategy · AI Workflow Build\n" +
      "  Proposal, drafted in your voice\n" +
      "\n" +
      "  A focused build for a solo brand strategist who wants AI on the\n" +
      "  parts of the week that scale badly, without losing the personal\n" +
      "  touch clients pay for.\n" +
      "\n" +
      "  ### What we'd build first\n" +
      "  •  Proposals, drafted from a call in minutes, in your voice\n" +
      "  •  Client recaps and follow-ups sent the same hour\n" +
      "  •  A first-draft pipeline for the weekly newsletter\n" +
      "\n" +
      "  ### How it runs\n" +
      "  Weekly 1:1 while we build. Guardrails and docs so the workflows\n" +
      "  are yours, with no dependency on us after handoff.\n" +
      "\n" +
      "  ### Investment\n" +
      "  Flat monthly retainer, covered on the intro call. No hourly\n" +
      "  meter, no surprise change orders.",
  },
  { kind: "blank" },
  { kind: "status", text: "✓ ready to send  ·  saved to drafts/acme-proposal.md  ·  5.1s  ·  $0.06" },
];

const TIMINGS = {
  bannerStep: 130,
  betweenSections: 800,
  userTypeChar: 78,
  userPauseAfter: 800,
  assistantChunk: 165,
  toolCallDelay: 480,
  toolResultDelay: 360,
  outputBlockDelay: 700,
  statusDelay: 580,
  endHold: 7000,
};

export function ClaudeCodeTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [partialText, setPartialText] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [runId, setRunId] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const totalLines = TRANSCRIPT.length;

  useEffect(() => {
    setVisibleLines(0);
    setPartialText("");
    setIsComplete(false);

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        timeouts.push(t);
      });

    const run = async () => {
      for (let i = 0; i < TRANSCRIPT.length; i++) {
        if (cancelled) return;
        const line = TRANSCRIPT[i];

        if (line.kind === "banner") {
          await wait(TIMINGS.bannerStep);
          if (cancelled) return;
          setVisibleLines(i + 1);
          continue;
        }

        if (line.kind === "blank") {
          setVisibleLines(i + 1);
          await wait(120);
          continue;
        }

        if (line.kind === "user" && line.type === "type") {
          await wait(TIMINGS.betweenSections);
          if (cancelled) return;
          setVisibleLines(i + 1);
          setPartialText("");
          for (let c = 1; c <= line.text.length; c++) {
            if (cancelled) return;
            setPartialText(line.text.slice(0, c));
            await wait(TIMINGS.userTypeChar);
          }
          await wait(TIMINGS.userPauseAfter);
          setPartialText("");
          continue;
        }

        if (line.kind === "assistant") {
          await wait(TIMINGS.betweenSections);
          if (cancelled) return;
          setVisibleLines(i + 1);
          setPartialText("");
          const chunks = line.text.split(" ");
          let acc = "";
          for (const word of chunks) {
            if (cancelled) return;
            acc = acc.length === 0 ? word : `${acc} ${word}`;
            setPartialText(acc);
            await wait(TIMINGS.assistantChunk);
          }
          setPartialText("");
          continue;
        }

        if (line.kind === "tool") {
          await wait(TIMINGS.toolCallDelay);
          if (cancelled) return;
          setVisibleLines(i + 1);
          continue;
        }

        if (line.kind === "tool-result") {
          await wait(TIMINGS.toolResultDelay);
          if (cancelled) return;
          setVisibleLines(i + 1);
          continue;
        }

        if (line.kind === "output-block") {
          await wait(TIMINGS.outputBlockDelay);
          if (cancelled) return;
          setVisibleLines(i + 1);
          continue;
        }

        if (line.kind === "status") {
          await wait(TIMINGS.statusDelay);
          if (cancelled) return;
          setVisibleLines(i + 1);
          continue;
        }
      }

      if (cancelled) return;
      setIsComplete(true);
      await wait(TIMINGS.endHold);
      if (cancelled) return;
      setRunId((n) => n + 1);
    };

    run();

    return () => {
      cancelled = true;
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [runId]);

  // Keep latest content scrolled into view
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [visibleLines, partialText]);

  const handleRestart = useCallback(() => {
    setRunId((n) => n + 1);
  }, []);

  const renderedLines = useMemo(() => TRANSCRIPT.slice(0, visibleLines), [visibleLines]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Replay Claude Code session"
      onClick={handleRestart}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleRestart();
        }
      }}
      className="aspect-video w-full overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E89464]"
      style={{
        background: "#0A1224",
        border: "1px solid #1F2E48",
        boxShadow: "0 30px 80px -20px rgba(0,0,0,0.55)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b"
        style={{ borderColor: "#1F2E48", background: "#0E1B33" }}
      >
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
        <span
          className="ml-3 font-mono text-[11px]"
          style={{ color: "#8B9BB4", letterSpacing: "0.04em" }}
        >
          claude  ·  ~/vera/client-workflows
        </span>
        <span
          className="ml-auto font-mono text-[10px]"
          style={{ color: "#5C6F90", letterSpacing: "0.08em" }}
        >
          {isComplete ? "click to replay" : "running"}
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="h-[calc(100%-44px)] overflow-y-auto px-5 py-4 font-mono"
        style={{
          fontFamily:
            "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
          fontSize: "clamp(11px, 1.05vw, 14px)",
          lineHeight: 1.55,
          color: "#DCD5C6",
        }}
      >
        {renderedLines.map((line, i) => {
          const isLast = i === renderedLines.length - 1;
          if (line.kind === "banner") {
            return (
              <div key={i} style={{ color: "#5C6F90", whiteSpace: "pre" }}>
                {line.text}
              </div>
            );
          }
          if (line.kind === "blank") {
            return <div key={i} style={{ height: "0.4em" }} />;
          }
          if (line.kind === "user") {
            const displayText =
              isLast && partialText.length > 0 ? partialText : line.text;
            const showCursor = isLast && partialText.length < line.text.length;
            return (
              <div key={i} style={{ color: "#F5EFE4" }}>
                <span style={{ color: "#E89464", marginRight: 8 }}>{">"}</span>
                {displayText}
                {showCursor && <Caret />}
              </div>
            );
          }
          if (line.kind === "assistant") {
            const displayText =
              isLast && partialText.length > 0 ? partialText : line.text;
            const showCursor = isLast && partialText.length < line.text.length;
            return (
              <div key={i} style={{ color: "#F5EFE4" }}>
                <span style={{ color: "#E89464", marginRight: 8 }}>●</span>
                {displayText}
                {showCursor && <Caret />}
              </div>
            );
          }
          if (line.kind === "tool") {
            return (
              <div key={i} style={{ color: "#8B9BB4" }}>
                {line.text}
              </div>
            );
          }
          if (line.kind === "tool-result") {
            return (
              <div key={i} style={{ color: "#6F89AE" }}>
                {line.text}
              </div>
            );
          }
          if (line.kind === "output-block") {
            return (
              <div
                key={i}
                style={{
                  margin: "0.6em 0",
                  padding: "0.9em 1.1em",
                  background: "#0E1B33",
                  borderLeft: "2px solid #E89464",
                  color: "#F5EFE4",
                  lineHeight: 1.6,
                  fontFamily: "inherit",
                  fontSize: "inherit",
                }}
              >
                {line.text.split("\n").map((row, ri) => {
                  const trimmed = row.trimStart();
                  if (trimmed.startsWith("## ")) {
                    return (
                      <div
                        key={ri}
                        style={{
                          color: "#F5EFE4",
                          fontWeight: 700,
                          fontSize: "1.12em",
                          letterSpacing: "-0.005em",
                          marginBottom: "0.15em",
                        }}
                      >
                        {trimmed.replace(/^##\s+/, "")}
                      </div>
                    );
                  }
                  if (trimmed.startsWith("### ")) {
                    return (
                      <div
                        key={ri}
                        style={{
                          color: "#E89464",
                          fontWeight: 600,
                          fontSize: "0.92em",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          marginTop: "0.85em",
                          marginBottom: "0.25em",
                        }}
                      >
                        {trimmed.replace(/^###\s+/, "")}
                      </div>
                    );
                  }
                  if (trimmed.length === 0) {
                    return <div key={ri} style={{ height: "0.4em" }} />;
                  }
                  // Bullet rows: render with hanging indent
                  if (trimmed.startsWith("•")) {
                    return (
                      <div
                        key={ri}
                        style={{
                          color: "#DCD5C6",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {row}
                      </div>
                    );
                  }
                  return (
                    <div
                      key={ri}
                      style={{ color: "#F5EFE4", whiteSpace: "pre-wrap" }}
                    >
                      {row}
                    </div>
                  );
                })}
              </div>
            );
          }
          if (line.kind === "status") {
            return (
              <div key={i} style={{ color: "#7FB28A", marginTop: "0.4em" }}>
                {line.text}
              </div>
            );
          }
          return null;
        })}
        {/* Trailing caret when fully complete, waiting for replay */}
        {isComplete && (
          <div style={{ marginTop: "0.6em", color: "#F5EFE4" }}>
            <span style={{ color: "#E89464", marginRight: 8 }}>{">"}</span>
            <Caret />
          </div>
        )}
      </div>
    </div>
  );
}

function Caret() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "0.55em",
        height: "1em",
        marginLeft: 2,
        verticalAlign: "-0.15em",
        background: "#F5EFE4",
        animation: "vera-cc-caret 1.05s steps(2, start) infinite",
      }}
    >
      <style>{`
        @keyframes vera-cc-caret {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
