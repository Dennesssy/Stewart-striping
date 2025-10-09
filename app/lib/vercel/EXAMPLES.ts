/**
 * Vercel Features - Quick Reference Examples
 * Copy-paste these into your code
 */

// ============================================
// 1. RATE LIMITING
// ============================================
import { checkRateLimit } from '@/lib/vercel';

// In API route:
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const { success, remaining } = await checkRateLimit(ip, 10, 60);
  
  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }
}

// ============================================
// 2. CACHING
// ============================================
import { getCached } from '@/lib/vercel';

// Cache expensive database queries:
const invoices = await getCached('user-invoices', async () => {
  return await prisma.invoice.findMany();
}, 3600); // 1 hour

// ============================================
// 3. FILE UPLOAD (Client)
// ============================================
'use client';

async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  });
  
  const { url } = await response.json();
  return url;
}

// ============================================
// 4. FILE UPLOAD (Server)
// ============================================
import { uploadInvoice, uploadAvatar } from '@/lib/vercel/blob';

// Upload invoice PDF:
const result = await uploadInvoice('invoice-123', pdfBuffer);
console.log(result.url); // https://...blob.vercel-storage.com/...

// Upload user avatar:
const avatar = await uploadAvatar('user-123', imageFile);

// ============================================
// 5. DIRECT SQL QUERIES
// ============================================
import { sql } from '@/lib/vercel/postgres';

// Simple query:
const invoices = await sql`
  SELECT * FROM invoices 
  WHERE user_id = ${userId}
  ORDER BY created_at DESC
`;

// With parameters:
const result = await sql`
  UPDATE invoices 
  SET status = ${status}
  WHERE id = ${id}
  RETURNING *
`;

// ============================================
// 6. FEATURE FLAGS
// ============================================
import { isFeatureEnabled } from '@/lib/vercel/edge-config';

// Check if feature is enabled:
if (await isFeatureEnabled('newDashboard')) {
  return <NewDashboard />;
}

// ============================================
// 7. SESSIONS (KV)
// ============================================
import { getSession, setSession, deleteSession } from '@/lib/vercel/kv';

// Store session:
await setSession('user-123', { 
  name: 'John', 
  role: 'admin' 
}, 86400); // 24 hours

// Get session:
const session = await getSession('user-123');

// Delete session:
await deleteSession('user-123');

// ============================================
// 8. ANALYTICS TRACKING
// ============================================
import { track } from '@vercel/analytics/server';

// Track custom events (server-side):
await track('invoice_created', {
  amount: 1000,
  userId: 'user-123',
});

// ============================================
// 9. CRON JOB EXAMPLE
// ============================================
// In app/api/cron/my-task/route.ts:
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Do your scheduled task here
  
  return NextResponse.json({ success: true });
}

// Then add to vercel.json:
// "crons": [
//   {
//     "path": "/api/cron/my-task",
//     "schedule": "0 9 * * *"  // Daily at 9 AM
//   }
// ]

// ============================================
// 10. LIST UPLOADED FILES
// ============================================
import { listFiles } from '@/lib/vercel/blob';

// List all invoices:
const { files } = await listFiles('invoices/');

// List all avatars:
const { files: avatars } = await listFiles('avatars/');

// ============================================
// 11. DELETE FILES
// ============================================
import { deleteFile } from '@/lib/vercel/blob';

await deleteFile('https://...blob.vercel-storage.com/file.pdf');

// ============================================
// 12. MAINTENANCE MODE
// ============================================
import { isMaintenanceMode } from '@/lib/vercel/edge-config';

// In middleware or layout:
if (await isMaintenanceMode()) {
  return <MaintenancePage />;
}

// ============================================
// CRON SCHEDULES REFERENCE
// ============================================
// "0 * * * *"      - Every hour
// "0 0 * * *"      - Daily at midnight
// "0 9 * * *"      - Daily at 9 AM
// "0 0 * * 0"      - Weekly on Sunday
// "0 0 1 * *"      - Monthly on 1st
// "*/15 * * * *"   - Every 15 minutes
// "0 */6 * * *"    - Every 6 hours
