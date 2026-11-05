import { motion } from 'framer-motion'
import Button from './Button'
import { company } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

const CTA_IMAGE =
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80'

export default function CTA() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <img
        src={CTA_IMAGE}
        alt="Spotless luxury bedroom interior"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <motion.p
          className="section-label mb-5"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
        >
          LET&apos;S BEGIN
        </motion.p>
        <motion.h2
          className="display-heading text-4xl text-white sm:text-5xl md:text-6xl"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          READY FOR A <span className="text-gold">FRESH</span> START?
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-base text-white/80"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Get in touch with Zodiac Cleaning Services and tell us about your
          cleaning requirements.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button to="/contact" variant="primary">
            GET A QUOTE
          </Button>
          <Button href={company.phoneHref} variant="outline-light">
            CALL OUR TEAM
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
