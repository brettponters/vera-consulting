'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { BRAND_NAME } from '@/config/brand';

const NAV = [
  { label: 'Work', href: '/work/coagent' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.06]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: 'rgba(250, 250, 247, var(--header-bg, 0))',
      }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundColor: '#fafaf7',
          opacity: bgOpacity,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-black"
        style={{ opacity: borderOpacity }}
      />
      <Container className="relative">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <Link
            href="/"
            className="group inline-flex items-baseline gap-3 font-display tracking-tight text-fg-base transition-colors duration-200 hover:text-accent"
          >
            <span className="text-base font-semibold md:text-lg">{BRAND_NAME}</span>
            <span aria-hidden className="hidden h-3 w-px bg-fg-muted/30 sm:block" />
            <span className="hidden text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors duration-200 group-hover:text-fg-base sm:inline">
              AI strategy consulting
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-7 md:gap-10">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </motion.header>
  );
}
