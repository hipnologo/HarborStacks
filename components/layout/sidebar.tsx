"use client";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { useStore } from "@/lib/store";
// import { 
//   LayoutDashboard, 
//   Layers, 
//   Settings, 
//   Monitor, 
//   Menu,
//   Ship
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const routes = [
//   {
//     label: "Dashboard",
//     icon: LayoutDashboard,
//     href: "/dashboard",
//   },
//   {
//     label: "Stacks",
//     icon: Layers,
//     href: "/dashboard/stacks",
//   },
//   {
//     label: "Services",
//     icon: Monitor,
//     href: "/dashboard/services",
//   },
//   {
//     label: "Settings",
//     icon: Settings,
//     href: "/dashboard/settings",
//   },
// ];

// export function Sidebar() {
//   const pathname = usePathname();
//   const { sidebarOpen, setSidebarOpen } = useStore();

//   return (
//     <aside className="hidden border-r bg-background md:block md:w-sidebar">
//       <div className="flex h-full flex-col gap-4 p-6">

//       <div className={cn(
//         "relative border-r pt-4 flex flex-col h-full bg-background",
//         sidebarOpen ? "w-64" : "w-16"
//       )}>
//         <div className="px-4 mb-4 flex items-center justify-between">
//           <div className={cn("flex items-center", !sidebarOpen && "justify-center w-full")}>
//             <Ship className="h-8 w-8 text-primary" />
//             {sidebarOpen && (
//               <span className="ml-2 text-xl font-bold">Swarm UI</span>
//             )}
//           </div>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className={cn("hidden md:flex", !sidebarOpen && "absolute right-[-40px] top-4")}
//           >
//             <Menu className="h-6 w-6" />
//           </Button>
//         </div>
//         <ScrollArea className="flex-1 w-full">
//           <div className="space-y-2 p-2">
//             {routes.map((route) => (
//               <Link
//                 key={route.href}
//                 href={route.href}
//                 className={cn(
//                   "flex items-center gap-x-2 text-slate-500 text-sm font-medium px-3 py-2 rounded-lg hover:text-slate-600 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 dark:hover:text-slate-300 transition-all",
//                   pathname === route.href && "bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200"
//                 )}
//               >
//                 <route.icon className={cn("h-5 w-5", !sidebarOpen && "mx-auto")} />
//                 {sidebarOpen && <span>{route.label}</span>}
//               </Link>
//             ))}
//           </div>
//         </ScrollArea>
//       </div>
//       </div>
//     </aside>
//   );
// }

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Layers,
  Settings,
  Box
} from "lucide-react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Stacks",
    href: "/dashboard/stacks",
    icon: Layers
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: Box
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-[var(--header-height)] z-30 h-[calc(100vh-var(--header-height))] w-[var(--sidebar-width)] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="space-y-1 p-4">
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}