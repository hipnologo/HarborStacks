// app/dashboard/layout.tsx
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto p-6 md:p-8 lg:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}