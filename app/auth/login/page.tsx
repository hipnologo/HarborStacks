'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/lib/supabase'
import { Label } from '@/components/ui/label'

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type FormData = z.infer<typeof schema>

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    // Check auth status on mount and redirect if authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/dashboard');
      }
    };
    checkAuth();
  
    // Subscribe to auth changes
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.push('/dashboard');
      } else {
        router.push('/auth/login');
      }
    });
    
    return () => {
      subscription.data.subscription.unsubscribe(); // Correctly unsubscribe
    };
  }, [router]);    

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOtp({
        email: data.email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      toast({
        title: 'Success!',
        description: 'A magic link has been sent to your email. Please check your inbox and spam folder.',
        variant: 'default',
      })
    } catch (error: any) {
      toast({
        title: 'Login Failed',
        description: error?.message || 'Failed to send magic link. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGitHubLogin = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      toast({
        title: 'Redirecting...',
        description: 'You will be redirected to GitHub to complete the sign in process.',
        variant: 'default',
      })
    } catch (error: any) {
      toast({
        title: 'GitHub Login Failed',
        description: error?.message || 'Failed to sign in with GitHub. Please try again later.',
        variant: 'destructive',
      })
      setIsLoading(false)
    }
  }

  const handleAnonymousLogin = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInAnonymously();
      if (error) throw error;
  
      toast({
        title: 'Success!',
        description: 'Signed in as guest. Redirecting to dashboard...',
        variant: 'default',
      })
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Guest Login Failed',
        description: error?.message || 'Failed to sign in as guest. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <h1>HarborStacks</h1>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "This platform has transformed how we manage our infrastructure and deployments."
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    {...register('email')}
                    placeholder="name@example.com"
                    type="email"
                    className="w-full"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Sign in with Email'}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleAnonymousLogin}
                  disabled={isLoading}
                >
                  Continue as Guest
                </Button>

                <div className="w-full border-t my-2"></div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleGitHubLogin}
                  disabled={isLoading}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}