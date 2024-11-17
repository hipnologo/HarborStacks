import { LayoutDashboard, Package, Settings } from 'lucide-react'

export const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Services',
    icon: Package,
    href: '/dashboard/services',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
]