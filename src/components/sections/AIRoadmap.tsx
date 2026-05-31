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
  videoUrl?: string;
  youtubeId?: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "marketing",
    num: "01",
    title: "Content & marketing",
    teaser: "Newsletters, posts, courses, and sales pages in your voice.",
    detail:
      "AI agents draft your newsletter, LinkedIn, course outlines, and sales pages from your voice notes and frameworks. You ship more without diluting the voice clients hired you for.",
    examples: [
      "Newsletter drafts in 10 minutes",
      "LinkedIn posts in your tone",
      "Course modules from frameworks",
    ],
    youtubeId: "0vZ_UVLhSQQ",
  },
  {
    id: "deals",
    num: "02",
    title: "Sales & lead gen",
    teaser: "Finding leads, discovery prep, qualification, objections.",
    detail:
      "Lead lists pulled from your niche, pre-call research on the prospect, qualification scoring from form fills, objection handling drafts. You fill the pipeline and show up to every call with conviction.",
    examples: [
      "Lead lists from your niche",
      "Pre-call prospect research",
      "Qualification scoring",
      "Objection handling drafts",
    ],
    youtubeId: "UAmKyyZ-b9E",
  },
  {
    id: "market-research",
    num: "03",
    title: "Client research & briefs",
    teaser: "Industry briefs in 30 minutes, not three days.",
    detail:
      "Industry breakdowns, competitor analysis, market sizing, regulatory primers. Pulled from public data and synthesized in your voice. Walk into the call already smart on their world.",
    examples: [
      "Industry briefs in 30 minutes",
      "Competitor breakdowns",
      "Market sizing and TAM",
      "Discovery call prep",
    ],
    youtubeId: "R-KJgjIrh24",
  },
  {
    id: "tax",
    num: "04",
    title: "Operations & admin",
    teaser: "CRM, calendar, invoicing, project ops.",
    detail:
      "CRM auto-fill, calendar prep, invoicing reminders, project status reports, inbox triage. The drudgery handled before you even open the app.",
    examples: [
      "CRM auto-fill from calls",
      "Calendar prep and briefs",
      "Invoicing and follow-up",
      "Project status reports",
    ],
    youtubeId: "_jjSS0qGFbI",
  },
  {
    id: "comms",
    num: "05",
    title: "Client communications",
    teaser: "Recaps, follow-ups, sequences in your voice.",
    detail:
      "Meeting recaps from transcripts, client follow-ups in your tone, day 1, 3, 7, 14, 30 sequences for the leads you would otherwise forget. Hot replies route straight to you.",
    examples: [
      "Call recaps from transcripts",
      "Client follow-ups in your tone",
      "Long-tail drip sequences",
      "Hot-lead routing",
    ],
    youtubeId: "rBJnWMD0Pho",
  },
  {
    id: "negotiation",
    num: "06",
    title: "Proposals & pitches",
    teaser: "Custom proposals, decks, and scope docs in minutes.",
    detail:
      "Custom proposals built from your standards, the client's brief, and your last twenty wins. SOWs that match how you actually scope. Pitch decks in your visual language. Pricing options you can defend.",
    examples: [
      "Custom proposals",
      "Scope docs from a brief",
      "Pitch decks in your style",
      "Pricing options",
    ],
    youtubeId: "fOxC44g8vig",
  },
];

/**
 * The "after" / consequence line that closes each band. The point of the
 * automation in one sentence. Not a feature. A change in your week.
 */
const CONSEQUENCES: Record<string, string> = {
  "marketing": "You stop disappearing for two weeks at a time.",
  "deals": "You stop reading their LinkedIn five minutes before the call.",
  "market-research": "You stop charging for prep time you can not bill.",
  "tax": "You stop spending Sunday on admin.",
  "comms": "You stop being the bottleneck in your own inbox.",
  "negotiation": "You stop losing deals because the proposal did not go out.",
};

/**
 * One band = one capability laid out as an editorial spread inside the
 * vertical scroll. Reveals itself when it crosses into view. Sets the
 * active id on the parent so the side rail reflects where you are.
 */
function VideoPlaceholder({
  title,
  videoUrl,
  youtubeId,
}: {
  title: string;
  videoUrl?: string;
  youtubeId?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] aspect-video">
      {/* Render order: YouTube iframe > mp4 video > play-button mock.
          For YouTube, oversize the iframe so the player chrome (title bar,
          watermark, end-of-video suggestions) gets cropped outside the
          aspect-video frame. Pointer events off so hover overlays don't
          trigger. */}
      {youtubeId ? (
        <iframe
          className="absolute pointer-events-none"
          style={{
            top: "-15%",
            left: "-15%",
            width: "130%",
            height: "130%",
          }}
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=${youtubeId}&disablekb=1&fs=0&iv_load_policy=3&rel=0&playsinline=1&start=8&end=58`}
          title={`${title} demo`}
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border-2"
            style={{
              borderColor: "var(--color-accent)",
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              aria-hidden="true"
              className="md:h-7 md:w-7"
            >
              <path d="M5 3 L19 11 L5 19 Z" fill="var(--color-accent)" />
            </svg>
          </div>
        </div>
      )}

      {/* Footer label, sits on a subtle gradient so it stays legible over
          any video frame. */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 md:px-5 pt-8 pb-3 md:pb-4 flex items-baseline justify-between gap-3"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
        }}
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#F5EFE4" }}
        >
          Demo · {title}
        </span>
        <span
          className="font-mono text-[10px] uppercase tracking-[0.22em] font-semibold"
          style={{ color: "#E89464" }}
        >
          {videoUrl || youtubeId ? "Preview" : "Coming"}
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
                    className="border-b border-[var(--color-hairline)] py-3 flex items-start gap-4"
                  >
                    <span
                      className="font-mono text-[10px] tracking-[0.22em] font-semibold mt-1 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {cap.num}.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans font-semibold text-[var(--color-heading)] text-[14.5px] md:text-[15px] leading-snug">
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

          {/* VIDEO column, vertically centered, breaks past the container to
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
                <VideoPlaceholder
                  title={cap.title}
                  videoUrl={cap.videoUrl}
                  youtubeId={cap.youtubeId}
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
              Do only the work you{" "}
              <span className="italic font-light">want</span> to
              <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
                .
              </span>
            </motion.h2>

          </div>

          {/* The vertical reading column. 9 bands, full width, read top to
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
                You don&apos;t need all six. You need the right three for
                <span style={{ color: "var(--color-accent)" }}> your </span>
                week.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
