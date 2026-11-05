import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = {
  label: string
  title: string
  highlight?: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  light = false,
  align = 'left',
  className = '',
}: Props) {
  const reduced = useReducedMotion()
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      className={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="section-label mb-4">{label}</p>
      <div className="mb-5 h-px w-14 bg-gold" aria-hidden="true" />
      <h2
        className={`display-heading text-3xl sm:text-4xl md:text-5xl ${
          light ? 'text-white' : 'text-black'
        }`}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="text-gold">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/75' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
