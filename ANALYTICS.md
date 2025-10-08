# Analytics Configuration

This document explains the analytics setup for the Stewart Striping website.

## Vercel Analytics

The project uses Vercel Analytics for tracking page views and performance metrics.

### Setup

1. **Automatic Setup on Vercel**
   - Analytics are automatically enabled via `vercel.json` configuration
   - No additional code changes required
   - Metrics are available in the Vercel dashboard

2. **Configuration**
   ```json
   {
     "analytics": {
       "enable": true
     }
   }
   ```

### Features

- **Web Vitals**: Track Core Web Vitals (LCP, FID, CLS)
- **Page Views**: Monitor page traffic
- **Geographic Data**: See where visitors are from
- **Device Types**: Desktop vs mobile usage
- **Performance**: Track page load times

### Accessing Analytics

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the Stewart-striping project
3. Navigate to the "Analytics" tab
4. View real-time and historical data

## Google Analytics (Optional)

If you want to add Google Analytics:

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```
4. Install the analytics package:
   ```bash
   npm install @vercel/analytics
   ```

## Privacy Considerations

- Vercel Analytics is privacy-friendly and GDPR compliant
- No cookies are used for tracking
- Data is aggregated and anonymous
- IP addresses are not stored

## Best Practices

1. Monitor Core Web Vitals regularly
2. Check analytics after deployments
3. Track conversion goals (contact form submissions)
4. Review geographic data to understand audience
5. Use insights to improve user experience

## Support

For issues with analytics:
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Vercel Support](https://vercel.com/support)
