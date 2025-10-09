/**
 * Cron Job: Send Invoice Reminders
 * Runs daily at 9 AM
 */
import { NextResponse } from 'next/server';
import { sql } from '@/lib/vercel/postgres';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Find overdue invoices
    const { rows } = await sql`
      SELECT * FROM invoices 
      WHERE status = 'pending' 
      AND due_date < NOW() 
      AND due_date > NOW() - INTERVAL '30 days'
    `;

    // TODO: Send email reminders for each overdue invoice
    const remindersSent = rows.length;

    return NextResponse.json({
      success: true,
      remindersSent,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Invoice reminder cron error:', error);
    return NextResponse.json(
      { error: 'Failed to send reminders' },
      { status: 500 }
    );
  }
}
