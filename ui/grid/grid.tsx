import { ReactNode } from "react"

interface GridProps {
  children: ReactNode
}

export function Grid({ children }: GridProps) {
  return <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
    {children}
  </div>
}
