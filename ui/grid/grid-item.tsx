import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

export interface GridItemProps {
  children: ReactNode
  asChild?: boolean
}

export function GridItem({ children, asChild = false }: GridItemProps) {
  const Comp = asChild ? Slot : 'div'

  return <Comp className="bg-white/5 p-8 sm:p-10 hover:bg-white/10">
    {children}
  </Comp>
}
