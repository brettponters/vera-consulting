import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

export const metadata: Metadata = {
  title: "Charter",
  description:
    "VERA is a Public Benefit Corporation. A fixed share of revenue funds independent AI safety research. Read the charter.",
  alternates: { canonical: "/charter" },
  openGraph: {
    title: "VERA Charter, Public Benefit Corporation",
    description:
      "A fixed share of revenue funds independent AI safety research. Read the charter.",
    url: "https://veraconsulting.co/charter",
    type: "article",
    images: ["/opengraph-image"],
  },
};

export default function Charter() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[var(--color-bg)]">
      <Container size="prose">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4">
          Charter
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
          Public Benefit Corporation Charter
        </h1>

        <Hairline className="mb-10" />

        <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-[var(--color-body)]">
          <p>
            VERA is incorporated as a Public Benefit Corporation in the state of
            [State]. Our charter commits us to the following:
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            1. Purpose
          </h2>
          <p>
            To provide AI consulting services that are research-backed,
            transparent, and accountable, while generating a positive impact on
            the safety and reliability of AI systems in production.
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            2. Revenue commitment
          </h2>
          <p>
            A fixed percentage of net consulting revenue is committed annually to
            independent AI safety and alignment research organizations. This
            commitment is written into our corporate charter and cannot be
            removed by board action alone.
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            3. Transparency
          </h2>
          <p>
            We publish an annual benefit report detailing our contributions,
            the research we funded, and our progress toward our stated public
            benefit purpose.
          </p>

          <Hairline className="mt-10" />
          <p className="text-sm text-[var(--color-muted)]">
            This page will be updated with the full legal charter once
            incorporation is finalized.
          </p>
        </div>
      </Container>
    </section>
  );
}
