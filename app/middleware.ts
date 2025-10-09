import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { get } from '@vercel/edge-config';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Check maintenance mode from Edge Config
  try {
    const maintenanceMode = await get<boolean>('maintenanceMode');
    
    if (maintenanceMode && !request.nextUrl.pathname.startsWith('/api')) {
      // Redirect to maintenance page (you can create this page)
      return NextResponse.rewrite(new URL('/maintenance', request.url));
    }
  } catch (error) {
    // If Edge Config is not set up, continue normally
    console.log('Edge Config not available:', error);
  }

  // Check feature flags for specific routes
  if (request.nextUrl.pathname.startsWith('/app/dashboard')) {
    try {
      const features = await get<Record<string, boolean>>('features');
      
      // Example: Redirect to old dashboard if new one is disabled
      if (features && !features.newDashboard) {
        return NextResponse.redirect(new URL('/app/dashboard-legacy', request.url));
      }
    } catch (error) {
      console.log('Feature flags not available:', error);
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
