const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}
