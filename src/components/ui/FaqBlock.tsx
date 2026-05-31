import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * FAQPage JSON-LD built from the same items the block renders, so the schema
 * and the visible copy never drift. Answer engines (ChatGPT, Perplexity, etc.)
 * extract this for "what is / how / who" queries.
 */
export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

interface FaqBlockProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  /** Tailwind bg class so the section can alternate against its neighbors. */
  bg?: string;
}

/**
 * VERA-styled FAQ section. Static (crawlable) Q/A list in the editorial
 * label-left / content-right layout used elsewhere on the site.
 */
export function FaqBlock({
  items,
  eyebrow = "Common questions",
  heading,
  bg = "bg-[var(--color-bg)]",
}: FaqBlockProps) {
  return (
    <section
      className={`py-16 md:py-24 border-t border-[var(--color-hairline)] ${bg}`}
      aria-label="Frequently asked questions"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 max-w-[1080px]">
          <div className="md:col-span-4">
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            {heading && (
              <h2
                className="font-sans font-semibold text-[var(--color-heading)] tracking-[-0.02em] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
              >
                {heading}
              </h2>
            )}
          </div>
          <dl className="md:col-span-8 m-0">
            {items.map((it, i) => (
              <div
                key={it.q}
                className={`py-6 ${i > 0 ? "border-t border-[var(--color-hairline)]" : ""}`}
              >
                <dt className="font-sans font-semibold text-lg md:text-xl text-[var(--color-heading)] tracking-[-0.01em] mb-3">
                  {it.q}
                </dt>
                <dd className="font-sans text-base leading-relaxed text-[var(--color-body)] max-w-[660px] m-0">
                  {it.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
