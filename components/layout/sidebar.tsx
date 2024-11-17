'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Ship, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { useStore } from '@/lib/store'
import { routes } from '@/lib/routes'

export function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useStore()

  return (
    <aside className={cn(
      "fixed left-0 top-[4rem] z-30 h-[calc(100vh-4rem)] w-[16rem] border-r bg-background transition-transform md:relative md:top-0",
      !sidebarOpen && "-translate-x-full md:translate-x-0 md:w-[4rem]"
    )}>
      <div className="flex h-full flex-col">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className={cn("flex items-center", !sidebarOpen && "justify-center w-full")}>
            <Ship className="h-8 w-8 text-primary" />
            {sidebarOpen && (
              <span className="ml-2 text-xl font-bold">HarborStacks</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn("hidden md:flex", !sidebarOpen && "absolute -right-10 top-4")}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === route.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                )}
              >
                <route.icon className={cn("h-5 w-5", !sidebarOpen && "mx-auto")} />
                {sidebarOpen && <span>{route.label}</span>}
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}