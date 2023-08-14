import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils'

const wrapperVariants = cva(
  'relative flex',
  {
    variants: {
      size: {
        default: 'h-2 w-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const pingVariants = cva(
  'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
  {
    variants: {
      variant: {
        default: 'bg-teal-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const dotVariants = cva(
  'relative inline-flex rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-teal-400',
      },
      size: {
        default: 'h-2 w-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface PingProps extends
  VariantProps<typeof wrapperVariants>,
  VariantProps<typeof pingVariants>,
  VariantProps<typeof dotVariants> {
  className?: string
}

export function Ping({ variant, size, className }: PingProps) {
  return <span className={cn(wrapperVariants({ size, className }))}>
    <span className={cn(pingVariants({ variant }))}></span>
    <span className={cn(dotVariants({ variant, size }))}></span>
  </span>
}
