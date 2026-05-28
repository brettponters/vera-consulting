import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "AI for South Florida Real Estate, Built by a Former Agent",
  description:
    "I sold real estate in South Florida before I built AI workflows for agents. Listings, follow-ups, market briefs, status updates, the parts of the week that scale badly. I do the work first, then I help other agents and brokerages do the same.",
  alternates: { canonical: "/for-real-estate" },
  openGraph: {
    title: "AI for South Florida Real Estate, Built by a Former Agent",
    description:
      "Built by someone who used to do the job. Real AI workflows for the parts of your week that scale badly. South Florida agents and brokerages.",
    type: "website",
    url: "https://veraconsulting.co/for-real-estate",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for South Florida Real Estate, Built by a Former Agent",
    description:
      "Built by someone who used to do the job. AI workflows for listings, follow-ups, market briefs, status updates, the parts of the week that scale badly.",
  },
};

const WORKFLOWS = [
  {
    title: "Listing copy in your voice",
    body: "Same shape every time, different details. The first draft writes itself in under a minute. You edit the parts that matter and ship it.",
  },
  {
    title: "Comparable market briefs",
    body: "Buyer asks what's been moving in a neighborhood at a price point. Five minutes later you send a clean brief with three real comps and a one-paragraph read.",
  },
  {
    title: "Open house follow-ups",
    body: "The list from Sunday turns into personalized notes by Monday morning. Not a blast. Notes that reference what each person actually asked about.",
  },
  {
    title: "Transaction status updates",
    body: "Inspection done, financing in, appraisal back, clear to close. Clients get a clean update from you the same hour, not three days later.",
  },
  {
    title: "Past-client touch sequences",
    body: "Birthdays, closing anniversaries, market updates for the neighborhood they bought into. The kind of follow-through everyone says they want to do.",
  },
  {
    title: "Showing follow-ups",
    body: "Before you leave the driveway, the buyer has a note about the property, the comps, and the next steps. They feel like the only client you have.",
  },
];

