import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { company } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80'

export default function About() {
  const reduced = useReducedMotion()

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative overflow-hidden"
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -left-3 top-6 z-10 h-24 w-1 bg-gold md:-left-4" />
          <div className="overflow-hidden">
            <img
              src={ABOUT_IMAGE}
              alt="Professional cleaning in a bright modern interior"
              className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 md:aspect-[5/6]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <div>
          <SectionHeading
            label="ABOUT ZODIAC"
            title="WE BELIEVE EVERY SPACE DESERVES TO SHINE."
            highlight="SHINE"
          />
          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {company.description}
          </motion.p>
          <motion.div
            className="mt-8"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={reduced ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.18em] text-black"
            >
              READ MORE
              <ArrowRight
                size={16}
                className="text-gold transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
