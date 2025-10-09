/**
 * Cron Job: Database Cleanup
 * Runs daily at 2 AM
 */
import { NextResponse } from 'next/server';
import { sql } from '@/lib/vercel/postgres';
import { kv } from '@/lib/vercel/kv';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Clean up old sessions (older than 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Clean up expired data
    // TODO: Add actual cleanup logic based on your schema
    
    // Clean up old KV cache entries
    const pattern = 'cache:*';
    // Note: KV automatically handles expiration, but you can add custom cleanup here

    return NextResponse.json({
      success: true,
      cleaned: {
        sessions: 0,
        cache: 0,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Cleanup cron error:', error);
    return NextResponse.json(
      { error: 'Failed to cleanup' },
      { status: 500 }
    );
  }
}
