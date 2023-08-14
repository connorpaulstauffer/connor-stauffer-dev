import { Hero, Nav, HeroWrapper, HeroGrid, HeroCloud, HeroContent, HeroHeader, HeroSubHeader, HeroActions } from '@/ui/hero'
import { Button } from '@/ui/button'

const NAV_ITEMS = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export function HeroSimple() {
  return (
    <Hero>
      <Nav items={NAV_ITEMS} />
      <HeroWrapper>
        <HeroGrid />
        <HeroCloud />
        <HeroContent>
          <HeroHeader>
            Take on your most complex product challenges
          </HeroHeader>
          <HeroSubHeader>
            I&apos;m a Full Stack Engineer with a flexible contract model to suit any project size
          </HeroSubHeader>
          <HeroActions>
            <Button asChild>
              <a href="#">
                Work with me
              </a>
            </Button>
          </HeroActions>
        </HeroContent>
      </HeroWrapper>
    </Hero>
  )
}
