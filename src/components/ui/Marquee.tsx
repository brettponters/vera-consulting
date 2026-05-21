"use client";

import { type ReactNode } from "react";

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
 * Desktop: infinite CSS marquee animation with 4 copies for seamless looping.
 */
export function Marquee({
  children,
  duration = 30,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
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
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
        <span className="hidden md:flex shrink-0">{children}</span>
      </div>
    </div>
  );
}
