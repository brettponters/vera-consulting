"use client";

import { useEffect, useRef, useState } from "react";

interface TypingOptions {
  /** Median delay between characters (ms). */
  base?: number;
  /** Random jitter applied symmetrically around base (ms). */
  jitter?: number;
  /** Extra pause after each of these characters (ms). */
  punctuationPause?: number;
  /** Whether typing is currently active. */
  active: boolean;
  /** Fires once when typing completes. */
  onComplete?: () => void;
}

/**
 * Variable-cadence typing simulator.
 *
 * Real typing isn't a perfect 22ms interval. This adds:
 *  - per-character jitter (Gaussian-ish via two-uniform sum)
 *  - longer pauses after commas, periods, and line breaks
 *  - a small "thinking" pause about a third of the way through long prompts
 */
export function useTypingPrompt(
  fullText: string,
  options: TypingOptions
): { typed: string; isTyping: boolean } {
  const {
    base = 28,
    jitter = 22,
    punctuationPause = 180,
    active,
    onComplete,
  } = options;

  const [typed, setTyped] = useState("");
  const timerRef = useRef<number | null>(null);
  const indexRef = useRef(0);
  const onCompleteRef = useRef(onComplete);

  // Keep latest callback without retriggering effect.
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Reset when text changes or activity toggles off.
  useEffect(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    indexRef.current = 0;
    setTyped("");
    if (!active) return;

    const totalLen = fullText.length;
    // One soft "thinking" pause about 35% in, to feel like the user
    // hesitated mid-thought.
    const hesitateAt = Math.floor(totalLen * 0.35);

    const tick = () => {
      const i = indexRef.current;
      if (i >= totalLen) {
        timerRef.current = null;
        onCompleteRef.current?.();
        return;
      }

      const nextChar = fullText.charAt(i);
      indexRef.current = i + 1;
      setTyped(fullText.slice(0, i + 1));

      // Approximate Gaussian by averaging two uniforms.
      const noise = (Math.random() + Math.random() - 1) * jitter;
      let delay = base + noise;

      if (",;:".includes(nextChar)) delay += punctuationPause * 0.5;
      if (".!?".includes(nextChar)) delay += punctuationPause;
      if (nextChar === " " && fullText.charAt(i - 1) === ".") {
        delay += punctuationPause * 0.6;
      }
      if (i === hesitateAt) delay += 320;

      timerRef.current = window.setTimeout(tick, Math.max(12, delay));
    };

    timerRef.current = window.setTimeout(tick, 220);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [fullText, active, base, jitter, punctuationPause]);

  return {
    typed,
    isTyping: active && typed.length < fullText.length,
  };
}