export default function ForRealEstatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-bg)] pt-24 pb-20 md:pt-32 md:pb-28 relative overflow-hidden">
        <Container size="wide">
          <div className="max-w-[920px] space-y-8">
            <div className="flex items-center gap-3">
              <span className="block h-[2px] w-8 bg-[var(--color-accent)]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)] font-semibold">
                For South Florida real estate
              </span>
            </div>
            <h1
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.03em] leading-[0.98]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              I was an agent before I was an AI consultant.
            </h1>
            <p
              className="font-sans text-[var(--color-body)] leading-relaxed max-w-[680px]"
              style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)" }}
            >
              Most of what eats your week looks the same every week. Listing
              copy, follow-ups, market briefs, status updates, open house
              recaps. I went and built the AI workflows that do those for
              you. Now I do it for other agents and brokerages across South
              Florida.
            </p>
            <div>
              <Button href="/contact" variant="filled" size="lg" arrow>
                Book an intro call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The story */}
      <section className="bg-[var(--color-bg)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-16 items-start">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold">
                The short version
              </p>
            </div>
            <div className="md:col-span-8 space-y-5">
              <h2
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                I sold real estate before I built AI workflows for agents.
              </h2>
              <div className="space-y-4 font-sans text-[var(--color-body)] text-base md:text-[17px] leading-relaxed max-w-[640px]">
                <p>
                  The part of the work that mattered most was never the
                  showings or the negotiations. It was the hour I'd lose on
                  Tuesday morning drafting the third listing description that
                  month. The Sunday night spent writing follow-ups to the open
                  house list. The market briefs I'd put together for buyers
                  who never bought.
                </p>
                <p>
                  That was the work that scaled badly. The work that didn't
                  get done at midnight because I was tired, and showed up the
                  next week as a missed touch with a past client.
                </p>
                <p>
                  I went and learned how to build AI workflows for that kind
                  of repeatable, voice-specific work. I built them for myself
                  first. Then for friends in the business. Now I do this for
                  agents and brokerages across South Florida, on retainer or
                  by the engagement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Workflows */}
      <section className="bg-[var(--color-surface)] py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-[820px] mb-12 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
              What this actually does
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)" }}
            >
              Specific workflows, not vague promises.
            </h2>
            <p className="mt-4 font-sans text-[var(--color-body)] text-base md:text-[17px] leading-relaxed">
              A short list of the workflows I've built for agents. Yours
              depends on what eats your week.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 list-none m-0 p-0">
            {WORKFLOWS.map((w) => (
              <li key={w.title} className="space-y-2">
                <h3 className="font-sans font-semibold text-[var(--color-heading)] text-lg md:text-[19px] leading-snug tracking-[-0.01em]">
                  {w.title}
                </h3>
                <p className="font-sans text-[var(--color-body)] text-[14.5px] leading-relaxed">
                  {w.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Two ways to work */}
      <section className="bg-[var(--color-bg)] py-20 md:py-28">
        <Container size="wide">
          <div className="max-w-[820px] mb-12 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
              How we work
            </p>
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)" }}
            >
              Two shapes, depending on what you need.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl border border-[var(--color-hairline)] bg-[var(--color-surface)] p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                One leader
              </p>
              <h3 className="font-sans text-[19px] md:text-[21px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em] mb-3">
                1:1 ongoing coaching.
              </h3>
              <p className="font-sans text-[var(--color-body)] text-[14.5px] leading-relaxed mb-4">
                Weekly sessions, async support in between. We work on the
                workflows that fit your specific business. For business
                leaders and entrepreneurs in real estate, top-producing
                agents, team leaders, and brokerage owners who want personal
                AI fluency.
              </p>
              <p className="font-mono text-[11px] text-[var(--color-muted)]">
                Monthly retainer, covered on the intro call.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-[var(--color-accent)] bg-white p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                Whole brokerage
              </p>
              <h3 className="font-sans text-[19px] md:text-[21px] font-semibold text-[var(--color-heading)] leading-snug tracking-[-0.015em] mb-3">
                Office-wide rollout.
              </h3>
              <p className="font-sans text-[var(--color-body)] text-[14.5px] leading-relaxed mb-4">
                For brokerages with 10 to 50 agents who want the same set of
                workflows running across the office. We build them together,
                train the team, and stay involved for the first quarter.
              </p>
              <p className="font-mono text-[11px] text-[var(--color-muted)]">
                Multi-month engagement, scope and number covered on the intro
                call.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Who this is / isn't for */}
      <section className="bg-[var(--color-surface)] py-20 md:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-16">
            <div className="md:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-3">
                Who this is for
              </p>
              <ul className="space-y-2.5 list-none m-0 p-0 font-sans text-[var(--color-body)] text-[15px] leading-relaxed">
                <li>Agents who are serious about the business, not casual.</li>
                <li>Top-producers who want to do twice the volume without burning out.</li>
                <li>Team leaders running 3 to 15 agents who want consistency.</li>
                <li>Brokerages that want AI working in the office, not just talked about at the office.</li>
              </ul>
            </div>
            <div className="md:col-span-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] font-semibold mb-3">
                Who this isn't for
              </p>
              <ul className="space-y-2.5 list-none m-0 p-0 font-sans text-[var(--color-muted)] text-[15px] leading-relaxed">
                <li>Agents looking for a webinar or a course.</li>
                <li>People who want to "explore AI" without doing the work to apply it.</li>
                <li>Anyone expecting a magic button. The workflows are good, they still take a session to set up.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-bg)] py-24 md:py-32 relative overflow-hidden border-t border-[var(--color-hairline)]">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-20 bg-[var(--color-accent)]"
        />
        <Container size="prose">
          <div className="flex flex-col items-center text-center gap-8">
            <h2
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Twenty minutes, no pressure.
            </h2>
            <p className="font-sans text-[var(--color-body)] text-lg leading-relaxed max-w-prose">
              We figure out together whether what I do actually fits what
              you're trying to do. If it doesn't, I'll tell you.
            </p>
            <Button href="/contact" variant="filled" size="lg" arrow>
              Book an intro call
            </Button>
            <p className="font-sans text-[var(--color-muted)] text-sm">
              Or write me directly,{" "}
              <Link
                href="mailto:brett@veraconsulting.co"
                className="text-[var(--color-accent)] no-underline hover:underline"
              >
                brett@veraconsulting.co
              </Link>
            </p>
            <div className="pt-6 flex flex-col items-center gap-1.5">
              <span className="h-px w-10 bg-[var(--color-hairline)]" />
              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)] font-semibold">
                Brett Ponters, VERA
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
