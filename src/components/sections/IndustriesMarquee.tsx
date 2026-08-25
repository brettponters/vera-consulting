import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

const SERVICES = [
  "Deal sourcing",
  "Underwriting",
  "Buyer matching",
  "Market reads",
  "Off-market leads",
  "Motivated seller scoring",
  "ARV modeling",
  "Cash buyer list",
];

const OUTBOUND_SERVICES = [
  "Growth strategy",
  "Market selection",
  "Offer positioning",
  "Prospect research",
  "Outbound acquisition",
  "CRM follow-up",
  "Pipeline reporting",
  "Continuous optimization",
];

export default function IndustriesMarquee({ outbound = false }: { outbound?: boolean }) {
  const services = outbound ? OUTBOUND_SERVICES : SERVICES;
  return (
    <section
      className="mt-4 md:mt-10 py-6 md:py-10 border-t border-b border-[var(--color-hairline)]"
      aria-label="What we do"
    >
      <Container size="wide">
        <p className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4 md:hidden">
          What we do →
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <p
            className="font-sans font-medium text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] shrink-0 hidden md:block"
            aria-hidden="true"
          >
            What we do →
          </p>
          <Marquee duration={140} pauseOnHover reverse className="min-w-0">
            <span className="flex items-center whitespace-nowrap px-4 md:px-6">
              {services.map((service) => (
                <span key={service} className="flex items-center">
                  <span className="font-sans font-medium text-base md:text-lg text-[var(--color-body)]">
                    {service}
                  </span>
                  <span
                    className="mx-3 md:mx-4 text-[var(--color-accent)]"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                </span>
              ))}
            </span>
          </Marquee>
        </div>
      </Container>
    </section>
  );
}
