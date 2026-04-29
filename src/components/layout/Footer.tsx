import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { FOOTER } from '@/config/copy';

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-bg-deep py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="max-w-xl font-sans text-[15px] italic leading-[1.8] text-fg-muted">
              {FOOTER.colophon}
            </p>
            <p className="mt-10 font-display text-sm text-fg-base">
              {FOOTER.signature}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col gap-3 md:col-span-5 md:items-end"
          >
            {FOOTER.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm text-fg-base transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
