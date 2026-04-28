/**
 * Design tokens — single source of truth for JS/TS consumers.
 * Tailwind reads the same values from globals.css @theme block.
 */
export const colors = {
  bg: {
    base: '#0a0a0a',
    subtle: '#111111',
  },
  fg: {
    base: '#ededed',
    muted: '#888888',
  },
  accent: {
    DEFAULT: '#e8693a',
  },
} as const;
