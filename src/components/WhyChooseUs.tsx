import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { whyZodiac } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

const FEATURE_IMAGE =
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'

export default function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section id="why-zodiac" className="bg-black py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            label="WHY ZODIAC"
            title="THE DIFFERENCE IS IN THE DETAILS."
            highlight="DETAILS"
            light
          />
          <motion.div
            className="hidden overflow-hidden lg:block"
            initial={reduced ? false : { opacity: 0, scale: 1.05 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={FEATURE_IMAGE}
              alt="Illustrative clean architectural interior"
              className="aspect-[16/10] w-full object-cover opacity-90"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
          {whyZodiac.map((item, index) => (
            <motion.article
              key={item.id}
              className="bg-charcoal p-8 md:p-10"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="font-display text-4xl font-extrabold text-gold md:text-5xl">
                {item.id}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold tracking-wide">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
