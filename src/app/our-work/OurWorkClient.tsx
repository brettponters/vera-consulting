"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/* ─── CoAgent: the change, in plain terms ─── */

const BEFORE = [
  "Your day starts with skip-tracing lists, county records, and a hundred properties you have to call before someone else gets there first.",
  "AI could surface the motivated sellers and run the numbers, but every tool wanted your lead data on its servers. Off the table.",
  "So you worked the list by hand, and the best off-market deals went to whoever moved faster.",
];

const AFTER = [
  "The motivated-seller signals are already ranked when you sit down. The off-market list is scored, the comps are pulled, the numbers are run.",
  "A handful of deals need your yes. You approve them in a minute and spend your day on the ones worth chasing.",
  "And none of it left your laptop. Your lead data never touched someone else's cloud.",
];

const MEANS_FOR_YOU = [
  {
    title: "Find the deals first",
    body: "The off-market list gets sourced, scored, and ranked before you wake up. You start the day on the properties most likely to close, not a cold spreadsheet.",
  },
  {
    title: "Stop losing motivated sellers",
    body: "The follow-up, the lead from Tuesday, the seller who almost said yes. The agent catches what falls through the cracks, so a missed call stops costing you the deal.",
  },
  {
    title: "Keep your data yours",
    body: "Everything runs on your own machine. Your lead lists and deal pipeline never leave it. That is the difference between a demo and something you can actually run your business on.",
  },
];

export default function OurWorkClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-10 md:pt-20 md:pb-14 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[820px]">
            <Reveal>
              <Eyebrow className="mb-5">Our work</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Things we&rsquo;ve built.
              </motion.span>
            </h1>

            <Reveal delay={0.2}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                Real AI, shipped to production, finding off-market deals and
                motivated-seller leads, and what it actually changed for the
                people closing them.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CoAgent */}
      <section className="py-12 md:py-20 bg-[var(--color-bg)]">
        <Container size="wide">
          {/* Header: logo + name + status */}
          <Reveal>
            <Hairline className="mb-10" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <img
                src="/coagent-logo.png"
                alt="CoAgent logo"
                width={72}
                height={72}
                className="h-16 w-16 md:h-[72px] md:w-[72px] rounded-2xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2">
                  An AI agent we designed, built, and shipped
                </p>
                <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-[-0.02em] text-[var(--color-heading)] leading-none">
                  CoAgent
                </h2>
              </div>
              <span
                className="self-start sm:self-center shrink-0 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-sans text-xs font-semibold"
                style={{
                  borderColor: "var(--color-hairline)",
                  color: "var(--color-muted)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-sage)" }}
                />
                In production
              </span>
            </div>

            <p
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.01em] leading-snug max-w-[760px] mb-14"
              style={{ fontSize: "clamp(1.375rem, 2.6vw, 2.125rem)" }}
            >
              We put a busy solo investor in front of the right off-market
              deals first, without their lead data ever leaving their laptop.
            </p>
          </Reveal>

          {/* The shift: before / after */}
          <Reveal delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-hairline)] rounded-2xl overflow-hidden border border-[var(--color-hairline)]">
              {/* Before */}
              <div className="bg-[var(--color-surface)] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] font-semibold text-[var(--color-muted)] mb-6">
                  Before
                </p>
                <div className="flex flex-col gap-4">
                  {BEFORE.map((line) => (
                    <p
                      key={line}
                      className="font-sans text-[15px] md:text-base leading-relaxed text-[var(--color-muted)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              {/* After */}
              <div className="bg-[var(--color-bg)] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] font-semibold mb-6" style={{ color: "var(--color-accent)" }}>
                  After
                </p>
                <div className="flex flex-col gap-4">
                  {AFTER.map((line) => (
                    <p
                      key={line}
                      className="font-sans text-[15px] md:text-base leading-relaxed text-[var(--color-heading)] font-medium"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* What this means for you */}
          <Reveal>
            <h3
              className="font-sans font-black text-[var(--color-heading)] tracking-[-0.025em] leading-tight mt-16 md:mt-20 mb-8 max-w-[760px]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              What that means for{" "}
              <span style={{ color: "var(--color-accent)" }}>your</span> business.
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {MEANS_FOR_YOU.map((m, i) => (
              <Reveal key={m.title} delay={0.05 * i}>
                <div className="border-t-2 pt-5" style={{ borderColor: "var(--color-accent)" }}>
                  <h4 className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] mb-3 tracking-[-0.01em]">
                    {m.title}
                  </h4>
                  <p className="font-sans text-[15px] leading-relaxed text-[var(--color-body)]">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* More coming */}
          <Reveal delay={0.1}>
            <Hairline className="mt-16 mb-8" />
            <p className="font-sans text-base text-[var(--color-muted)] italic">
              More stories as engagements complete and clients agree to be named.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                Want this for your business?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                Tell us what eats your week. We&rsquo;ll tell you what we&rsquo;d
                build to take it off your plate.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Become a partner
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
