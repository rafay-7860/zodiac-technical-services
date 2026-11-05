import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CleaningProcess from '../components/CleaningProcess'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import { company } from '../data/company'

export default function Home() {
  return (
    <>
      <SEO title={company.seo.title} description={company.seo.description} path="/" />
      <Hero />
      <About />
      <Services limit={6} />
      <WhyChooseUs />
      <CleaningProcess />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
