// src/components/landing-page.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Anchor } from 'lucide-react';
import Link from "next/link";
import { useSession } from "next-auth/react";

export function LandingPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 mx-auto">
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
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/onboarding">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="grid gap-8 py-12 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
              Deploy Docker services
              <span className="text-primary"> with ease</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your one-stop solution for deploying and managing Docker services. Visual configuration, automated deployment, and powerful management features.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/onboarding">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="relative w-full max-w-lg">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <Database className="w-8 h-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Databases</h3>
                      <p className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Messaging</h3>
                      <p className="text-sm text-muted-foreground">RabbitMQ, Redis, Kafka</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Monitor className="w-8 h-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="font-semibold">Monitoring</h3>
                      <p className="text-sm text-muted-foreground">Prometheus, Grafana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}