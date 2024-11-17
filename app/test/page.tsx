// app/test/page.tsx
'use client'

import '../../styles/globals.css'

export default function TestPage() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground p-8">
        <h1 className="text-4xl font-bold">Test Page</h1>
        <p className="mt-4 text-lg">
          This is a test page to check if Tailwind and ShadCN themes are working.
        </p>
        <button className="mt-6 rounded-lg bg-primary px-6 py-3 text-primary-foreground shadow-lg hover:bg-primary/90">
          Test Button
        </button>
      </div>
    );
  }
  