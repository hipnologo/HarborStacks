'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
        Deploy Docker services
        <span className="text-primary"> with ease</span>
      </h1>
      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Your one-stop solution for deploying and managing Docker services. Visual configuration, automated deployment, and powerful management features.
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link href="/dashboard">
          <Button size="lg" className="w-full min-[400px]:w-auto">
            Get Started
          </Button>
        </Link>
        <Link href="/dashboard/services">
          <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
            Browse Services
          </Button>
        </Link>
      </div>
    </div>
  )
}