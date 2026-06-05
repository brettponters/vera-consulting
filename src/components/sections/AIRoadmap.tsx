"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

interface Capability {
  id: string;
  num: string;
  title: string;
  teaser: string;
  detail: string;
  examples: string[];
  /** Alt text for the per-band Claude product frame in /public/capabilities. */
  frameAlt: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "market-research",
    num: "01",
    title: "Cross-data research",
    teaser: "Point it at hundreds of sources at once. It reads every one, connects them, and hands back what matters, cited.",
    detail:
      "It works across all your data at the same time, your own files and the public record, and surfaces the pattern, the outlier, the answer, with a citation for every claim so you can trust what it found. Days of digging become minutes of reviewing.",
    examples: [
      "Reads hundreds of sources at once",
      "Connects what no one had time to",
      "Every finding cited to its source",
      "Days of digging, done in minutes",
    ],
    frameAlt:
      "Claude completing deep research, citing 540 sources, and writing the brief",
  },
  {
    id: "comms",
    num: "02",
    title: "Your firm's memory",
    teaser: "Everything your firm has ever done, answerable in plain English the second you ask.",
    detail:
      "Past work, templates, decisions, who did what, your whole institutional memory searchable in a sentence instead of a message to the one person who remembers. Drawn only from your own files, which stay inside your walls.",
    examples: [
      "Ask your past work anything",
      "\"How did we handle this before?\"",
      "No more hunting for the one expert",
      "Your data stays inside your walls",
    ],
    frameAlt:
      "Claude answering in a conversation, ready to help the moment a question lands",
  },
  {
    id: "negotiation",
    num: "03",
    title: "Internal consultant",
    teaser: "A sharp second opinion on any call, briefed on your business, the moment you need it.",
    detail:
      "Talk through the decision, the approach, the pitch, the risk, and get back a clear, reasoned take that knows your context, not generic advice. The senior sounding board you can't always grab, on demand.",
    examples: [
      "A second opinion, on demand",
      "Knows your business and context",
      "Pressure-tests your thinking",
      "The sounding board you can't always grab",
    ],
    frameAlt:
      "Claude mapping out a plan and the path forward across the week",
  },
  {
    id: "tax",
    num: "04",
    title: "Second set of eyes",
    teaser: "Catches the typo, the wrong number, the missed detail before it ever reaches the client.",
    detail:
      "It reviews the work before it goes out and flags what a long day misses, the inconsistency, the number that doesn't add up, the deadline nobody logged. A reviewer that never gets tired and never skims.",
    examples: [
      "Catches the little things, every time",
      "Flags the number that's off",
      "Never gets tired, never skims",
      "Caught at your desk, not theirs",
    ],
    frameAlt:
      "Claude reviewing and redlining a contract with tracked changes and a flagged action item",
  },
  {
    id: "marketing",
    num: "05",
    title: "Branded deliverables",
    teaser: "The report, the proposal, the deck, drafted in your firm's voice and on-brand, ready for your sign-off.",
    detail:
      "Give it the inputs and the first draft comes back in your format, tone, and branding, the client report, the proposal, the deck. You review near-final work instead of a blank page, and nothing leaves until you approve it.",
    examples: [
      "Reports, proposals, and decks",
      "In your voice and on-brand",
      "A near-final draft, not a blank page",
      "Nothing sends without your sign-off",
    ],
    frameAlt:
      "Claude drafting a business document alongside the chat, writing the copy for you",
  },
  {
    id: "deals",
    num: "06",
    title: "Speed gains",
    teaser: "The tedious, low-value work that slows everyone down, handled, so your people move faster on what matters.",
    detail:
      "It takes the grunt work off your team, the formatting, the cleanup, the repetitive multi-step tasks, and runs it in the background. Not to replace anyone, but to clear the drudgery so your people spend their hours where their judgment actually counts.",
    examples: [
      "The grunt work, handled",
      "Hours back on every task",
      "Augments your team, never replaces it",
      "Time goes to the work that matters",
    ],
    frameAlt:
      "Claude working through a task checklist to follow up and knock items off the list",
  },
];

