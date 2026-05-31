/**
 * In-memory rate limiter shared by the personalize endpoints (profile + answer).
 * Per-instance only; back it with a durable store (Redis/Upstash) before heavy
 * traffic. The two endpoints share one budget, so a "session" (one profile call
 * plus one answer call) counts as two hits against the per-IP daily cap.
 */

const PER_IP_PER_DAY = 30;
const PER_IP_COOLDOWN_MS = 2500;
const GLOBAL_PER_DAY = 800;
const DAY_MS = 86_400_000;

export const MAX_NAME_LEN = 80;
export const MIN_NAME_LEN = 2;

const ipHits = new Map<string, number[]>();
let globalHits: number[] = [];

export function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  );
}

export function rateLimit(
  ip: string,
  { cooldown = true }: { cooldown?: boolean } = {},
): { ok: boolean; reason?: string } {
  const now = Date.now();
  globalHits = globalHits.filter((t) => now - t < DAY_MS);
  if (globalHits.length >= GLOBAL_PER_DAY) return { ok: false, reason: "busy" };
  const hits = (ipHits.get(ip) ?? []).filter((t) => now - t < DAY_MS);
  if (hits.length >= PER_IP_PER_DAY) return { ok: false, reason: "daily" };
  if (cooldown && hits.length && now - hits[hits.length - 1] < PER_IP_COOLDOWN_MS) {
    return { ok: false, reason: "slow" };
  }
  hits.push(now);
  ipHits.set(ip, hits);
  globalHits.push(now);
  return { ok: true };
}
