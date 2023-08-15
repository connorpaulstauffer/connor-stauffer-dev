import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const itemVariants = cva(
  'bg-white/5 p-8 sm:p-10',
  {
    variants: {
      hoverable: {
        true: 'hover:bg-white/10',
      },
    },
    defaultVariants: {
      hoverable: false
    },
  }
)

export interface GridItemProps extends VariantProps<typeof itemVariants> {
  children: ReactNode
  asChild?: boolean
}

export function GridItem({ children, hoverable, asChild = false }: GridItemProps) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn(itemVariants({ hoverable }))}>
    {children}
  </Comp>
}
