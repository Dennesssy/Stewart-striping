/**
 * Vercel KV (Redis) Configuration
 * Use for: session storage, rate limiting, caching
 */
import { kv } from '@vercel/kv';

// Rate limiting helper
export async function checkRateLimit(
  identifier: string,
  limit: number = 10,
  window: number = 60
): Promise<{ success: boolean; remaining: number }> {
  const key = `rate-limit:${identifier}`;
  const count = await kv.incr(key);
  
  if (count === 1) {
    await kv.expire(key, window);
  }
  
  return {
    success: count <= limit,
    remaining: Math.max(0, limit - count),
  };
}

// Cache helper
export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  const cached = await kv.get<T>(key);
  
  if (cached !== null) {
    return cached;
  }
  
  const data = await fetcher();
  await kv.set(key, data, { ex: ttl });
  return data;
}

// Session helper
export async function getSession(userId: string) {
  return await kv.get(`session:${userId}`);
}

export async function setSession(userId: string, data: any, ttl: number = 86400) {
  await kv.set(`session:${userId}`, data, { ex: ttl });
}

export async function deleteSession(userId: string) {
  await kv.del(`session:${userId}`);
}

export { kv };
