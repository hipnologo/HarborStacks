'use client'

import { NavBar } from "./landing/nav-bar"
import { HeroSection } from "./landing/hero-section"
import { FeaturesSection } from "./landing/features-section"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 mx-auto">
        <NavBar />
        <div className="grid gap-8 py-12 md:grid-cols-2 md:gap-12">
          <HeroSection />
          <FeaturesSection />
        </div>
      </div>
    </div>
  )
}