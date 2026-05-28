import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

export const metadata: Metadata = {
  title: "Annual Benefit Report",
  description:
    "VERA is a Public Benefit Corporation. The first annual benefit report will be published at the end of our first fiscal year.",
  alternates: { canonical: "/benefit-report" },
  robots: { index: false, follow: true },
};

export default function BenefitReport() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[var(--color-bg)]">
      <Container size="prose">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4">
          Benefit report
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
          Annual Benefit Report
        </h1>

        <Hairline className="mb-10" />

        <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-[var(--color-body)]">
          <p>
            As a Public Benefit Corporation, VERA publishes an annual report on
            our contributions to independent AI safety research and our progress
            toward our stated public benefit.
          </p>

          <div className="rounded-lg border border-[var(--color-hairline)] bg-[var(--color-surface)] p-8 text-center">
            <p className="text-sm text-[var(--color-muted)]">
              Our first benefit report will be published at the end of our
              first fiscal year.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
