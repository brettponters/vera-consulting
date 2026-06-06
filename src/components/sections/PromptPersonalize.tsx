"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useTypewriter } from "@/hooks/useTypewriter";

const BUSINESS_EXAMPLES = [
  "your name",
  "your brokerage",
  "yourrealty.com",
  "your Zillow profile",
];
const PAIN_EXAMPLES = [
  "leads keep going cold",
  "listings eat my weekends",
  "showings are a scheduling mess",
  "I forget to follow up",
];

/**
 * Interactive "see what VERA can do for your business", on a VERA-orange panel
 * that expands to full-width as you scroll in. Two steps: the visitor enters
 * their business, picks their biggest pain point, then we stream a focused fix
 * for that pain in their context (Claude + live web search). Falls back
 * gracefully. Goal feeling: seen, hopeful, trusting.
 */

interface Result {
  source: "ai" | "fallback";
  read: string;
  cost: string;
  after: string;
  notice?: string;
}

type Phase = "idle" | "profiling" | "pain" | "loading" | "done" | "error";

const WAITING = ["Working from what we found", "Writing it up"];
const PROFILING_STEPS = [
  "Finding your business",
  "Reading your site",
  "Spotting what slows you down",
];

const EASE = [0.22, 1, 0.36, 1] as const;
const ORANGE_GRADIENT =
  "linear-gradient(162deg, #D68C52 0%, #C97B3F 46%, #B16931 100%)";
const INK = "#FCF8F1";
const INK_DIM = "rgba(252,248,241,0.82)";
const INK_FAINT = "rgba(252,248,241,0.56)";
const HAIR = "rgba(252,248,241,0.22)";
const DARK = "#241A0C";

