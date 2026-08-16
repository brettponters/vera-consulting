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
    id: "negotiation",
    num: "01",
    title: "Market intelligence",
    teaser: "We call which neighborhoods are about to move and where the spreads are widening, so you buy ahead of the crowd.",
    detail:
      "We watch the signals most investors never see: where prices are turning, which blocks are heating up, how fast things are selling, and where the gap between buy price and exit is opening. You get a read on where to point your money next, before the rest of the market figures it out and bids it up.",
    examples: [
      "Where prices are turning",
      "Blocks heating up before they're obvious",
      "Days-on-market and sell-through trends",
      "Where the spread is widening",
    ],
    frameAlt:
      "Claude mapping market activity and timing across the weeks",
  },
  {
    id: "market-research",
    num: "02",
    title: "Property intelligence",
    teaser: "We see the liens, the tax delinquency, and the title problems on a property before it is on anyone else's radar.",
    detail:
      "We pull the whole file: open liens and judgments, tax-delinquency status, title history and any clouds, code violations, and where it sits in foreclosure or probate, down to the owner and how to reach them. The all-night county-records dig, run across an entire market at once, so the distressed deal surfaces for you instead of slipping past.",
    examples: [
      "Liens, judgments, tax delinquency",
      "Title history and clouds",
      "Code violations and permits",
      "Foreclosure and probate status",
    ],
    frameAlt:
      "Claude completing deep research, citing 540 sources, and writing the property file",
  },
  {
    id: "comms",
    num: "03",
    title: "Seller intelligence",
    teaser: "We find the motivated sellers before they list, reach them in your name, and keep working them until they answer.",
    detail:
      "We build the list the rest of the market has not found yet, pre-foreclosure, tax-delinquent, absentee, tired-landlord, high-equity, run the skip tracing to get real phone numbers and emails, and open the conversation in your voice. We stay on the slow ones and answer the fast ones in minutes, so the seller who was going to call someone calls you first.",
    examples: [
      "Motivated sellers before they list",
      "Skip tracing for real contacts",
      "First contact in your voice",
      "Worked until they answer",
    ],
    frameAlt:
      "Claude answering in a conversation the moment a message lands",
  },
  {
    id: "deals",
    num: "04",
    title: "Deal intelligence",
    teaser: "We run the numbers the moment a deal comes in, so you know what to pay before anyone else has even looked.",
    detail:
      "We size up the deal fast: after-repair value off real comps, the rehab number, holding and closing costs, and the most you can pay and still hit your margin. The ones that do not pencil get killed before you waste a drive, and the ones that do reach you with the math already done.",
    examples: [
      "ARV off real comps",
      "Repair and rehab estimate",
      "The most you can pay",
      "Margin checked before you move",
    ],
    frameAlt:
      "Claude working through a checklist, running the numbers on a deal",
  },
  {
    id: "tax",
    num: "05",
    title: "Due diligence",
    teaser: "We pressure-test the deal before you commit, the title, the permits, the flood and rehab risk, and what the seller is not telling you.",
    detail:
      "Before you put money down, we dig into what could go wrong: title and lien problems, open or missing permits, flood-zone and environmental flags, the real rehab scope, and the holes in the seller's story. You get the deal's downside in writing, so you walk in knowing exactly what you are buying instead of finding out after closing.",
    examples: [
      "Title and lien problems surfaced",
      "Permits, flood, and environmental flags",
      "The real rehab scope",
      "What the seller left out",
    ],
    frameAlt:
      "Claude reviewing and redlining a deal, flagging the risks in the document",
  },
  {
    id: "marketing",
    num: "06",
    title: "Buyer intelligence",
    teaser: "When you have a deal to move, we match it to the right cash buyers and write what gets it sold.",
    detail:
      "We take a deal you need to move and work the exit: match it against the buyers most likely to close, write the package and the numbers that make it obvious, and get it in front of the right people while it is still hot. You stop sitting on contracts and start turning them.",
    examples: [
      "Matched to the right cash buyers",
      "A package that sells the numbers",
      "In front of buyers while it's hot",
      "Ranks who actually closes",
    ],
    frameAlt:
      "Claude drafting the deal package and buyer outreach alongside the chat",
  },
];

