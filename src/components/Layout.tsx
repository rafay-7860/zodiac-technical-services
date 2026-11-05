import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const timer = window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
        return () => window.clearTimeout(timer)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-white text-black">
      <ScrollProgress />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
