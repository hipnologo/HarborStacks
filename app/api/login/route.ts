import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { email } = await request.json()

    // Get the origin for redirect URL
    const origin = request.headers.get('origin')

    // Sign in with OTP (magic link)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          redirectTo: '/dashboard' // Store intended redirect destination
        }
      },
    })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    // Set session cookie
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      const response = NextResponse.json(
        { message: 'Check your email for the login link' },
        { status: 200 }
      )
      
      response.cookies.set('supabase-auth-token', session.access_token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      })

      return response
    }

    return NextResponse.json(
      { message: 'Check your email for the login link' },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
