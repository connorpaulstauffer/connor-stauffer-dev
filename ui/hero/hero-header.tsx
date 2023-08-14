interface HeroHeaderProps {
  children: string
}

export function HeroHeader({ children }: HeroHeaderProps) {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-white text-center sm:text-5xl">
      {children}
    </h1>
  )
}
