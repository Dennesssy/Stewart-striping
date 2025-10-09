# Edge Config Setup Guide

Your Edge Config is now connected! Here's how to use it:

## 📝 Add Configuration Values

Go to your Edge Config in Vercel Dashboard:
https://vercel.com/dennesssys-projects/stewart-striping/stores

Click on your Edge Config store, then add these items:

### Example Configuration:

```json
{
  "maintenanceMode": false,
  "features": {
    "newDashboard": true,
    "automatedInvoices": false,
    "aiChatbot": false
  },
  "greeting": "Welcome to Stewart Striping!",
  "pricing": {
    "basic": 99,
    "premium": 199,
    "enterprise": 499
  },
  "maxUploadSize": 5242880,
  "allowedFileTypes": ["pdf", "jpg", "png", "doc", "docx"]
}
```

## 🎯 How It's Being Used

### 1. Maintenance Mode
```typescript
// In middleware.ts - automatically redirects all traffic
const maintenanceMode = await get<boolean>('maintenanceMode');
if (maintenanceMode) {
  // Shows maintenance page to all users
}
```

**To enable maintenance:**
- Set `maintenanceMode` to `true` in Edge Config
- Changes take effect immediately (no redeploy needed!)

### 2. Feature Flags
```typescript
// Check if feature is enabled
const features = await get<Record<string, boolean>>('features');
if (features?.newDashboard) {
  return <NewDashboard />;
}
```

**Usage in your code:**
```typescript
import { isFeatureEnabled } from '@/lib/vercel/edge-config';

// In any component or API route
if (await isFeatureEnabled('aiChatbot')) {
  // Show AI chatbot feature
}
```

### 3. Dynamic Pricing
```typescript
import { getPricing } from '@/lib/vercel/edge-config';

const pricing = await getPricing();
// Returns: { basic: 99, premium: 199, enterprise: 499 }
```

## 🚀 Benefits

- ✅ **Instant updates** - No redeployment needed
- ✅ **A/B testing** - Toggle features for testing
- ✅ **Emergency switches** - Enable maintenance mode instantly
- ✅ **Global edge network** - Fast reads worldwide
- ✅ **Version control** - Track changes in Vercel dashboard

## 🛠️ Common Use Cases

### Enable Maintenance Mode
1. Go to Edge Config in Vercel
2. Set `maintenanceMode: true`
3. Save - site immediately shows maintenance page

### Test New Features
1. Add feature flag: `"newFeature": false`
2. Deploy code that checks the flag
3. Enable flag when ready: `"newFeature": true`
4. No code deployment needed!

### Dynamic Configuration
```typescript
// Get any config value
const maxSize = await get<number>('maxUploadSize');
const allowedTypes = await get<string[]>('allowedFileTypes');
```

## 📊 Monitoring

View Edge Config usage:
https://vercel.com/dennesssys-projects/stewart-striping/stores

Track:
- Read operations
- Response times
- Configuration history

## 🔒 Security

- Edge Config values are **public** (readable by client)
- Don't store secrets or API keys
- Use environment variables for sensitive data

## 💡 Pro Tips

1. **Use TypeScript types** - Prevents errors when reading config
2. **Set defaults** - Handle missing config gracefully
3. **Cache locally** - Reduce Edge Config reads if needed
4. **Document values** - Keep this file updated with schema

---

Your middleware is now set up and will automatically use Edge Config for maintenance mode and feature flags!
