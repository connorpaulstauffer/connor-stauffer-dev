import { HeroSimple } from './components/hero-simple'
// import { Features } from './components/features'
import { FeaturesSimple } from './components/features-simple'
import { Pricing } from './components/pricing'
import { Faq } from './components/faq'
import { Footer } from './components/footer'

export default function Example() {
  return (
    <>
      <HeroSimple />
      {/* <Features /> */}
      <FeaturesSimple />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}
