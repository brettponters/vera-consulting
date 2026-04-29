/**
 * Design tokens — single source of truth for JS/TS consumers.
 * Tailwind reads the same values from globals.css @theme block.
 */
export const colors = {
  bg: {
    base: '#fafaf7',
    subtle: '#f3f0e9',
    deep: '#ece7dc',
    elevated: '#ffffff',
  },
  fg: {
    base: '#1a1815',
    muted: '#6b665e',
  },
  accent: {
    DEFAULT: '#c8552a',
  },
} as const;
