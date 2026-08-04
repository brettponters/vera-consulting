"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQ } from "./faq";
import { PHASES } from "./phases";

const WHAT_YOU_GET = [
  {
    label: "Deals",
    items: [
      "Off-market deals matched to your buy box",
      "Motivated seller leads scored and prioritized",
      "Markets and properties read before the crowd",
      "Numbers run fast so you can move first",
    ],
  },
  {
    label: "Pipeline",
    items: [
      "A steady flow of sourced opportunities",
      "Leads routed straight into your workflow",
      "Comps, ARV, and rehab math on every deal",
      "Signals on which sellers are ready to move",
    ],
  },
  {
    label: "Partnership",
    items: [
      "Performance-based, no retainer or hourly",
      "We win only when you close",
      "No paying to try, no software to babysit",
      "The frontier kept current in your deals every week",
    ],
  },
  {
    label: "Edge",
    items: [
      "The sharpest AI models, run by our team",
      "An edge that compounds instead of aging out",
      "Direction on where the next deals are coming from",
      "A partner who stays as long as the deals do",
    ],
  },
];

/* ─── Page ─── */

export default function HowWeWorkClient() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-14 pb-16 md:pt-20 md:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F4F1 25%, #F5F4F1 75%, #FFFFFF 100%)",
        }}
      >
        <Container size="wide" className="relative z-10">
          <div className="max-w-[860px]">
            <Reveal>
              <Eyebrow className="mb-5">How we work</Eyebrow>
            </Reveal>

            <h1
              className="font-sans font-black text-[var(--color-heading)] leading-[1.02] tracking-[-0.03em] mb-10"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                You should know exactly how the deals reach you and how we both win.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                Every partnership follows the same structure. We wrote it
                down so you can see exactly what happens, when, and what
                deals you get out of each step.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Phases */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <Reveal>
            <Eyebrow className="mb-4">The process</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-16 md:mb-20">
              How the partnership works.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-16 md:gap-24">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.title} delay={0.05 + i * 0.05}>
                <div>
                  <Hairline className="mb-10" />
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
                    {/* Left: number + title */}
                    <div className="flex flex-col gap-3">
                      <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-accent)]">
                        {phase.number}
                      </span>
                      <h3 className="font-sans font-semibold text-xl md:text-2xl text-[var(--color-heading)] uppercase tracking-[0.06em]">
                        {phase.title}
                      </h3>
                    </div>

                    {/* Right: description + deliverables */}
                    <div className="max-w-[640px]">
                      <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                        {phase.description}
                      </p>
                      <div className="flex flex-col gap-2">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)] mb-1">
                          Deliverables
                        </p>
                        {phase.deliverables.map((d) => (
                          <p
                            key={d}
                            className="font-sans text-sm text-[var(--color-body)] flex items-start gap-2"
                          >
                            <span className="text-[var(--color-accent)] mt-0.5 shrink-0">
                              &bull;
                            </span>
                            {d}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <Reveal>
            <Eyebrow className="mb-4">What you get</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-12 md:mb-16 max-w-xl">
              What you get from the partnership.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {WHAT_YOU_GET.map((category, i) => (
              <Reveal key={category.label} delay={0.05 + i * 0.05}>
                <div className="rounded-lg border border-[var(--color-hairline)] bg-white p-6 md:p-8 h-full">
                  <p className="font-sans font-semibold text-sm uppercase tracking-[0.12em] text-[var(--color-accent)] mb-5">
                    {category.label}
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {category.items.map((item) => (
                      <p
                        key={item}
                        className="font-sans text-sm text-[var(--color-body)] leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What makes us different */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="max-w-[760px]">
            <Reveal>
              <Eyebrow className="mb-4">Why VERA</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
                Why a partner, not a tool.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                The technology moves every week. A tool you buy or a
                subscription you pay for is behind the day it arrives. A
                partner who stays at the frontier and puts what they find
                into your deals is the only thing that keeps compounding.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-10">
                We win only when you close, so our incentives sit on the
                same side as yours. No retainer, no hourly, no paying to
                try. We get paid when the deal does.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Hairline className="mb-8" />
              <div className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-sm uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  Public Benefit Corporation
                </p>
                <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                  VERA is a Public Benefit Corporation. A fixed percentage
                  of every dollar we earn goes to independent AI safety
                  research. This technology is moving fast, and we think
                  the people deploying it should also be funding the work
                  to make sure it stays safe.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]">
        <Container size="wide">
          <Reveal>
            <Eyebrow className="mb-4">Common questions</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-12 md:mb-16">
              Questions we get a lot.
            </h2>
          </Reveal>

          <div className="max-w-[760px] flex flex-col">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={0.05 + i * 0.05}>
                <div>
                  <Hairline />
                  <div className="py-7">
                    <p className="font-sans font-semibold text-base text-[var(--color-heading)] mb-3">
                      {item.q}
                    </p>
                    <p className="font-sans text-sm leading-relaxed text-[var(--color-body)]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Hairline />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <Container size="wide">
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-heading)] mb-4">
                Want to talk through your situation?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                Become a partner and we&rsquo;ll walk through where you are
                and what might make sense.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Become a Partner
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
