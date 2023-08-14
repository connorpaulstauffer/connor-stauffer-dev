import { ReactNode } from "react"

interface HeroActionsProps {
  children: ReactNode
}

export function HeroActions({ children }: HeroActionsProps) {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      {children}
    </div>
  )
}
