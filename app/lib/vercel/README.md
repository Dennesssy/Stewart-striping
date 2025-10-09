# Vercel Features Integration

This package contains all Vercel platform features for Stewart Striping.

## 📦 What's Included

### 1. **Analytics & Performance**
- `@vercel/analytics` - Real user monitoring and page analytics
- `@vercel/speed-insights` - Core Web Vitals tracking

### 2. **Storage**
- **KV (Redis)** - Fast key-value storage for caching, sessions, rate limiting
- **Blob Storage** - File uploads (invoices, PDFs, images)
- **Postgres** - Serverless SQL database with connection pooling

### 3. **Edge Config**
- Feature flags
- A/B testing
- Dynamic configuration
- Maintenance mode

### 4. **Cron Jobs**
- Invoice reminders (daily at 9 AM)
- Analytics reports (weekly on Sundays)
- Database cleanup (daily at 2 AM)

## 🚀 Quick Start

### 1. Add Analytics to Root Layout

```tsx
// app/app/layout.tsx
import { VercelProviders } from '@/components/vercel-providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <VercelProviders />
      </body>
    </html>
  );
}
```

### 2. Use KV for Caching

```typescript
import { getCached, checkRateLimit } from '@/lib/vercel';

// Cache expensive queries
const data = await getCached('key', async () => {
  return await expensiveOperation();
}, 3600); // Cache for 1 hour

// Rate limit API routes
const { success, remaining } = await checkRateLimit(ip, 10, 60);
if (!success) {
  return new Response('Too many requests', { status: 429 });
}
```

### 3. Upload Files with Blob

```typescript
import { uploadFile, uploadInvoice } from '@/lib/vercel/blob';

// Upload invoice PDF
const result = await uploadInvoice(invoiceId, pdfBuffer);
console.log(result.url); // Public URL to the file
```

### 4. Direct SQL Queries

```typescript
import { sql } from '@/lib/vercel/postgres';

const invoices = await sql`
  SELECT * FROM invoices 
  WHERE user_id = ${userId}
  ORDER BY created_at DESC
`;
```

### 5. Feature Flags

```typescript
import { isFeatureEnabled } from '@/lib/vercel/edge-config';

if (await isFeatureEnabled('newDashboard')) {
  // Show new dashboard
}
```

## ⚙️ Environment Variables

Add these to your Vercel project settings:

```bash
# Required for all features
DATABASE_URL="postgres://..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="https://yoursite.com"

# Required for Cron Jobs
CRON_SECRET="random-secret-for-cron-auth"

# Auto-configured by Vercel (no need to set manually)
KV_REST_API_URL=
KV_REST_API_TOKEN=
BLOB_READ_WRITE_TOKEN=
POSTGRES_URL=
EDGE_CONFIG=
```

## 📝 Vercel Configuration

The `vercel.json` file includes:
- Cron job schedules
- Security headers
- Cache policies
- Redirects and rewrites

## 🔒 Security

### Rate Limiting Example

```typescript
import { checkRateLimit } from '@/lib/vercel/kv';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const { success } = await checkRateLimit(ip, 5, 60); // 5 requests per minute
  
  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }
  
  // Process request...
}
```

### Cron Authentication

All cron jobs require a `CRON_SECRET` in the Authorization header:

```typescript
if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

## 📊 Monitoring

After deployment:
1. Visit **Vercel Dashboard → Analytics** to see real user metrics
2. Check **Speed Insights** for Core Web Vitals
3. View **Logs** to monitor cron job execution
4. Access **KV** tab to inspect Redis data
5. Check **Blob** tab to manage uploaded files

## 🎯 Next Steps

1. **Enable Analytics**: Add `<VercelProviders />` to your root layout
2. **Configure Cron Secret**: Add `CRON_SECRET` to environment variables
3. **Set up KV**: Vercel will auto-provision, no setup needed
4. **Enable Blob**: Upload a file to auto-provision storage
5. **Test Locally**: Use Vercel CLI (`vercel dev`) to test integrations

## 📚 Documentation

- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Speed Insights](https://vercel.com/docs/speed-insights)
- [Vercel KV](https://vercel.com/docs/storage/vercel-kv)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Edge Config](https://vercel.com/docs/storage/edge-config)
