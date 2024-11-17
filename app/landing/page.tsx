// 'use client'

// import styles from './styles.module.css'
// import { Button } from "@/components/ui/button"
// import { useToast } from "@/hooks/use-toast"
// import { useRouter } from 'next/navigation'

// export default function LandingPage() {
//   const router = useRouter()
//   const { toast } = useToast()

//   const handleGetStarted = () => {
//     router.push('/dashboard')
//   }

//   return (
//     <div className={styles.heroSection}>
//       {/* Hero Section */}
//       <div className="container mx-auto px-4 py-24">
//         <div className="flex flex-col items-center text-center space-y-8">
//           <h1 className={`text-6xl font-bold tracking-tighter ${styles.gradientText}`}>
//             Welcome to HarborStacks
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl">
//             A modern platform for container orchestration and management. Build, deploy, and scale your applications with ease.
//           </p>
//           <div className="flex gap-4">
//             <Button 
//               size="lg" 
//               className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
//               onClick={handleGetStarted}
//             >
//               Get Started
//             </Button>
//             <Button 
//               size="lg" 
//               variant="outline"
//               className="h-12 px-8 text-lg hover:bg-primary/5"
//             >
//               Learn More
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Container Management",
//               description: "Easily manage and orchestrate your containers with our intuitive interface."
//             },
//             {
//               title: "Auto Scaling",
//               description: "Scale your applications automatically based on demand and usage patterns."
//             },
//             {
//               title: "Monitoring",
//               description: "Real-time monitoring and analytics for your container infrastructure."
//             }
//           ].map((feature, index) => (
//             <div key={index} className={styles.card}>
//               <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="container mx-auto px-4 py-24">
//         <div className={styles.ctaSection}>
//           <h2 className="text-3xl font-bold mb-6 text-center">Ready to Get Started?</h2>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
//             Join thousands of developers who are already using HarborStacks to manage their container infrastructure.
//           </p>
//           <div className="text-center">
//             <Button 
//               size="lg" 
//               className="h-12 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
//               onClick={handleGetStarted}
//             >
//               Start Free Trial
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Container, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Deploy Docker Stacks with Confidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              HarborStacks simplifies container orchestration. Deploy, manage, and scale your Docker Swarm stacks with just a few clicks.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Container,
                title: "One-Click Deployments",
                description: "Deploy complex Docker Swarm stacks with a single click. No command line required."
              },
              {
                icon: Zap,
                title: "Instant Scaling",
                description: "Scale your services up or down instantly to meet demand. Automatic load balancing included."
              },
              {
                icon: Shield,
                title: "Secure by Default",
                description: "Built-in security features with automatic SSL/TLS certificate management."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="relative group p-6 rounded-lg bg-background border transition-all hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="relative rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-background p-10 overflow-hidden">
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Modernize Your Container Infrastructure?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of developers who are already using HarborStacks to manage their Docker Swarm deployments.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}