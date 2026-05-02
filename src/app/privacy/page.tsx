import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";

export default function Privacy() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-[var(--color-bg)]">
      <Container size="prose">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4">
          Privacy
        </p>
        <h1 className="font-sans font-semibold text-3xl md:text-4xl tracking-[-0.02em] text-[var(--color-heading)] leading-tight mb-10">
          Privacy Policy
        </h1>

        <Hairline className="mb-10" />

        <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-[var(--color-body)]">
          <p>
            <strong className="text-[var(--color-heading)]">Last updated:</strong>{" "}
            April 2026
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            What we collect
          </h2>
          <p>
            When you contact us through our website, we collect the information
            you provide: your name, email address, company name, and message
            content. We use this information to respond to your inquiry.
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            What we don&apos;t do
          </h2>
          <p>
            We don&apos;t sell your data. We don&apos;t use tracking pixels. We
            don&apos;t run retargeting ads. We use basic analytics to understand
            how people use our site, and that&apos;s it.
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            Cookies
          </h2>
          <p>
            This site uses only essential cookies required for the site to
            function. No third-party advertising or tracking cookies.
          </p>

          <h2 className="font-semibold text-lg text-[var(--color-heading)] mt-4">
            Questions
          </h2>
          <p>
            If you have questions about this policy, email us at{" "}
            <a
              href="mailto:hello@vera.ai"
              className="text-[var(--color-accent)] underline underline-offset-4"
            >
              hello@vera.ai
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
