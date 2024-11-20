'use client'

import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Anchor } from "lucide-react"

export function NavBar() {
  const { data: session } = useSession()

  return (
    <nav className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2">
        <Anchor className="w-8 h-8" />
        <span className="text-xl font-semibold">HarborStacks</span>
      </div>
      <div className="flex items-center gap-4">
        {session ? (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}