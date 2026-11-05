import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { services } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = {
  limit?: number
  showNote?: boolean
}

export default function Services({ limit, showNote = true }: Props) {
  const reduced = useReducedMotion()
  const items = limit ? services.slice(0, limit) : services

  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="WHAT WE DO"
          title="PROFESSIONAL CLEANING. BEAUTIFULLY DONE."
          highlight="BEAUTIFULLY"
          description="Proposed service categories for Zodiac Cleaning Services. Details are editable and subject to verification by the business."
        />

        {showNote && (
          <p className="mt-4 text-sm text-muted">
            Service categories below are proposed placeholders pending business
            confirmation.
          </p>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service, index) => (
            <motion.article
              key={service.id}
              className="group overflow-hidden bg-white"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: reduced ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-gold text-black">
                  <Sparkles size={18} />
                </div>
                <span className="absolute bottom-4 right-4 font-display text-4xl font-extrabold text-white/90">
                  {service.number}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-heading text-lg font-bold tracking-wide text-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-black transition hover:text-gold-dark"
                >
                  LEARN MORE
                  <ArrowUpRight size={15} className="text-gold" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
