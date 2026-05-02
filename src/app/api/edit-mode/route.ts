import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Dev-only API route that finds and replaces text in source files.
 * Receives { oldText, newText } and does a recursive search/replace
 * across src/ to persist EditMode changes.
 */

const SRC_DIR = path.join(process.cwd(), "src");

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
    } else if (/\.(tsx?|ts|js|jsx)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      // Normalize HTML entities back to plain text for matching
      const normalized = content
        .replace(/&rsquo;/g, "\u2019")
        .replace(/&ldquo;/g, "\u201C")
        .replace(/&rdquo;/g, "\u201D")
        .replace(/&mdash;/g, "\u2014")
        .replace(/&ndash;/g, "\u2013")
        .replace(/&amp;/g, "&");

      if (normalized.includes(oldText)) {
        // Replace in the original content, handling entity variants
        let updated = content;
        // Try direct replacement first
        if (content.includes(oldText)) {
          updated = content.replace(oldText, newText);
        } else {
          // Replace in normalized form then write back
          updated = normalized.replace(oldText, newText);
        }
        fs.writeFileSync(fullPath, updated, "utf-8");
        results.push({
          file: path.relative(SRC_DIR, fullPath),
          replaced: true,
        });
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

  const allResults: { oldText: string; files: string[] }[] = [];

  for (const { oldText, newText } of changes) {
    if (!oldText || !newText || oldText === newText) continue;
    const results = searchAndReplace(SRC_DIR, oldText.trim(), newText.trim());
    const matched = results.filter((r) => r.replaced).map((r) => r.file);
    allResults.push({ oldText: oldText.slice(0, 50), files: matched });
  }

  return NextResponse.json({ ok: true, results: allResults });
}
