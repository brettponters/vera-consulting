"use client";

import { MotionConfig } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Turns motion off on phones. Sections already gate their entrance/scroll
 * animations (and the typewriter, the panel's scroll-resize) on
 * useReducedMotion(), so forcing reducedMotion="always" below the mobile
 * breakpoint disables those gimmicks there and renders everything in its
 * final, static state. Desktop keeps motion and still honors the user's OS
 * reduced-motion setting.
 */
export function MotionGuard({ children }: { children: ReactNode }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <MotionConfig reducedMotion={mobile ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
