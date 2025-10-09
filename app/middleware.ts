import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only import Edge Config if it's configured
let edgeConfigGet: any;
try {
  const edgeConfig = require('@vercel/edge-config');
  edgeConfigGet = edgeConfig.get;
} catch (e) {
  // Edge Config not available
  edgeConfigGet = null;
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Only check Edge Config if it's available and configured
  if (edgeConfigGet && process.env.EDGE_CONFIG) {
    try {
      const maintenanceMode = await edgeConfigGet<boolean>('maintenanceMode');
      
      if (maintenanceMode && !request.nextUrl.pathname.startsWith('/api')) {
        // Redirect to maintenance page
        return NextResponse.rewrite(new URL('/app/maintenance', request.url));
      }
    } catch (error) {
      // If Edge Config fails, continue normally (don't block the site)
      console.log('Edge Config check failed:', error);
    }

    // Check feature flags for specific routes
    if (request.nextUrl.pathname.startsWith('/app/dashboard')) {
      try {
        const features = await edgeConfigGet<Record<string, boolean>>('features');
        
        // Example: Redirect to old dashboard if new one is disabled
        if (features && features.newDashboard === false) {
          return NextResponse.redirect(new URL('/app/dashboard-legacy', request.url));
        }
      } catch (error) {
        // Continue normally if feature flags unavailable
        console.log('Feature flags not available:', error);
      }
    }
  }

  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
