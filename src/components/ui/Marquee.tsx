"use client";

import { useEffect, useState, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop (desktop). Default: 30 */
  duration?: number;
  /** Pause animation on mouse hover (desktop). Default: true */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Mobile: horizontal swipe scroll (no animation, single copy of content).
 * Desktop: infinite CSS marquee animation. SSR renders ONE copy so crawlers
 * see the content once; additional visual duplicates are appended after
 * hydration to drive the seamless loop without inflating indexable HTML.
 */
export function Marquee({
  children,
  duration = 30,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clones = mounted ? Array.from({ length: 2 }) : [];

  return (
    <div
      className={`overflow-x-auto md:overflow-hidden scrollbar-hide ${className}`}
    >
      <div
        className={`flex w-max animate-marquee ${
          pauseOnHover ? "md:hover:[animation-play-state:paused]" : ""
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        <span className="flex shrink-0">{children}</span>
        {clones.map((_, i) => (
          <span
            key={i}
            className="hidden md:flex shrink-0"
            aria-hidden="true"
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}
