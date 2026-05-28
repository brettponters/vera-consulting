import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SOLUTIONS } from "./_data";

export const metadata: Metadata = {
  title: "AI Solutions for South Florida Businesses",
  description:
    "AI strategy, policy, coaching, training, custom agents, compliance, risk assessment, and evaluation. Eight ways VERA helps South Florida businesses put AI to work.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "AI Solutions for South Florida Businesses | VERA",
    description:
      "Eight standalone engagements covering strategy, policy, coaching, training, agents, compliance, risk, and evaluation.",
    type: "website",
    url: "https://veraconsulting.co/solutions",
  },
};

export default function SolutionsIndex() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] pt-24 pb-16 md:pt-32 md:pb-20">
        <Container size="wide">
          <div className="max-w-[860px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] font-semibold mb-4">
              Solutions
            </p>
            <h1
              className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.025em] leading-[1.02] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Eight ways VERA puts AI to work.
            </h1>
            <p
              className="font-sans text-[var(--color-body)] leading-relaxed"
              style={{ fontSize: "clamp(1.0625rem, 1.35vw, 1.25rem)" }}
            >
              Pick what&apos;s pressing. Each one is a standalone engagement
              with a clear scope, a clear outcome, and a clear price. Not sure
              where to start? Book a call and we&apos;ll figure it out together.
            </p>
          </div>
        </Container>
      </section>

      {/* ── GRID ─────────────────────────────────────── */}
      <section className="bg-[var(--color-bg)] pb-24 md:pb-32">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)] rounded-xl overflow-hidden">
            {SOLUTIONS.map((s, i) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group relative block bg-[var(--color-bg)] p-7 md:p-9 hover:bg-[var(--color-surface)] transition-colors duration-300 no-underline"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--color-accent)] mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-sans text-xl md:text-2xl font-semibold text-[var(--color-heading)] tracking-[-0.01em] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {s.label}
                </h2>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--color-body)] mb-6">
                  {s.oneLiner}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[var(--color-heading)] group-hover:text-[var(--color-accent)] transition-colors">
                  Learn more
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
