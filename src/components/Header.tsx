import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navigation } from '../data/company'
import Button from './Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,0.08)] backdrop-blur-md'
          : 'bg-ivory/95 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8 lg:h-[88px]">
        <Link
          to="/"
          className="relative flex shrink-0 items-center bg-transparent"
          aria-label={`${company.name} home`}
        >
          <img
            src="/logo/zodiac-logo.png"
            alt="Zodiac Cleaning Services logo"
            className="h-12 w-auto object-contain md:h-14"
            width={200}
            height={56}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) => {
                const hashLink = item.href.includes('#')
                const active = hashLink ? false : isActive
                return `gold-underline text-[0.7rem] font-semibold tracking-[0.18em] text-black transition-colors${
                  active ? ' is-active' : ''
                }`
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary">
            GET A QUOTE
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-black/10 text-black lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-x-0 top-[78px] bottom-0 z-40 bg-white lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <nav
              className="flex h-full flex-col gap-2 px-6 py-8"
              aria-label="Mobile"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={item.href}
                    className="block border-b border-black/5 py-4 text-sm font-semibold tracking-[0.16em] text-black"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-8">
                <Button to="/contact" variant="primary" className="w-full">
                  GET A QUOTE
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
