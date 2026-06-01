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
    id: "comms",
    num: "01",
    title: "Client experience",
    teaser: "An agent that knows each client's situation and answers every one personally, so each gets a message built for them, not the same handout everyone else got.",
    detail:
      "The agent researches each client and prospect, where they live, where they're moving from, what they're actually trying to solve, then uses it to answer every question the moment it lands and to send material made for them: the relocation guide for the out-of-state buyer, the equity breakdown for the move-up seller, the first-timer walkthrough for the renter. All in your voice, at the scale of your whole database, so each one feels personally handled even when you are juggling a dozen deals.",
    examples: [
      "Instant, personal answers in your voice",
      "Researches each client and prospect",
      "Personalized outreach, not generic blasts",
      "Nobody falls through the cracks",
    ],
    frameAlt:
      "Claude answering in a conversation, ready to help the moment a question lands",
  },
  {
    id: "marketing",
    num: "02",
    title: "Content & marketing",
    teaser: "An agent that writes your listing copy, social posts, and newsletter in your voice.",
    detail:
      "Give it a listing or a topic. The agent drafts the listing description, the just-listed and just-sold posts, your neighborhood guides, and the monthly newsletter, all in your voice and Fair-Housing-safe, then queues them for your okay before anything goes out.",
    examples: [
      "Listing descriptions in minutes",
      "Just-listed and just-sold posts",
      "Neighborhood guides",
      "Your monthly newsletter, drafted",
    ],
    frameAlt:
      "Claude drafting a business document alongside the chat, writing the copy for you",
  },
  {
    id: "market-research",
    num: "03",
    title: "Market & property research",
    teaser: "Give it an address. It pulls the comps, the history, and the compliance, then writes the brief.",
    detail:
      "The agent takes an address and works the whole research job: comparable sales and a CMA, the property's history, neighborhood and school data, and the code and compliance notes, then synthesizes it into the brief you walk in with. The evening you used to lose, gone.",
    examples: [
      "Comps and a CMA",
      "Property and home history",
      "Code and compliance research",
      "Listing-appointment brief",
    ],
    frameAlt:
      "Claude completing deep research, citing 540 sources, and writing the brief",
  },
  {
    id: "deals",
    num: "04",
    title: "Client follow-ups",
    teaser: "An agent that answers new leads in minutes and keeps your whole sphere warm while you're out.",
    detail:
      "The agent responds to new leads in minutes, nudges the slow ones on a schedule you set, re-engages the ones who went cold, and keeps your past clients and sphere warm with personal check-ins and referral asks. It scores who is ready and routes the hot ones straight to you, while you're at a showing.",
    examples: [
      "Answers new leads in minutes",
      "Re-engages leads who went cold",
      "Past-client check-ins for referrals",
      "Routes hot leads to you",
    ],
    frameAlt:
      "Claude working through a task checklist to follow up and knock items off the list",
  },
  {
    id: "tax",
    num: "05",
    title: "Contracts & compliance",
    teaser: "It preps the contracts, chases the signatures, and flags the compliance before it bites you.",
    detail:
      "The agent runs each deal's paperwork on its own: contracts and disclosures prepped, signatures and missing documents chased, required disclosures and code, HOA, and zoning issues flagged, every deadline tracked. It checks in before anything high-stakes goes out. The admin you got into real estate to avoid.",
    examples: [
      "Contract and disclosure prep",
      "Chases signatures and documents",
      "Code and compliance flags",
      "Tracks every deadline",
    ],
    frameAlt:
      "Claude reviewing and redlining a contract with tracked changes and a flagged action item",
  },
  {
    id: "negotiation",
    num: "06",
    title: "Showings & scheduling",
    teaser: "An agent that books showings, builds your route, and chases the feedback after, on its own.",
    detail:
      "The agent coordinates showings around your calendar, sends confirmations and reminders to every side, builds your route and tour sheets for the day, and collects and summarizes feedback after each one so the seller update writes itself. It runs while you're in the car.",
    examples: [
      "Books and confirms showings",
      "Daily route and tour sheets",
      "Reminders to all sides",
      "Showing feedback summarized",
    ],
    frameAlt:
      "Claude managing a weekly calendar of scheduled appointments and meetings",
  },
];

/**
 * The "after" / consequence line that closes each band. The point of the
 * automation in one sentence. Not a feature. A change in your week.
 */
const CONSEQUENCES: Record<string, string> = {
  "marketing": "You stop going quiet between listings.",
  "deals": "You stop leaving money on the table to slow follow-up.",
  "market-research": "You stop losing the listing to the agent who prepped harder.",
  "tax": "You stop doing the admin you got into real estate to avoid.",
  "comms": "More clients, and every one feels like your only one.",
  "negotiation": "You stop playing scheduler all day.",
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
              Do only the work you{" "}
              <span className="italic font-light">want</span> to
              <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
                .
              </span>
            </motion.h2>

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
                You don&apos;t need all six. You need the right three for
                <span style={{ color: "var(--color-accent)" }}> your </span>
                week.
              </p>
              <p className="mt-5 font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[620px]">
                Run the right ones and the slow month stops being a coin flip.
                We help you get there, building it with you or teaching you to
                run it yourself.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
