import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { processSteps } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function CleaningProcess() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="OUR PROCESS"
          title="A SIMPLE PROCESS. A FRESH RESULT."
          highlight="FRESH"
          align="center"
          className="mb-16"
        />

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-soft-grey md:left-0 md:right-0 md:top-10 md:bottom-auto md:h-px md:w-full"
            aria-hidden="true"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative pl-12 md:pl-0 md:pt-0"
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="absolute left-2.5 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold md:relative md:left-0 md:top-0 md:mb-8 md:h-10 md:w-10">
                  <span className="hidden font-display text-xs font-bold text-black md:inline">
                    {step.id}
                  </span>
                </div>
                <p className="mb-2 font-display text-sm font-extrabold text-gold md:hidden">
                  {step.id}
                </p>
                <h3 className="font-heading text-base font-bold tracking-wide text-black">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
