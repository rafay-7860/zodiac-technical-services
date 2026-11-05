import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import WhyChooseUs from '../components/WhyChooseUs'
import CleaningProcess from '../components/CleaningProcess'
import CTA from '../components/CTA'
import Button from '../components/Button'
import { company } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

const IMAGE =
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80'

export default function AboutPage() {
  const reduced = useReducedMotion()

  return (
    <>
      <SEO
        title={`About Us | ${company.name}`}
        description={company.description}
        path="/about"
      />

      <section className="bg-ivory pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            label="ABOUT US"
            title="WE BELIEVE EVERY SPACE DESERVES TO SHINE."
            highlight="SHINE"
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img
              src={IMAGE}
              alt="Bright contemporary interior space"
              className="aspect-[5/4] w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.18em] text-gold">
              DUBAI, UAE
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight text-black md:text-4xl">
              {company.name}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              {company.description}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We focus on cleanliness, detail, and customer requirements —
              helping create environments that feel fresher and more welcoming.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CleaningProcess />
      <CTA />
    </>
  )
}
