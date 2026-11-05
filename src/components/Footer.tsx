import { Link } from 'react-router-dom'
import { company, navigation } from '../data/company'
import { services } from '../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-display text-5xl font-extrabold tracking-tight text-white/10 sm:text-7xl md:text-8xl">
          ZODIAC
        </p>

        <div className="mt-10 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="/logo/zodiac-logo.png"
              alt="Zodiac Cleaning Services logo"
              className="mb-6 h-14 w-auto bg-transparent object-contain"
              width={180}
              height={56}
            />
            <p className="font-heading text-sm font-bold tracking-wide">
              {company.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              Professional cleaning solutions in Dubai, UAE — designed to make
              spaces fresher, cleaner, and more welcoming.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold">
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[0.7rem] font-semibold tracking-[0.2em] text-gold">
              CONTACT
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={company.phoneHref}
                  className="transition hover:text-gold"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="transition hover:text-gold"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
              <li>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold transition hover:text-gold-light"
                >
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="tracking-[0.12em] uppercase">{company.location}</p>
        </div>
      </div>
    </footer>
  )
}
