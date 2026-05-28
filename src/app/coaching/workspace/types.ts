import type { ReactNode } from "react";

export type ToolStep = {
  /** Short imperative phrase. Lowercase. No marketing voice. */
  label: string;
  /** Optional contextual detail rendered as a smaller line below. */
  detail?: string;
  /** Milliseconds to "complete" before next step starts. */
  duration: number;
};

export type Scene = {
  key: string;
  /** Sidebar category label (uppercase). */
  category: string;
  /** Sidebar entry title. */
  title: string;
  /** Filename rendered in the canvas chrome and on the sidebar row. */
  filename: string;
  /** The user prompt that types into the input. */
  prompt: string;
  /** Steps that animate in the right-hand activity rail. */
  steps: ToolStep[];
  /** Model identifier shown in the activity rail header. */
  model: string;
  /** Token count displayed once the artifact is ready. */
  tokens: number;
  /** Render time in seconds shown in the canvas chrome. */
  seconds: number;
  /** Artifact component rendered inside the canvas. */
  artifact: ReactNode;
};
