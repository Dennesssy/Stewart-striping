/**
 * Vercel Postgres Configuration
 * Alternative to Prisma for direct SQL queries and pooling
 */
import { sql } from '@vercel/postgres';

// Example: Get all invoices
export async function getInvoices() {
  try {
    const { rows } = await sql`
      SELECT * FROM invoices 
      ORDER BY created_at DESC
    `;
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Example: Get invoice by ID
export async function getInvoiceById(id: string) {
  try {
    const { rows } = await sql`
      SELECT * FROM invoices 
      WHERE id = ${id}
    `;
    return rows[0] || null;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Example: Create invoice
export async function createInvoice(data: {
  user_id: string;
  amount: number;
  status: string;
  due_date: Date;
}) {
  try {
    const dueDateStr = data.due_date.toISOString();
    const { rows } = await sql`
      INSERT INTO invoices (user_id, amount, status, due_date)
      VALUES (${data.user_id}, ${data.amount}, ${data.status}, ${dueDateStr})
      RETURNING *
    `;
    return rows[0];
  } catch (error) {
    console.error('Database insert error:', error);
    throw error;
  }
}

// Example: Update invoice status
export async function updateInvoiceStatus(id: string, status: string) {
  try {
    const { rows } = await sql`
      UPDATE invoices 
      SET status = ${status}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;
    return rows[0];
  } catch (error) {
    console.error('Database update error:', error);
    throw error;
  }
}

// Raw query helper
export async function query<T = any>(
  queryString: string,
  params: any[] = []
): Promise<T[]> {
  try {
    const { rows } = await sql.query(queryString, params);
    return rows as T[];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export { sql };
