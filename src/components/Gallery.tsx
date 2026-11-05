import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../data/gallery'
import { useReducedMotion } from '../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (reduced || !sectionRef.current) return
    const images = sectionRef.current.querySelectorAll('[data-parallax]')
    const ctx = gsap.context(() => {
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={sectionRef} className="bg-soft-grey py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="SHOWCASE"
          title="FRESH SPACES. BETTER EXPERIENCES."
          highlight="BETTER"
          description="Illustrative cleaning imagery for atmosphere only — not verified Zodiac client projects."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {galleryImages.map((image, index) => {
            const span =
              index === 0 || index === 5
                ? 'md:col-span-7'
                : index === 1 || index === 4
                  ? 'md:col-span-5'
                  : 'md:col-span-6'

            return (
              <motion.figure
                key={image.id}
                className={`group relative overflow-hidden ${span} aspect-[16/11]`}
                initial={reduced ? false : { clipPath: 'inset(12% 12% 12% 12%)', opacity: 0 }}
                whileInView={
                  reduced
                    ? undefined
                    : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
                }
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  data-parallax
                  src={image.src}
                  alt={image.alt}
                  className="h-[120%] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
              </motion.figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
