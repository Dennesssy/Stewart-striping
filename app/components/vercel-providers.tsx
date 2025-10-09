/**
 * Vercel Analytics & Speed Insights Provider
 * Add this to your root layout
 */
'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function VercelProviders() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
