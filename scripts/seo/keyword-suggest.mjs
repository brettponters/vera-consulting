#!/usr/bin/env node
/**
 * Free keyword research via Google Autocomplete.
 *
 * Google's suggest endpoint returns the real phrases people type into the
 * search box. There is no API key and no cost. We expand each seed with the
 * alphabet and a set of intent modifiers (how, best, near me, ...) so a single
 * seed surfaces a wide tree of real long-tail queries, then rank suggestions by
 * how many expansions surfaced them (a rough popularity / breadth proxy).
 *
 * This is NOT search volume. It is demand-side language discovery: it tells you
 * what wording real searchers use, which is exactly what we target on-page.
 * Confirm absolute volume in Google Keyword Planner or a paid tool before
 * betting a page on a single head term.
 *
 * Usage:
 *   node scripts/seo/keyword-suggest.mjs "ai for real estate" "realtor ai tools"
 *   node scripts/seo/keyword-suggest.mjs --seeds scripts/seo/seeds.txt --out docs/seo/suggest.json
 *   node scripts/seo/keyword-suggest.mjs "chatgpt for realtors" --no-alpha   # modifiers only, faster
 */

const ENDPOINT = "https://suggestqueries.google.com/complete/search";
const LANG = "en";
const COUNTRY = "us";
const USER_AGENT = "Mozilla/5.0 (compatible; vera-seo-research/1.0)";

// Intent modifiers grouped so output can show why a query surfaced.
const MODIFIERS = {
  question: ["how to", "how do", "what is", "what are", "why", "can"],
  commercial: ["best", "top", "free", "cheap", "vs", "alternative to"],
  audience: ["for realtors", "for real estate agents", "for agents", "for brokers"],
  local: ["near me", "boca raton", "florida", "south florida"],
};
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const SLEEP_MS = 120; // polite throttle between requests
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Parse argv into { seeds, outPath, useAlpha }. */
function parseArgs(argv) {
  const args = argv.slice(2);
  const seeds = [];
  let outPath = null;
  let seedsFile = null;
  let useAlpha = true;

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--out") outPath = args[++i];
    else if (a === "--seeds") seedsFile = args[++i];
    else if (a === "--no-alpha") useAlpha = false;
    else seeds.push(a);
  }
  return { seeds, outPath, seedsFile, useAlpha };
}

/** Fetch raw autocomplete suggestions for a single query string. */
async function fetchSuggestions(query) {
  const url = `${ENDPOINT}?client=firefox&hl=${LANG}&gl=${COUNTRY}&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) return [];
    const data = await res.json();
    // Firefox client shape: [query, [suggestions...], ...]
    return Array.isArray(data?.[1]) ? data[1] : [];
  } catch {
    return [];
  }
}

/** Build the full expansion list for a seed. */
function expansionsFor(seed, useAlpha) {
  const out = [seed];
  for (const group of Object.values(MODIFIERS)) {
    for (const m of group) {
      // Prefix modifiers (how to X) and suffix modifiers (X for realtors).
      if (m.startsWith("for ") || m === "near me" || m.length <= 14) {
        out.push(`${seed} ${m}`);
      }
      if (["how to", "how do", "what is", "what are", "why", "can", "best", "top", "free", "cheap"].includes(m)) {
        out.push(`${m} ${seed}`);
      }
    }
  }
  if (useAlpha) for (const c of ALPHABET) out.push(`${seed} ${c}`);
  return [...new Set(out)];
}

async function main() {
  const { seeds, outPath, seedsFile, useAlpha } = parseArgs(process.argv);

  let allSeeds = [...seeds];
  if (seedsFile) {
    const fs = await import("node:fs/promises");
    const text = await fs.readFile(seedsFile, "utf8");
    allSeeds.push(...text.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")));
  }
  allSeeds = [...new Set(allSeeds)];

  if (allSeeds.length === 0) {
    console.error("No seeds. Pass seed phrases as args or --seeds <file>.");
    process.exit(1);
  }

  // suggestion -> { count, seeds:Set }
  const tally = new Map();
  let requests = 0;

  for (const seed of allSeeds) {
    const queries = expansionsFor(seed, useAlpha);
    process.stderr.write(`\nSeed "${seed}" → ${queries.length} expansions\n`);
    for (const q of queries) {
      const suggestions = await fetchSuggestions(q);
      requests++;
      for (const s of suggestions) {
        const key = s.toLowerCase().trim();
        if (!tally.has(key)) tally.set(key, { count: 0, seeds: new Set() });
        const entry = tally.get(key);
        entry.count++;
        entry.seeds.add(seed);
      }
      if (requests % 25 === 0) process.stderr.write(`  ${requests} requests, ${tally.size} unique\n`);
      await sleep(SLEEP_MS);
    }
  }

  const ranked = [...tally.entries()]
    .map(([phrase, { count, seeds }]) => ({ phrase, count, seeds: [...seeds] }))
    .sort((a, b) => b.count - a.count || a.phrase.localeCompare(b.phrase));

  process.stderr.write(`\nDone: ${requests} requests, ${ranked.length} unique suggestions.\n\n`);

  if (outPath) {
    const fs = await import("node:fs/promises");
    await fs.writeFile(outPath, JSON.stringify({ generatedFrom: allSeeds, count: ranked.length, suggestions: ranked }, null, 2));
    process.stderr.write(`Wrote ${outPath}\n`);
  }

  // Human-readable top list to stdout.
  for (const { phrase, count } of ranked.slice(0, 120)) {
    console.log(`${String(count).padStart(3)}  ${phrase}`);
  }
}

main();
