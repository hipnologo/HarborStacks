import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  // Create supabase client with cookies
  const supabase = createRouteHandlerClient({ cookies });

  try {
    if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) {
        console.error('Error exchanging code for session:', error);
        return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=exchange_failed`);
      }
    }

    // Get the session after exchange
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      console.error('No session found');
      return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=no_session`);
    }

    // Redirect to dashboard
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`);

  } catch (error) {
    console.error('Unexpected error during auth callback:', error);
    return NextResponse.redirect(`${requestUrl.origin}/auth/login?error=unexpected`);
  }
}