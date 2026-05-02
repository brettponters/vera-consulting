import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Dev-only API route that finds and replaces text in source files.
 * Receives { oldText, newText } and does a recursive search/replace
 * across src/ to persist EditMode changes.
 */

const SRC_DIR = path.join(process.cwd(), "src");

/** Collapse all whitespace (newlines, tabs, multiple spaces) into single space */
function collapseWS(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

/** Escape regex special chars */
function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build a regex that matches `text` with flexible whitespace —
 * each space in the collapsed text matches one-or-more whitespace chars in source.
 */
function flexiblePattern(text: string) {
  const collapsed = collapseWS(text);
  const parts = collapsed.split(" ").map(escapeRe);
  return new RegExp(parts.join("\\s+"), "s"); // 's' flag: dot matches newlines
}

/** Normalize HTML entities to their unicode equivalents */
function normalizeEntities(s: string) {
  return s
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&amp;/g, "&")
    .replace(/&middot;/g, "\u00B7")
    .replace(/&nbsp;/g, " ");
}

function searchAndReplace(
  dir: string,
  oldText: string,
  newText: string,
): { file: string; replaced: boolean }[] {
  const results: { file: string; replaced: boolean }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...searchAndReplace(fullPath, oldText, newText));
    } else if (/\.(tsx?|js|jsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const normalized = normalizeEntities(content);

      // Try exact match first
      if (content.includes(oldText)) {
        fs.writeFileSync(fullPath, content.replace(oldText, newText), "utf-8");
        results.push({ file: path.relative(SRC_DIR, fullPath), replaced: true });
        continue;
      }

      // Try exact match on entity-normalized content
      if (normalized.includes(oldText)) {
        fs.writeFileSync(fullPath, normalized.replace(oldText, newText), "utf-8");
        results.push({ file: path.relative(SRC_DIR, fullPath), replaced: true });
        continue;
      }

      // Try whitespace-flexible match (handles text spanning multiple lines)
      const pattern = flexiblePattern(oldText);
      if (pattern.test(normalized)) {
        const updated = normalized.replace(pattern, newText);
        fs.writeFileSync(fullPath, updated, "utf-8");
        results.push({ file: path.relative(SRC_DIR, fullPath), replaced: true });
        continue;
      }
    }
  }
  return results;
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Dev only" }, { status: 403 });
  }

  const { changes } = (await req.json()) as {
    changes: { oldText: string; newText: string }[];
  };

  if (!changes || !Array.isArray(changes)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  console.log(`[EditMode API] Received ${changes.length} changes`);
  const allResults: { oldText: string; files: string[] }[] = [];

  for (const { oldText, newText } of changes) {
    if (!oldText || !newText || oldText === newText) continue;
    console.log(`[EditMode API] Searching for: "${oldText.slice(0, 80)}"`);
    console.log(`[EditMode API] Replace with: "${newText.slice(0, 80)}"`);
    const results = searchAndReplace(SRC_DIR, oldText.trim(), newText.trim());
    const matched = results.filter((r) => r.replaced).map((r) => r.file);
    console.log(`[EditMode API] Matched files:`, matched.length > 0 ? matched : "NONE");
    allResults.push({ oldText: oldText.slice(0, 50), files: matched });
  }

  return NextResponse.json({ ok: true, results: allResults });
}
