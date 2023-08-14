import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const pillVariants = cva(
  'leading-5 font-medium rounded-full hidden xl:flex items-center',
  {
    variants: {
      variant: {
        default: 'text-teal-500 bg-teal-400/10 hover:bg-teal-400/20',
      },
      size: {
        default: 'text-sm py-1 px-3', // TODO use height?
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface PillProps extends VariantProps<typeof pillVariants> {
  children: ReactNode
  className?: string
  asChild?: boolean
}

export function Pill({ children, variant, size, className, asChild = false }: PillProps) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className={cn(pillVariants({ variant, size, className }))}>
    {children}
  </Comp>
}
