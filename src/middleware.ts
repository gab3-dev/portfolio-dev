import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: import('next/server').NextRequest) {
  console.log('[middleware] path:', request.nextUrl.pathname);
  const response = intlMiddleware(request);
  console.log('[middleware] response status:', response.status, 'location:', response.headers.get('location'));
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
