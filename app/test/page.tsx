'use client'

import styles from './styles.module.css'
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function TestPage() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Success",
      description: "Your action was successful",
      variant: "default",
    })
  }

  return (
    <div className={styles.heroSection}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className={`text-6xl font-bold tracking-tighter ${styles.gradientText}`}>
            Welcome to HarborStacks
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A modern platform for container orchestration and management. Build, deploy, and scale your applications with ease.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={showToast}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-12 px-8 text-lg hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Container Management",
              description: "Easily manage and orchestrate your containers with our intuitive interface."
            },
            {
              title: "Auto Scaling",
              description: "Scale your applications automatically based on demand and usage patterns."
            },
            {
              title: "Monitoring",
              description: "Real-time monitoring and analytics for your container infrastructure."
            }
          ].map((feature, index) => (
            <div key={index} className={styles.card}>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className={styles.ctaSection}>
          <h2 className="text-3xl font-bold mb-6 text-center">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
            Join thousands of developers who are already using HarborStacks to manage their container infrastructure.
          </p>
          <div className="text-center">
            <Button 
              size="lg" 
              className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}