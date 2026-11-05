import SEO from '../components/SEO'
import Contact from '../components/Contact'
import { company } from '../data/company'

export default function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact | ${company.name}`}
        description={`Contact Zodiac Cleaning Services in Dubai. Call ${company.phone} or email ${company.email}.`}
        path="/contact"
      />
      <section className="bg-black pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="section-label mb-4">GET IN TOUCH</p>
          <h1 className="display-heading max-w-3xl text-4xl md:text-6xl">
            LET&apos;S MAKE YOUR SPACE <span className="text-gold">SHINE.</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Reach the Zodiac team in Dubai for cleaning enquiries and quotes.
          </p>
        </div>
      </section>
      <Contact />
    </>
  )
}
