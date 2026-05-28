"use client";

/**
 * Public entry for the AI workspace demo on /coaching.
 *
 * The real implementation lives in ./workspace/ as a composition of
 * Sidebar + StreamingThread + CanvasFrame + per-artifact components.
 * This file exists only to preserve the import path used by page.tsx.
 */
export { Workspace as AIWorkspaceDemo } from "./workspace/Workspace";