/**
 * The "after" / consequence line that closes each band. The point of the
 * automation in one sentence. Not a feature. A change in your week.
 */
const CONSEQUENCES: Record<string, string> = {
  "market-research": "You see what no one had the hours to find.",
  "comms": "Your newest hire knows what the firm knows.",
  "negotiation": "You always have someone sharp to think with.",
  "tax": "The mistake gets caught before the client sees it.",
  "marketing": "The blank page stops costing you nights.",
  "deals": "Your team's hours go to the work that counts.",
};

/**
 * One band = one capability laid out as an editorial spread inside the
 * vertical scroll. Reveals itself when it crosses into view. Sets the
 * active id on the parent so the side rail reflects where you are.
 */
function CapabilityFrame({
  id,
  title,
  frameAlt,
}: {
  id: string;
  title: string;
  frameAlt: string;
}) {
  // A still frame from a Claude (Anthropic) product demo, chosen to match the
  // band's topic. One image per band, served locally from /public/capabilities.
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] aspect-video">
      <img
        src={`/capabilities/${id}.jpg`}
        alt={frameAlt}
        loading="lazy"
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Footer caption, sits on a subtle gradient so it stays legible over
          the frame. */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 px-4 md:px-5 pt-8 pb-3 md:pb-4"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
        }}
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#F5EFE4" }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}

