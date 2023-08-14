import { ReactNode } from "react"

interface HeroContentProps {
  children: ReactNode
  above?: ReactNode
}

export function HeroContent({ children, above }: HeroContentProps) {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {above}
      <div className="text-center">
        {children}
      </div>
    </div>
  )
}
