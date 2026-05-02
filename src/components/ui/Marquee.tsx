"use client";

import { type ReactNode } from "react";

interface MarqueeProps {
  /** Content to scroll. Will be duplicated for seamless looping. */
  children: ReactNode;
  /** Seconds for one full loop. Default: 30 */
  duration?: number;
  /** Pause animation on mouse hover. Default: true */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Infinite horizontal scroll strip via CSS animation.
 * Renders 4 copies of children for seamless looping on wide screens.
 * Uses translate3d for GPU-accelerated rendering on mobile Safari.
 */
export function Marquee({
  children,
  duration = 30,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
    >
      <div
        className={`flex w-max animate-marquee ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <span className="flex shrink-0">{children}</span>
        <span className="flex shrink-0">{children}</span>
        <span className="flex shrink-0">{children}</span>
        <span className="flex shrink-0">{children}</span>
      </div>
    </div>
  );
}
