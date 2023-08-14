import { ReactNode } from "react"

interface HeroProps {
  children: ReactNode
}

export function Hero({ children }: HeroProps) {
  return (
    <div className="bg-gray-900">
      {children}
    </div>
  )
}
