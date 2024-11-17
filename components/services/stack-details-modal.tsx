// 'use client'

// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { ArrowRight, Package } from 'lucide-react'
// import type { Service } from '@/lib/types/services'

// interface StackDetailsModalProps {
//   service: Service | null
//   onClose: () => void
//   onInstall: (service: Service) => void
// }

// export function StackDetailsModal({ service, onClose, onInstall }: StackDetailsModalProps) {
//   if (!service) return null

//   return (
//     <Dialog open={!!service} onOpenChange={onClose}>
//       <DialogContent className="sm:max-w-[600px]">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Package className="h-5 w-5" />
//             {service.name}
//           </DialogTitle>
//           <DialogDescription>
//             {service.description}
//           </DialogDescription>
//         </DialogHeader>

//         <div className="space-y-6">
//           <div>
//             <h4 className="text-sm font-semibold mb-2">Requirements</h4>
//             <div className="flex flex-wrap gap-2">
//               {service.requirements.map((req) => (
//                 <Badge key={req} variant="secondary">
//                   {req}
//                 </Badge>
//               ))}
//             </div>
//           </div>

//           {service.configSteps && (
//             <div>
//               <h4 className="text-sm font-semibold mb-2">Configuration Steps</h4>
//               <div className="space-y-2">
//                 {service.configSteps.map((step, index) => (
//                   <div key={index} className="p-3 rounded-lg bg-muted">
//                     <h5 className="font-medium">{step.title}</h5>
//                     {step.description && (
//                       <p className="text-sm text-muted-foreground mt-1">
//                         {step.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="flex justify-end gap-2">
//             <Button variant="outline" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button onClick={() => onInstall(service)}>
//               <span>Install Now</span>
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   )
// }

'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Service } from '@/lib/types/services'

interface StackDetailsModalProps {
  service: Service | null
  onClose: () => void
  onInstall: (service: Service) => void
}

export function StackDetailsModal({ service, onClose, onInstall }: StackDetailsModalProps) {
  if (!service) return null

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{service.name}</DialogTitle>
          <DialogDescription>{service.description}</DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Requirements</h3>
              <div className="flex flex-wrap gap-2">
                {service.requirements.map((req) => (
                  <Badge key={req} variant="secondary">
                    {req}
                  </Badge>
                ))}
              </div>
            </div>

            {service.documentation && (
              <div className="space-y-2">
                <h3 className="font-semibold">Documentation</h3>
                <div className="prose prose-sm dark:prose-invert">
                  {service.documentation}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onInstall(service)}>
            Install Stack
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}