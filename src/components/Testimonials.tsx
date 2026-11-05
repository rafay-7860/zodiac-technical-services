import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials, testimonialsEnabled } from '../data/testimonials'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Testimonials() {
  const reduced = useReducedMotion()
  const active = testimonials.filter((t) => t.active)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="TESTIMONIALS"
          title="WHAT OUR CLIENTS SAY."
          description={
            testimonialsEnabled && active.length > 0
              ? 'Feedback from customers who have worked with Zodiac Cleaning Services.'
              : 'Customer reviews will appear here once genuine feedback is supplied. Placeholder cards are ready to activate.'
          }
          align="center"
          className="mb-14"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {(testimonialsEnabled && active.length > 0 ? active : testimonials).map(
            (item, index) => (
              <motion.article
                key={item.id}
                className="border border-black/8 bg-ivory p-8"
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Quote className="mb-5 text-gold" size={28} />
                <p className="min-h-[5.5rem] text-sm leading-relaxed text-muted italic">
                  {item.quote}
                </p>
                <div className="mt-8 border-t border-black/8 pt-5">
                  <p className="font-heading text-sm font-semibold tracking-wide text-black">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-muted">
                    {item.role}
                  </p>
                </div>
                {!item.active && (
                  <p className="mt-4 text-[0.65rem] uppercase tracking-[0.16em] text-gold">
                    Placeholder — awaiting review
                  </p>
                )}
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
