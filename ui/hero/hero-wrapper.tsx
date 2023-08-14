import { ReactNode } from "react"

interface HeroProps {
  children: ReactNode
}

export function HeroWrapper({ children }: HeroProps) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {children}
    </div>
  )
}
