"use client";

import { useRef, useState, useCallback } from "react";

/**
 * Dev-only floating button that toggles document.designMode.
 * Snapshots all text nodes before editing, diffs on save, writes back to source.
 */
export function EditMode() {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const beforeRef = useRef<{ el: Element; text: string }[]>([]);

  if (process.env.NODE_ENV !== "development") return null;

  const getLeafElements = useCallback(() => {
    const results: { el: Element; text: string }[] = [];
    const all = document.querySelectorAll(
      "main h1, main h2, main h3, main h4, main p, main li, main span, main a, main label, main td, footer p, footer a"
    );
    all.forEach((el) => {
      // Only leaf elements (no child elements with text)
      const hasChildElements = Array.from(el.children).some(
        (c) => c.textContent && c.textContent.trim().length > 3
      );
      const text = el.textContent?.trim() || "";
      if (!hasChildElements && text.length > 3) {
        results.push({ el, text });
      }
    });
    return results;
  }, []);

  const toggle = () => {
    const next = !editing;
    if (next) {
      // Snapshot before enabling edit mode
      beforeRef.current = getLeafElements();
      setStatus("");
    }
    document.designMode = next ? "on" : "off";
    setEditing(next);
  };

  const save = async () => {
    const changes: { oldText: string; newText: string }[] = [];

    for (const { el, text: oldText } of beforeRef.current) {
      try {
        const newText = el.textContent?.trim() || "";
        if (newText !== oldText && newText.length > 3) {
          changes.push({ oldText, newText });
        }
      } catch {
        // Element may have been removed from DOM
      }
    }

    if (changes.length === 0) {
      setStatus("No changes detected");
      setTimeout(() => setStatus(""), 2000);
      return;
    }

    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/edit-mode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ changes }),
      });
      const data = await res.json();
      if (data.ok) {
        const filesChanged = data.results.filter(
          (r: { files: string[] }) => r.files.length > 0
        ).length;
        setStatus(`Saved ${filesChanged} change${filesChanged !== 1 ? "s" : ""}`);
        // Re-snapshot
        beforeRef.current = getLeafElements();
      } else {
        setStatus("Save failed");
      }
    } catch {
      setStatus("Save failed");
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2">
      {status && (
        <span className="inline-flex items-center rounded-full bg-[#1a7f37] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
          {status}
        </span>
      )}

      {editing && (
        <button
          type="button"
          onClick={save}
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
        onClick={toggle}
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
