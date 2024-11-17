// app/dashboard/page.tsx
// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { StackGrid } from '@/components/services/stack-grid'
// import { StackDetailsModal } from '@/components/services/stack-details-modal'
// import { InstallationModal } from '@/components/installers/installation-modal'
// import { useInstallation } from '@/lib/context/installation'
// import { services } from '@/lib/data/services'
// import type { Service } from '@/lib/types/services'

// export default function DashboardPage() {
//   const { startInstallation } = useInstallation()
//   const [selectedService, setSelectedService] = useState<Service | null>(null)

//   const handleInstall = (service: Service) => {
//     setSelectedService(null)
//     startInstallation(service)
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="space-y-8"
//     >
//       <div>
//         <motion.h1
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//           className="text-4xl font-bold"
//         >
//           Available Stacks
//         </motion.h1>
//         <motion.p
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-muted-foreground"
//         >
//           Select a stack to deploy to your infrastructure
//         </motion.p>
//       </div>

//       <StackGrid
//         services={services}
//         onInstall={handleInstall}
//         onDetails={setSelectedService}
//       />

//       <StackDetailsModal
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//         onInstall={handleInstall}
//       />

//       <InstallationModal />
//     </motion.div>
//   )
// }

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { StackGrid } from '@/components/services/stack-grid'
import { StackDetailsModal } from '@/components/services/stack-details-modal'
import { InstallationModal } from '@/components/installers/installation-modal'
import { useInstallation } from '@/lib/context/installation'
import { services } from '@/lib/data/services'
import type { Service } from '@/lib/types/services'

export default function DashboardPage() {
  const { startInstallation } = useInstallation()
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleInstall = (service: Service) => {
    setSelectedService(null)
    startInstallation(service)
  }

  const handleReadMore = (service: Service) => {
    setSelectedService(service)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold">Available Stacks</h1>
        <p className="text-muted-foreground">
          Deploy and manage your container stacks
        </p>
      </div>

      <StackGrid
        services={services}
        onInstall={handleInstall}
        onDetails={handleReadMore}
      />

      <StackDetailsModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInstall={handleInstall}
      />

      <InstallationModal />
    </motion.div>
  )
}