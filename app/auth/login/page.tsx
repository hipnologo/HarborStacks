'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

interface LoginForm {
  username: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const { register, handleSubmit } = useForm<LoginForm>()
  const [error, setError] = useState('')

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }
  
      const { token } = await res.json();
      document.cookie = `auth_token=${token}; path=/`;
  
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Login to HarborStacks</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register('username')}
                placeholder="Username"
                type="text"
                className="w-full"
              />
            </div>
            <div>
              <Input
                {...register('password')}
                placeholder="Password"
                type="password"
                className="w-full"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}