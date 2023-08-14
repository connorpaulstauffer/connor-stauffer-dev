interface HeroLearnMoreProps {
  href: string
}

export function HeroLearnMore({ href }: HeroLearnMoreProps) {
  return <a href={href} className="text-sm font-semibold leading-6 text-white">
    Learn more <span aria-hidden="true">→</span>
  </a>
}
