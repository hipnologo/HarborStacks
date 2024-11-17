"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUIStore } from "@/lib/store";
import { 
  LayoutDashboard, 
  Layers, 
  Settings, 
  Monitor, 
  Menu,
  Ship
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Stacks",
    icon: Layers,
    href: "/dashboard/stacks",
  },
  {
    label: "Services",
    icon: Monitor,
    href: "/dashboard/services",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <div className={cn(
      "relative border-r pt-4 flex flex-col h-full bg-background",
      sidebarOpen ? "w-64" : "w-16"
    )}>
      <div className="px-4 mb-4 flex items-center justify-between">
        <div className={cn("flex items-center", !sidebarOpen && "justify-center w-full")}>
          <Ship className="h-8 w-8 text-primary" />
          {sidebarOpen && (
            <span className="ml-2 text-xl font-bold">Swarm UI</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={cn("hidden md:flex", !sidebarOpen && "absolute right-[-40px] top-4")}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="flex-1 w-full">
        <div className="space-y-2 p-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-medium px-3 py-2 rounded-lg hover:text-slate-600 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 dark:hover:text-slate-300 transition-all",
                pathname === route.href && "bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200"
              )}
            >
              <route.icon className={cn("h-5 w-5", !sidebarOpen && "mx-auto")} />
              {sidebarOpen && <span>{route.label}</span>}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}