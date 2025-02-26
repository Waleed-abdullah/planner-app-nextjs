import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

import { ABSOLUTE_ROUTES, UNPROTECTED_ROUTES } from '@/constants/routes';
import { serverEnv } from '@/env/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    serverEnv.SUPABASE_URL,
    serverEnv.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !UNPROTECTED_ROUTES.has(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = ABSOLUTE_ROUTES.ROOT;
    return NextResponse.redirect(url);
  } else if (
    user &&
    (request.nextUrl.pathname === ABSOLUTE_ROUTES.ROOT ||
      request.nextUrl.pathname === ABSOLUTE_ROUTES.SIGN_UP)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = ABSOLUTE_ROUTES.DASHBOARD;
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
