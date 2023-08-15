import { ReactNode } from "react"

interface GridItemProps {
  children: ReactNode
}

export function GridItem({ children }: GridItemProps) {
  return <div className="bg-white/5 p-8 sm:p-10">
    {children}
    {/* <img
      className="max-h-12 w-full object-contain"
      src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
      alt="Transistor"
      width={158}
      height={48}
    /> */}
  </div>
}