export function PromptPersonalize() {
  const [business, setBusiness] = useState("");
  const [pain, setPain] = useState("");
  const [customPain, setCustomPain] = useState("");
  const [phase, setPhase] = useState<Phase>("idle");
  const [profile, setProfile] = useState("");
  const [profileLines, setProfileLines] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [steps, setSteps] = useState<string[]>([]);
  const [waitIndex, setWaitIndex] = useState(0);
  const [profileStep, setProfileStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const reduce = useReducedMotion();

  // Animated example placeholders, idle when reduced-motion or already typing.
  const bizExample = useTypewriter(BUSINESS_EXAMPLES, !reduce && business === "");
  const bizPlaceholder = reduce
    ? `e.g. ${BUSINESS_EXAMPLES[0]}`
    : `e.g. ${bizExample}`;
  const painExample = useTypewriter(
    PAIN_EXAMPLES,
    !reduce && phase === "pain" && customPain === "",
  );
  const painPlaceholder = reduce
    ? `e.g. ${PAIN_EXAMPLES[0]}`
    : `e.g. ${painExample}`;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["88%", "100%"]);

  // Only run the scroll-driven width animation on desktop. Animating width
  // reflows every frame, which janks badly on phones; mobile gets a static
  // full-width panel instead.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const animateWidth = isDesktop && !reduce;

  useEffect(() => {
    if (phase !== "loading" || steps.length) return;
    setWaitIndex(0);
    const id = setInterval(
      () => setWaitIndex((i) => (i + 1) % WAITING.length),
      1600,
    );
    return () => clearInterval(id);
  }, [phase, steps.length]);

  useEffect(() => {
    if (phase !== "profiling") return;
    setProfileStep(0);
    const id = setInterval(
      () => setProfileStep((i) => Math.min(i + 1, PROFILING_STEPS.length - 1)),
      900,
    );
    return () => clearInterval(id);
  }, [phase]);

  // Look the business up once: Haiku reads their site (or infers from the name)
  // and returns a short profile. The profile is reused by solve() so the answer
  // is grounded without searching again. The visitor then types their own pain.
  async function goToPain() {
    if (business.trim().length < 2) return;
    setProfile("");
    setProfileLines([]);
    setPhase("profiling");
    try {
      const res = await fetch("/api/personalize/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business: business.trim() }),
      });
      if (!res.ok || !res.body) throw new Error("request failed");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        buf += dec.decode(chunk, { stream: true });
        const live = buf
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.startsWith(">"))
          .map((l) => l.replace(/^>\s?/, "").trim())
          .filter(Boolean);
        if (live.length) setProfileLines(live);
      }
      const i = buf.indexOf("{");
      const j = buf.lastIndexOf("}");
      if (i !== -1 && j > i) {
        const data = JSON.parse(buf.slice(i, j + 1)) as {
          profile?: string;
        };
        if (typeof data.profile === "string") setProfile(data.profile);
      }
    } catch {
      /* fall back to hardcoded pains below */
    }
    setPhase("pain");
  }

  async function solve(chosen: string) {
    setPain(chosen);
    setSteps([]);
    setResult(null);
    setPhase("loading");
    try {
      const res = await fetch("/api/personalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ business: business.trim(), pain: chosen, profile }),
      });
      if (!res.ok || !res.body) throw new Error("request failed");
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value: chunk } = await reader.read();
        if (done) break;
        buf += dec.decode(chunk, { stream: true });
        const live = buf
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.startsWith(">"))
          .map((l) => l.replace(/^>\s?/, "").trim())
          .filter(Boolean);
        if (live.length) setSteps(live);
      }
      const i = buf.indexOf("{");
      const j = buf.lastIndexOf("}");
      if (i === -1 || j <= i) throw new Error("no json");
      const data = JSON.parse(buf.slice(i, j + 1)) as Result;
      if (!data?.read || !data?.cost || !data?.after) throw new Error("empty");
      // Enforce VERA house style: no em/en dashes, even if the model slips.
      const noDash = (s: string) => s.replace(/\s*[-–]\s*/g, ", ");
      setResult({
        source: data.source ?? "ai",
        read: noDash(data.read),
        cost: noDash(data.cost),
        after: noDash(data.after),
        notice: data.notice,
      });
      setPhase("done");
    } catch {
      setPhase("error");
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-label="See what VERA can do for your business"
      className="bg-[var(--color-surface)]"
    >
      <motion.div
        style={
          animateWidth
            ? { background: ORANGE_GRADIENT, width, borderRadius: 28 }
            : { background: ORANGE_GRADIENT, borderRadius: 28 }
        }
        className={`relative mx-auto overflow-hidden ${animateWidth ? "" : "w-full"}`}
      >
        {/* Atmosphere: subtle grain + faint brand mark. Desktop only, the
            blend mode is costly to paint on mobile during scroll. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-overlay hidden md:block"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "140px 140px",
          }}
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 360 540"
          className="pointer-events-none absolute z-0 -bottom-[14%] -right-[3%] h-[125%] w-auto hidden md:block"
          fill="none"
        >
          <path
            d="M 0 0 L 180 540 L 360 0"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="78"
            strokeLinejoin="miter"
          />
        </svg>

        <div className="relative z-10 min-h-[calc(100svh-3.5rem)] flex items-center py-16 md:py-24">
          <Container size="wide">
            <div className="max-w-[860px]">
              <h2
                className="font-sans font-black leading-[1.0] tracking-[-0.035em]"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)", color: INK }}
              >
                See what VERA can do for your real estate business.
              </h2>
              <p
                className="mt-5 font-sans text-lg md:text-xl leading-relaxed max-w-[600px]"
                style={{ color: INK_DIM }}
              >
                Drop your name, brokerage, or site, pick what&rsquo;s eating
                your week, and see exactly what we&rsquo;d take off your plate.
              </p>

              {/* Step 1, business input */}
              {phase === "idle" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-10 md:mt-12"
                >
                  <div
                    className="flex items-center gap-3 rounded-2xl pl-5 pr-2 py-2 border transition-colors focus-within:border-[rgba(255,255,255,0.65)]"
                    style={{ borderColor: "rgba(255,255,255,0.30)" }}
                  >
                    <input
                      type="text"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") goToPain();
                      }}
                      maxLength={80}
                      aria-label="Your website or business name"
                      placeholder={bizPlaceholder}
                      className="flex-1 min-w-0 bg-transparent font-sans outline-none placeholder:text-[rgba(255,255,255,0.55)] py-2"
                      style={{
                        fontSize: "clamp(1.125rem, 2.2vw, 1.625rem)",
                        color: INK,
                      }}
                    />
                    <button
                      type="button"
                      onClick={goToPain}
                      disabled={business.trim().length < 2}
                      aria-label="Continue"
                      className="shrink-0 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full transition-opacity hover:opacity-90 disabled:opacity-30"
                      style={{ backgroundColor: "#FFFFFF", color: "#241A0C" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Between steps, looking the business up (live search lines) */}
              {phase === "profiling" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-10 md:mt-12 flex flex-col gap-2.5 font-mono text-sm"
                >
                  {(profileLines.length
                    ? profileLines
                    : [`${PROFILING_STEPS[profileStep]}…`]
                  ).map((s, idx, arr) => {
                    const isLast = idx === arr.length - 1;
                    return (
                      <div
                        key={s + idx}
                        className="flex items-center gap-3"
                        style={{ color: INK_DIM, opacity: isLast ? 1 : 0.55 }}
                      >
                        <span className="relative inline-flex h-2 w-2 shrink-0">
                          {isLast && (
                            <span className="absolute inset-0 rounded-full opacity-75 animate-ping" style={{ backgroundColor: INK }} />
                          )}
                          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: INK }} />
                        </span>
                        {s}
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* Step 2, pick a pain */}
              {phase === "pain" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-10 md:mt-12"
                >
                  {profile && (
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.24em] font-semibold mb-3"
                      style={{ color: INK_FAINT }}
                    >
                      Read your site: <span className="normal-case tracking-normal">{profile}</span>
                    </p>
                  )}
                  <div className="flex items-center justify-between mb-5 gap-4">
                    <p
                      className="font-sans font-semibold text-lg md:text-xl"
                      style={{ color: INK }}
                    >
                      What&rsquo;s eating your week? Tell us in your words.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setCustomPain("");
                        setPhase("idle");
                      }}
                      className="shrink-0 font-sans text-sm underline underline-offset-4"
                      style={{ color: INK_FAINT }}
                    >
                      back
                    </button>
                  </div>
                  <div
                    className="flex items-center gap-3 rounded-2xl pl-5 pr-2 py-2 border transition-colors focus-within:border-[rgba(255,255,255,0.65)]"
                    style={{ borderColor: "rgba(255,255,255,0.30)" }}
                  >
                    <input
                      type="text"
                      value={customPain}
                      onChange={(e) => setCustomPain(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && customPain.trim().length >= 2) {
                          solve(customPain.trim());
                        }
                      }}
                      maxLength={140}
                      autoFocus
                      aria-label="What's eating your week?"
                      placeholder={painPlaceholder}
                      className="flex-1 min-w-0 bg-transparent font-sans outline-none placeholder:text-[rgba(255,255,255,0.55)] py-2"
                      style={{
                        fontSize: "clamp(1.125rem, 2.2vw, 1.625rem)",
                        color: INK,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customPain.trim().length >= 2) solve(customPain.trim());
                      }}
                      disabled={customPain.trim().length < 2}
                      aria-label="Get my fix"
                      className="shrink-0 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full transition-opacity hover:opacity-90 disabled:opacity-30"
                      style={{ backgroundColor: "#FFFFFF", color: "#241A0C" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Output */}
              <div aria-live="polite" className="mt-10 md:mt-12 min-h-[3rem]">
                <AnimatePresence mode="wait">
                  {phase === "loading" && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-2.5 font-mono text-sm"
                    >
                      {steps.length === 0 ? (
                        <div className="flex items-center gap-3" style={{ color: INK_DIM }}>
                          <span className="relative inline-flex h-2 w-2 shrink-0">
                            <span className="absolute inset-0 rounded-full opacity-75 animate-ping" style={{ backgroundColor: INK }} />
                            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: INK }} />
                          </span>
                          {WAITING[waitIndex]}…
                        </div>
                      ) : (
                        steps.map((s, idx) => {
                          const isLast = idx === steps.length - 1;
                          return (
                            <motion.div
                              key={s + idx}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: isLast ? 1 : 0.55, x: 0 }}
                              transition={{ duration: 0.3, ease: EASE }}
                              className="flex items-center gap-3"
                              style={{ color: INK_DIM }}
                            >
                              <span className="relative inline-flex h-2 w-2 shrink-0">
                                {isLast && (
                                  <span className="absolute inset-0 rounded-full opacity-75 animate-ping" style={{ backgroundColor: INK }} />
                                )}
                                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: INK }} />
                              </span>
                              {s}
                            </motion.div>
                          );
                        })
                      )}
                    </motion.div>
                  )}

                  {phase === "done" && result && (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.28em] font-semibold mb-4"
                        style={{ color: INK }}
                      >
                        {pain}
                      </p>
                      <p
                        className="font-sans font-semibold tracking-[-0.01em] leading-snug max-w-[680px]"
                        style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.875rem)", color: INK }}
                      >
                        {result.read}
                      </p>

                      <div className="mt-9 flex flex-col">
                        {[
                          { label: "What it's costing you", body: result.cost },
                          { label: "What you'd get back", body: result.after },
                        ].map((row, i) => (
                          <motion.div
                            key={row.label}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.12 + i * 0.12, ease: EASE }}
                            className="py-6 md:py-7 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-8"
                            style={{ borderTop: `1px solid ${HAIR}` }}
                          >
                            <p
                              className="font-mono text-[10px] uppercase tracking-[0.24em] font-semibold pt-1"
                              style={{ color: INK }}
                            >
                              {row.label}
                            </p>
                            <p
                              className="font-sans text-base md:text-lg leading-relaxed max-w-[560px]"
                              style={{ color: INK_DIM }}
                            >
                              {row.body}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-9">
                        <a
                          href="/contact"
                          className="group inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-sans text-sm font-medium no-underline transition-all duration-200 ease-out hover:-translate-y-px"
                          style={{ backgroundColor: DARK, color: "#F5EFE4" }}
                        >
                          Book a call
                          <svg
                            aria-hidden="true"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                          >
                            <path d="M2 7h10M8 3l4 4-4 4" />
                          </svg>
                        </a>
                      </div>

                      {result.notice && (
                        <p className="mt-5 font-sans text-xs" style={{ color: INK_FAINT }}>
                          {result.notice}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {phase === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ color: INK_DIM }} className="font-sans">
                        That one&rsquo;s not cooperating. Try again, or just{" "}
                        <a href="/contact" className="underline underline-offset-4" style={{ color: INK }}>
                          book a call
                        </a>{" "}
                        and we&rsquo;ll do it live.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setCustomPain("");
                          setPhase("pain");
                        }}
                        className="mt-4 font-sans text-sm font-semibold underline underline-offset-4"
                        style={{ color: INK }}
                      >
                        Try again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Container>
        </div>

        {/* Disclaimer, bottom-right */}
        <p
          className="absolute bottom-5 right-5 md:bottom-7 md:right-10 font-sans text-xs text-right max-w-[240px] z-10"
          style={{ color: INK_FAINT }}
        >
          Disclaimer: Your data is not retained or used.
        </p>
      </motion.div>
    </section>
  );
}
