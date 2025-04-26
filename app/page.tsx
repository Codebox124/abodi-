import Header from "./components/header"
import Hero from "./components/hero"

import { FeaturesSection } from "./components/features"
import { HowItWorksSection } from "./components/how"
import { TestimonialsSection } from "./components/testimonial"
import { ProfessionShowcaseSection } from "./components/showcase"
import { UseCasesSection } from "./components/usecase"
import { OurStorySection } from "./components/ourstory"
import { FaqSection } from "./components/faq"
import { Footer } from "./components/fotter"

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ProfessionShowcaseSection />
      <UseCasesSection />
      <OurStorySection />
      <FaqSection />
      <Footer />
     
    </main>

  )
}
