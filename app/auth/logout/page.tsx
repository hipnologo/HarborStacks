// app/auth/logout/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    document.cookie = 'auth_token=; Max-Age=0; path=/';
    router.push('/auth/login');
  }, [router]);

  return <p>Logging out...</p>;
}
