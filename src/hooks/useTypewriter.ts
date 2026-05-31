import { useEffect, useState } from "react";

interface TypewriterOptions {
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  gapMs?: number;
}

/**
 * Cycles through phrases with a type-then-delete effect, returning the current
 * partial string. Pass a stable (module-level) phrases array so the effect
 * doesn't reset every render. When `active` is false it idles as an empty
 * string, so callers can disable it for reduced-motion or non-empty inputs.
 */
export function useTypewriter(
  phrases: string[],
  active: boolean,
  { typeMs = 55, deleteMs = 28, holdMs = 1600, gapMs = 380 }: TypewriterOptions = {},
): string {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!active || phrases.length === 0) {
      setText("");
      return;
    }
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let phraseIndex = 0;
    let pos = 0;
    let mode: "type" | "hold" | "delete" = "type";

    const step = () => {
      if (cancelled) return;
      const current = phrases[phraseIndex % phrases.length];
      if (mode === "type") {
        pos += 1;
        setText(current.slice(0, pos));
        if (pos >= current.length) {
          mode = "hold";
          timer = setTimeout(step, holdMs);
        } else {
          timer = setTimeout(step, typeMs);
        }
      } else if (mode === "hold") {
        mode = "delete";
        timer = setTimeout(step, deleteMs);
      } else {
        pos -= 1;
        setText(current.slice(0, Math.max(0, pos)));
        if (pos <= 0) {
          mode = "type";
          phraseIndex += 1;
          timer = setTimeout(step, gapMs);
        } else {
          timer = setTimeout(step, deleteMs);
        }
      }
    };

    timer = setTimeout(step, typeMs);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [active, phrases, typeMs, deleteMs, holdMs, gapMs]);

  return text;
}
