interface HeroSubHeaderProps {
  children: string
}

export function HeroSubHeader({ children }: HeroSubHeaderProps) {
  return (
    <h1 className="mt-6 text-lg leading-8 text-center text-gray-300">
      {children}
    </h1>
  )
}
