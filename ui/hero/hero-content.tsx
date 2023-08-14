import { ReactNode } from "react"

interface HeroContentProps {
  children: ReactNode
}

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {children}
    </div>
  )
}
