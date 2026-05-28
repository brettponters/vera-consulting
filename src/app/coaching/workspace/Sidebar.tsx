"use client";

import type { Scene } from "./types";

interface SidebarProps {
  scenes: Scene[];
  activeIdx: number;
  completedKeys: Set<string>;
  onSelect: (idx: number) => void;
}

/**
 * Left-rail "project files" list. Each scene reads as a file in a workspace.
 * Visual cues:
 *  - Active row gets a left accent bar + cream surface.
 *  - Completed rows show a faint terracotta dot (means: drafted earlier in
 *    the session).
 *  - In-flight rows show a small pulsing dot.
 */
export function Sidebar({
  scenes,
  activeIdx,
  completedKeys,
  onSelect,
}: SidebarProps) {
  // Group scenes by category, preserving order.
  const groups = scenes.reduce<Map<string, Array<{ scene: Scene; idx: number }>>>(
    (acc, scene, idx) => {
      const bucket = acc.get(scene.category) ?? [];
      bucket.push({ scene, idx });
      acc.set(scene.category, bucket);
      return acc;
    },
    new Map(),
  );

  return (
    <nav
      aria-label="Workspace files"
      className="flex flex-col gap-5 py-4 px-2.5 md:px-3"
    >
      <div className="px-2 pt-1 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <span className="font-mono text-[10.5px] text-[var(--color-muted)] tracking-wide">
          vera, oct 14
        </span>
      </div>

      {Array.from(groups.entries()).map(([category, entries]) => (
        <div key={category} className="space-y-1.5">
          <p className="px-2 font-sans text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-muted)]/80 font-semibold">
            {category}
          </p>
          <ul className="space-y-0.5 list-none m-0 p-0">
            {entries.map(({ scene, idx }) => {
              const isActive = idx === activeIdx;
              const isComplete = completedKeys.has(scene.key);
              return (
                <li key={scene.key}>
                  <button
                    type="button"
                    onClick={() => onSelect(idx)}
                    className={[
                      "group w-full text-left rounded-[5px] px-2 py-1.5 relative transition-colors duration-200",
                      isActive
                        ? "bg-[var(--color-surface)]"
                        : "hover:bg-[var(--color-surface)]/60",
                    ].join(" ")}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full bg-[var(--color-accent)]"
                      />
                    )}
                    <div className="flex items-center gap-2 pl-1.5">
                      <StatusDot active={isActive} complete={isComplete} />
                      <span
                        className={[
                          "font-sans text-[13px] font-medium leading-tight truncate",
                          isActive
                            ? "text-[var(--color-heading)]"
                            : "text-[var(--color-body)]/85 group-hover:text-[var(--color-heading)]",
                        ].join(" ")}
                      >
                        {scene.title}
                      </span>
                    </div>
                    <p
                      className={[
                        "pl-[1.375rem] font-mono text-[10.5px] truncate mt-0.5",
                        isActive
                          ? "text-[var(--color-muted)]"
                          : "text-[var(--color-muted)]/70",
                      ].join(" ")}
                    >
                      {scene.filename}
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div className="mt-auto px-2 pt-4 border-t border-[var(--color-hairline)]/80">
        <p className="font-mono text-[10px] text-[var(--color-muted)] leading-relaxed">
          5 files · 1 session
          <br />
          autosave on
        </p>
      </div>
    </nav>
  );
}

function StatusDot({
  active,
  complete,
}: {
  active: boolean;
  complete: boolean;
}) {
  if (active) {
    return (
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-[var(--color-accent)]" />
        <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-ping opacity-50" />
      </span>
    );
  }
  if (complete) {
    return (
      <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]/45" />
    );
  }
  return (
    <span className="inline-block h-2 w-2 rounded-full border border-[var(--color-hairline)]" />
  );
}