function CapabilityBand({
  cap,
  isLast,
  index,
}: {
  cap: Capability;
  isLast: boolean;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const reversed = index % 2 === 1;

  // Track scroll progress through this individual band so the giant numeral
  // can drift on its own while you read it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  // Suppress the unused scroll-progress motion value (the giant numeral
  // backdrop moved into the video placeholder column).
  void numeralY;

  return (
    <article
      ref={ref}
      id={`cap-${cap.id}`}
      aria-labelledby={`cap-${cap.id}-title`}
      className="relative"
    >
      <div className="pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-x-6 xl:gap-x-8 gap-y-10 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* CONTENT column */}
          <div className="lg:col-span-6">
            {/* Band marker */}
            <div className="border-t border-[var(--color-hairline)] pt-5 md:pt-6 mb-6 md:mb-8">
              <span
                className="font-mono text-[11px] font-semibold tracking-[0.28em]"
                style={{ color: "var(--color-accent)" }}
              >
                {cap.num}
              </span>
            </div>

            {/* Title + teaser */}
            <div className="relative mb-7 md:mb-10">
              {/* Giant outlined numeral, decorative. Sits on the outer side
                  of the content column (opposite the video), extending past
                  the column toward the page edge. */}
              <span
                aria-hidden="true"
                className={`hidden lg:block absolute font-sans font-black select-none pointer-events-none ${
                  reversed
                    ? "right-0 lg:-right-[4vw] xl:-right-[8vw]"
                    : "left-0 lg:-left-[4vw] xl:-left-[8vw]"
                }`}
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px var(--color-accent)",
                  fontSize: "clamp(8rem, 14vw, 15rem)",
                  lineHeight: 0.78,
                  letterSpacing: "-0.06em",
                  top: "-3rem",
                  opacity: 0.45,
                  zIndex: 0,
                }}
              >
                {cap.num}
              </span>

              <motion.h3
                id={`cap-${cap.id}-title`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
                className="relative z-10 font-sans font-black text-[var(--color-heading)] tracking-[-0.035em] leading-[0.92] m-0"
                style={{ fontSize: "clamp(2.25rem, 4.8vw, 4rem)" }}
              >
                {cap.title}
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-accent)" }}
                >
                  .
                </span>
              </motion.h3>
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.18,
                }}
                className="font-sans font-semibold text-[var(--color-heading)] leading-snug mt-3 md:mt-4"
                style={{ fontSize: "clamp(1.125rem, 1.3vw, 1.3125rem)" }}
              >
                {cap.teaser}
              </motion.p>
            </div>

            {/* What it does */}
            <div className="mb-7 md:mb-9">
              <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {cap.examples.map((ex, i) => (
                  <motion.li
                    key={ex}
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 14 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px -5% 0px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-[var(--color-hairline)] py-3 flex items-start gap-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-[6px] w-[6px] rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    <span className="font-sans font-semibold text-[var(--color-heading)] text-[15px] md:text-[16px] leading-snug">
                      {ex}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Consequence */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="flex items-start gap-5"
            >
              <span
                aria-hidden="true"
                className="block w-10 md:w-12 h-[3px] mt-3 md:mt-[14px] shrink-0"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <p
                className="font-sans font-black text-[var(--color-heading)] tracking-[-0.02em] leading-[1.05] m-0"
                style={{ fontSize: "clamp(1.375rem, 2.2vw, 2rem)" }}
              >
                {CONSEQUENCES[cap.id]}
              </p>
            </motion.div>
          </div>

          {/* FRAME column, vertically centered, breaks past the container to
              sit toward the outer edge without crowding it. */}
          <div
            className={`lg:col-span-6 lg:self-center ${
              reversed
                ? "lg:-ml-8 xl:-ml-[6vw] 2xl:-ml-[10vw]"
                : "lg:-mr-8 xl:-mr-[6vw] 2xl:-mr-[10vw]"
            }`}
          >
            <div>
              <motion.div
                initial={
                  prefersReducedMotion ? false : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
              >
                <CapabilityFrame
                  id={cap.id}
                  title={cap.title}
                  frameAlt={cap.frameAlt}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {!isLast && (
        <div className="border-b border-[var(--color-hairline)]" />
      )}
    </article>
  );
}

export function AIRoadmap() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="ai-capabilities-heading"
      className="relative bg-[var(--color-bg)] overflow-hidden"
    >
      <div>
        <Container size="wide">
          {/* Opening. The headline + the promise. No index framing. The
              tone should land as helpful, not archival. */}
          <div className="pt-16 md:pt-24 lg:pt-28 pb-6 md:pb-10">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.28em] font-semibold mb-5 md:mb-7"
              style={{ color: "var(--color-navy)" }}
            >
              What AI does for you
            </p>

            <motion.h2
              id="ai-capabilities-heading"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.035em] leading-[0.92] m-0 max-w-[1100px]"
              style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}
            >
              Move fast. Stay{" "}
              <span className="italic font-light">safe</span>
              <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
                .
              </span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-7 md:mt-9 font-sans font-semibold text-[var(--color-heading)] tracking-[-0.01em] leading-snug max-w-[760px]"
              style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)" }}
            >
              Risk becomes the entry ticket to
              <span style={{ color: "var(--color-accent)" }}> opportunity</span>.
            </motion.p>

            <p className="mt-6 md:mt-7 font-sans text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-[560px]">
              Connected to your real, trusted sources and strategies, not a
              chatbot guessing.
            </p>

          </div>

          {/* The vertical reading column. Six bands, full width, read top to
              bottom. */}
          <div>
            {CAPABILITIES.map((cap, i) => (
              <CapabilityBand
                key={cap.id}
                cap={cap}
                isLast={i === CAPABILITIES.length - 1}
                index={i}
              />
            ))}
          </div>

          {/* Closer. The "now what" sentence. Reads as the thought you walk
              away with, not a document endcap. */}
          <div className="pt-10 md:pt-14 pb-20 md:pb-28 border-t border-[var(--color-hairline)]">
            <div className="max-w-[820px]">
              <p
                className="font-sans font-black text-[var(--color-heading)] tracking-[-0.025em] leading-[1.05] m-0"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
              >
                You don&apos;t need all six. You need the right ones for
                <span style={{ color: "var(--color-accent)" }}> where you are</span>.
              </p>
              <p className="mt-5 font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[620px]">
                Start where the risk, or the opportunity, is biggest. We help
                you get there, building it with you or teaching your team to run
                it themselves.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
