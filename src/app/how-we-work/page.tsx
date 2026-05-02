"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/* ─── Data ─── */

const PHASES = [
  {
    number: "01",
    title: "Discover",
    description:
      "Before we recommend anything, we need to understand how your business actually runs. Your data, your team, your regulatory situation, what you've already tried. We spend real time here because most AI projects fail when someone skips this part.",
    deliverables: [
      "Technical and operational assessment",
      "Stakeholder interviews",
      "Risk and compliance landscape review",
      "Feasibility analysis with honest recommendations",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Once we understand the problem, we write the plan. Architecture, evaluation criteria, governance, timeline. Everything is backed by research and scoped to what your team can actually maintain. Nothing gets built until we agree on what success looks like.",
    deliverables: [
      "AI strategy document",
      "Architecture and system design",
      "Evaluation and success criteria",
      "Governance and compliance framework",
    ],
  },
  {
    number: "03",
    title: "Integrate",
    description:
      "We write code alongside your engineers. Guardrails, monitoring, and documentation are part of the integration, not an afterthought. When we're done, your team knows the system inside and out because they helped integrate it.",
    deliverables: [
      "Production-ready AI systems",
      "Testing and evaluation pipelines",
      "Integration with existing infrastructure",
      "Full technical documentation",
    ],
  },
  {
    number: "04",
    title: "Operate",
    description:
      "AI systems change over time. Models drift, data shifts, usage patterns evolve. We monitor what matters, flag what's degrading, and fix it before it becomes your problem.",
    deliverables: [
      "Performance monitoring dashboards",
      "Drift detection and alerting",
      "Quarterly reviews and optimization",
      "Team training and knowledge transfer",
    ],
  },
];

const WHAT_YOU_GET = [
  {
    label: "Strategy",
    items: [
      "AI readiness assessment",
      "Use case prioritization",
      "Architecture design",
      "Regulatory roadmap",
    ],
  },
  {
    label: "Implementation",
    items: [
      "Production AI systems",
      "Agent development",
      "Evaluation frameworks",
      "Infrastructure setup",
    ],
  },
  {
    label: "Governance",
    items: [
      "Compliance audits",
      "Risk assessment",
      "Safety evaluation",
      "Policy documentation",
    ],
  },
  {
    label: "Enablement",
    items: [
      "Team training",
      "Knowledge transfer",
      "Process documentation",
      "Ongoing advisory",
    ],
  },
];

const FAQ = [
  {
    q: "How long does a typical engagement last?",
    a: "It depends on scope. A focused strategy engagement runs 4-6 weeks. A full integration can be 3-6 months. We scope every project individually and give you a clear timeline upfront.",
  },
  {
    q: "What industries do you work with?",
    a: "Healthcare, finance, insurance, legal, enterprise operations. Industries where AI decisions carry real weight and there's no room to get it wrong.",
  },
  {
    q: "How big is your team?",
    a: "Small and senior. The people you talk to are the people who do the work. No bait and switch.",
  },
  {
    q: "What does pricing look like?",
    a: "We work on project-based pricing, scoped to deliverables. No hourly billing, no open-ended retainers. You know what you're getting and what it costs before we start.",
  },
  {
    q: "Can you work with our existing team?",
    a: "That's how we prefer it. We work alongside your engineers so when we leave, they know the system as well as we do.",
  },
];

/* ─── Page ─── */

export default function HowWeWork() {
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
              className="font-sans font-bold text-[var(--color-heading)] leading-[1.05] tracking-[-0.02em] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                You should know exactly what you're getting and how we get there.
              </motion.span>
            </h1>

            <Reveal delay={0.4}>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-[var(--color-body)] max-w-[640px]">
                We learn your business before we touch anything. We plan
                before we integrate. We work with your team, not around them.
                And we stick around after launch.
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
              How an engagement works.
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
              What you walk away with.
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
                Why we set it up this way.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-6">
                A lot of AI consulting stops at the strategy deck. Others
                jump straight to building without thinking it through.
                We think you need both, and they need to come from the
                same people.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-10">
                We back up what we recommend with actual research.
                We document everything we integrate. And when the engagement
                ends, your team should be able to run the system without
                calling us. That&rsquo;s how we want it to work.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Hairline className="mb-8" />
              <div className="flex flex-col gap-4">
                <p className="font-sans font-semibold text-sm uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  Public Benefit Corporation
                </p>
                <p className="font-sans text-base leading-relaxed text-[var(--color-body)]">
                  VERA is incorporated as a Public Benefit Corporation. A fixed
                  percentage of every dollar we earn goes directly to
                  independent AI safety research. This technology is powerful,
                  and as it moves forward, we want to make sure AI stays
                  aligned with human needs and used for genuine good.
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
                Let&rsquo;s talk about what you&rsquo;re building.
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-sans text-base leading-relaxed text-[var(--color-body)] mb-8">
                If it sounds like we can help, we&rsquo;ll say so. If not,
                we&rsquo;ll tell you that too.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book a call
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
