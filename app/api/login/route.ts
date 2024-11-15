// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Replace with real authentication logic
  if (username === 'admin' && password === 'password') {
    const token = 'your-token'; // Replace with real token generation
    return NextResponse.json({ token });
  }

  return NextResponse.json(
    { message: 'Invalid credentials' },
    { status: 401 }
  );
}
