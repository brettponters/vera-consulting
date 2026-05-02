"use client";

import { useRef, useState, useCallback } from "react";

/**
 * Dev-only floating button that toggles document.designMode.
 * Snapshots all text nodes before editing, diffs on save, writes back to source.
 *
 * Key implementation details:
 * - Tags every leaf text element with data-edit-id before enabling designMode
 * - On save, re-queries the LIVE DOM by data-edit-id (element refs go stale under designMode)
 * - The control bar uses contentEditable=false so buttons stay clickable during designMode
 * - API uses whitespace-flexible matching because source text often spans multiple lines
 */
export function EditMode() {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const beforeRef = useRef<Map<string, string>>(new Map());

  if (process.env.NODE_ENV !== "development") return null;

  /** Find all leaf text elements, tag them with data-edit-id, return snapshot */
  const tagAndSnapshot = useCallback(() => {
    const snapshot = new Map<string, string>();
    let id = 0;
    const all = document.querySelectorAll(
      "main h1, main h2, main h3, main h4, main p, main li, main span, main a, main label, main td, main button, footer p, footer a, footer span"
    );
    all.forEach((el) => {
      // Skip elements that contain other text-bearing children
      const hasChildElements = Array.from(el.children).some(
        (c) => c.textContent && c.textContent.trim().length > 3
      );
      const text = el.textContent?.trim() || "";
      if (!hasChildElements && text.length > 3) {
        const editId = `edit-${id++}`;
        el.setAttribute("data-edit-id", editId);
        snapshot.set(editId, text);
      }
    });
    console.log(`[EditMode] Tagged ${snapshot.size} text elements`);
    return snapshot;
  }, []);

  const toggle = () => {
    const next = !editing;
    if (next) {
      // Tag elements BEFORE enabling designMode
      beforeRef.current = tagAndSnapshot();
      setStatus("");
    } else {
      // Turning off — clean up data-edit-id attributes
      document.querySelectorAll("[data-edit-id]").forEach((el) => {
        el.removeAttribute("data-edit-id");
      });
    }
    document.designMode = next ? "on" : "off";
    setEditing(next);
  };

  const save = async () => {
    const changes: { oldText: string; newText: string }[] = [];

    // Re-query LIVE DOM by data-edit-id to get current text
    for (const [editId, oldText] of beforeRef.current) {
      const el = document.querySelector(`[data-edit-id="${editId}"]`);
      if (!el) {
        console.log(`[EditMode] Element ${editId} not found in DOM`);
        continue;
      }
      const newText = el.textContent?.trim() || "";
      if (newText !== oldText && newText.length > 3) {
        console.log(`[EditMode] Change detected:`, {
          editId,
          old: oldText.slice(0, 60),
          new: newText.slice(0, 60),
        });
        changes.push({ oldText, newText });
      }
    }

    if (changes.length === 0) {
      console.log("[EditMode] No changes detected. Snapshot size:", beforeRef.current.size);
      // Log a few elements so we can debug
      let count = 0;
      for (const [editId, oldText] of beforeRef.current) {
        if (count++ >= 3) break;
        const el = document.querySelector(`[data-edit-id="${editId}"]`);
        console.log(`  ${editId}: found=${!!el}, old="${oldText.slice(0, 40)}", current="${el?.textContent?.trim().slice(0, 40)}"`);
      }
      setStatus("No changes detected");
      setTimeout(() => setStatus(""), 2000);
      return;
    }

    setSaving(true);
    setStatus(`Saving ${changes.length} change${changes.length !== 1 ? "s" : ""}…`);
    try {
      const res = await fetch("/api/edit-mode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ changes }),
      });
      const data = await res.json();
      console.log("[EditMode] API response:", data);
      if (data.ok) {
        const filesChanged = data.results.filter(
          (r: { files: string[] }) => r.files.length > 0
        ).length;
        if (filesChanged > 0) {
          setStatus(`Saved ${filesChanged} change${filesChanged !== 1 ? "s" : ""} — HMR will reload`);
        } else {
          setStatus(`Changes detected but no source files matched`);
          console.log("[EditMode] No files matched. Changes sent:", changes.map(c => ({
            old: c.oldText.slice(0, 60),
            new: c.newText.slice(0, 60),
          })));
        }
        // Re-snapshot
        beforeRef.current = tagAndSnapshot();
      } else {
        setStatus("Save failed");
      }
    } catch (err) {
      console.error("[EditMode] Save error:", err);
      setStatus("Save failed");
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    // contentEditable=false prevents designMode from making our buttons editable
    <div
      contentEditable={false}
      suppressContentEditableWarning
      className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2"
      style={{ userSelect: "none" }}
    >
      {status && (
        <span className="inline-flex items-center rounded-full bg-[#1a7f37] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          {status}
        </span>
      )}

      {editing && (
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            save();
          }}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-lg transition-all duration-150"
          style={{
            backgroundColor: saving ? "#888" : "#1a7f37",
            color: "#fff",
          }}
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      )}

      <button
        type="button"
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggle();
        }}
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-lg transition-all duration-150"
        style={{
          backgroundColor: editing ? "#C97B3F" : "#050507",
          color: "#fff",
        }}
      >
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ backgroundColor: editing ? "#fff" : "#C97B3F" }}
        />
        {editing ? "Editing" : "Edit mode"}
      </button>
    </div>
  );
}
