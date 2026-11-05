import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'
import Button from '../components/Button'
import { services } from '../data/services'
import { company } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function ServicesPage() {
  const reduced = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) {
      const t = window.setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
      return () => window.clearTimeout(t)
    }
  }, [location.hash])

  return (
    <>
      <SEO
        title={`Services | ${company.name}`}
        description="Explore proposed cleaning service categories from Zodiac Cleaning Services in Dubai, UAE."
        path="/services"
      />

      <section className="bg-black pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            label="WHAT WE DO"
            title="PROFESSIONAL CLEANING. BEAUTIFULLY DONE."
            highlight="BEAUTIFULLY"
            light
            description="Proposed service categories — editable and subject to verification by the business."
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-5 md:px-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="aspect-[16/11] w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-gold text-black">
                    <Sparkles size={18} />
                  </span>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="font-display text-4xl font-extrabold text-gold">
                  {service.number}
                </p>
                <h2 className="mt-3 font-heading text-2xl font-bold tracking-wide text-black md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                {service.placeholder && (
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-gold-dark">
                    Proposed category — pending business confirmation
                  </p>
                )}
                <div className="mt-8">
                  <Button to="/contact" variant="primary">
                    ENQUIRE ABOUT THIS SERVICE
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
