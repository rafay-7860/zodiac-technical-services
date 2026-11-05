import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import Button from './Button'
import { company } from '../data/company'
import { useReducedMotion } from '../hooks/useReducedMotion'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !imageRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 8, ease: 'power1.out' },
      )
    })
    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-black pt-[88px]">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={HERO_IMAGE}
          alt="Bright premium interior representing a freshly cleaned modern space"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-20 md:px-8 md:pb-28">
        <motion.p
          className="mb-6 text-[0.7rem] font-semibold tracking-[0.28em] text-gold"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {company.name} | {company.city.toUpperCase()}, UAE
        </motion.p>

        <motion.h1
          className="display-heading max-w-4xl text-5xl text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          A <span className="text-gold">CLEANER</span>
          <br />
          SPACE.
          <br />
          A <span className="text-gold">BETTER</span>
          <br />
          EVERYDAY.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Professional cleaning solutions designed to make your spaces fresher,
          cleaner, and more welcoming.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Button to="/services" variant="primary">
            EXPLORE OUR SERVICES
          </Button>
          <Button to="/contact" variant="outline-light">
            GET A FREE QUOTE
          </Button>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-gold"
        aria-label="Scroll to about section"
      >
        <span className="text-[0.6rem] tracking-[0.25em]">SCROLL</span>
        <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  )
}
