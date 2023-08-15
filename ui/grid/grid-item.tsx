import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const itemVariants = cva(
  'bg-white/5 flex justify-center items-center p-6 sm:p-8',
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
  className?: string
  asChild?: boolean
}

export function GridItem({ children, hoverable, className, asChild = false }: GridItemProps) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn(itemVariants({ hoverable }), className)}>
    {children}
  </Comp>
}