const OUTBOUND_CAPABILITIES: Capability[] = [
  {
    id: "negotiation",
    num: "01",
    title: "Market intelligence",
    teaser: "We find the segments where your offer has a real reason to win, so the campaign starts with a market worth pursuing.",
    detail: "We look at the clients you serve best, where the pain is urgent, who can afford the work, and what makes your agency meaningfully different. That becomes a focused market thesis instead of a broad list and a hopeful send.",
    examples: ["Best-fit client segments", "Buying triggers and timing", "Offer-to-market fit", "A reason to reach out now"],
    frameAlt: "VERA mapping the strongest market and audience opportunities",
  },
  {
    id: "market-research",
    num: "02",
    title: "Prospect intelligence",
    teaser: "We build a clean picture of the companies and people your agency should actually want to meet.",
    detail: "We source the accounts, identify the right decision-makers, verify their contact data, and enrich each record with the context that matters. The result is a usable market, not another database export.",
    examples: ["Right companies and roles", "Verified work emails", "Company and buyer context", "Duplicates removed before spend"],
    frameAlt: "VERA researching and organizing qualified prospects",
  },
  {
    id: "comms",
    num: "03",
    title: "Message intelligence",
    teaser: "We turn real prospect context into an email that sounds like a person with a reason to be in their inbox.",
    detail: "We research what the agency can credibly notice, connect that observation to the reason for reaching out, and keep the offer direct. Personalization supports the conversation instead of becoming the conversation.",
    examples: ["Human opening blocks", "Relevant target-audience language", "Clear offer positioning", "Copy that sounds like you"],
    frameAlt: "VERA writing a relevant outbound message from prospect research",
  },
  {
    id: "deals",
    num: "04",
    title: "Campaign intelligence",
    teaser: "We launch, measure, and improve the campaign as one living system instead of calling the first version finished.",
    detail: "We manage the lists, sequences, variables, sending logic, and tests. Replies tell us where the audience or message is strong, weak, or unclear, and we use that signal to make the next batch better.",
    examples: ["Campaign setup and QA", "Controlled batch launches", "Message and audience tests", "Iteration from real replies"],
    frameAlt: "VERA monitoring and improving a live outbound campaign",
  },
  {
    id: "tax",
    num: "05",
    title: "Deliverability intelligence",
    teaser: "We protect the sending system before scale turns a small mistake into a damaged domain.",
    detail: "We verify emails before personalization, control sending volume, remove duplicates, and keep invalid or risky contacts out of the campaign. Clean operations are part of performance, not an afterthought.",
    examples: ["Verification before enrichment", "Domain-level deduplication", "Controlled sending volume", "Clean campaign data"],
    frameAlt: "VERA checking campaign data and deliverability safeguards",
  },
  {
    id: "marketing",
    num: "06",
    title: "Pipeline intelligence",
    teaser: "We stay focused on the outcome that matters: qualified conversations with companies your agency can help.",
    detail: "We define qualification before launch, watch which prospects engage, and keep the campaign aligned with the kind of meeting your team would genuinely take. The system is built around pipeline quality, not vanity metrics.",
    examples: ["Qualification defined upfront", "Replies routed clearly", "Meetings tied to the ICP", "Performance measured in conversations"],
    frameAlt: "VERA connecting campaign activity to qualified agency meetings",
  },
];

/**
 * The "after" / consequence line that closes each band. The point of the
 * automation in one sentence. Not a feature. A change in your week.
 */
const CONSEQUENCES: Record<string, string> = {
  "comms": "The seller calls you first, not the other guy.",
  "marketing": "Contracts move instead of sitting on your desk.",
  "market-research": "The off-market deal ends up yours.",
  "deals": "You know what to pay while everyone else is still guessing.",
  "tax": "You learn the deal's downside before you own it.",
  "negotiation": "You buy ahead of the crowd, not into it.",
};

const OUTBOUND_CONSEQUENCES: Record<string, string> = {
  "negotiation": "You stop asking the wrong market to care.",
  "market-research": "The right person makes it into the campaign.",
  "comms": "The email feels relevant before it ever mentions the offer.",
  "deals": "Every batch teaches the next one something useful.",
  "tax": "You scale the campaign without wasting data or trust.",
  "marketing": "Your team spends time on conversations worth having.",
};

/**
 * Renders a capability title with its trailing word in the accent color, the
 * orange "intelligence" thread that ties the family together.
 */
function AccentTitle({ title }: { title: string }) {
  const idx = title.lastIndexOf(" ");
  if (idx === -1) return <>{title}</>;
  const first = title.slice(0, idx);
  const last = title.slice(idx + 1);
  return (
    <>
      {first}{" "}
      <span style={{ color: "var(--color-accent)" }}>{last}</span>
    </>
  );
}

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
  consequence,
  isLast,
  index,
}: {
  cap: Capability;
  consequence: string;
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
                <AccentTitle title={cap.title} />
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
                      style={{ backgroundColor: "var(--color-heading)" }}
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
                {consequence}
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

export function AIRoadmap({ outbound = false }: { outbound?: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const capabilities = outbound ? OUTBOUND_CAPABILITIES : CAPABILITIES;
  const consequences = outbound ? OUTBOUND_CONSEQUENCES : CONSEQUENCES;

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
              {outbound ? "What we build and run" : "What we bring you"}
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
              <span style={{ color: "var(--color-accent)" }}>
                {outbound ? "Outbound" : "Intelligence"}
              </span>{" "}
              as a Service
              <span aria-hidden="true" style={{ color: "var(--color-accent)" }}>
                .
              </span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="mt-6 md:mt-8 font-sans text-[var(--color-body)] text-lg md:text-xl leading-relaxed max-w-[680px]"
            >
              {outbound
                ? "Good outbound is not one list, one template, or one tool. We connect the market, data, message, infrastructure, and iteration, then operate the system alongside you."
                : "The technology changes every week. A tool you buy or a consultant you hire is behind the day it arrives. We stay at the frontier and put what we find into your deals, and we only make money when you do."}
            </motion.p>
          </div>

          {/* The vertical reading column. Six bands, full width, read top to
              bottom. */}
          <div>
            {capabilities.map((cap, i) => (
              <CapabilityBand
                key={cap.id}
                cap={cap}
                consequence={consequences[cap.id]}
                isLast={i === capabilities.length - 1}
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
                {outbound ? "We get paid when" : "We make money when"}
                <span style={{ color: "var(--color-accent)" }}> you </span>
                do.
              </p>
              <p className="mt-5 font-sans text-[var(--color-body)] text-base md:text-lg leading-relaxed max-w-[620px]">
                {outbound
                  ? "That is the arrangement. We build and run the outbound system, your team takes the conversations, and you pay when a qualified meeting attends. No retainer and no long-term commitment."
                  : "That is the whole arrangement. We bring the intelligence and the edge, you make the calls and close the deals. No retainer, no hourly, no paying us to try."}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
