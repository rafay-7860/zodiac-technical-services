import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { company } from '../data/company'
import { propertyTypes, serviceOptions } from '../data/services'
import { useReducedMotion } from '../hooks/useReducedMotion'

type FormState = {
  fullName: string
  email: string
  phone: string
  service: string
  propertyType: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  propertyType: '',
  message: '',
}

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address.'
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  if (!values.service) errors.service = 'Please select a service.'
  if (!values.propertyType) errors.propertyType = 'Please select a property type.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function Contact() {
  const reduced = useReducedMotion()
  const [values, setValues] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSubmitted(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length === 0) {
      setSubmitted(true)
    }
  }

  const fieldClass =
    'w-full border border-black/10 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-gold'

  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="CONTACT ZODIAC"
          title="LET'S MAKE YOUR SPACE SHINE."
          highlight="SHINE"
          className="mb-14"
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -20 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-lg font-bold tracking-wide text-black">
              {company.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Based in {company.location}. Reach out for cleaning enquiries and
              quotes.
            </p>

            <ul className="mt-10 space-y-6">
              <li>
                <a
                  href={company.phoneHref}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-black">
                    <Phone size={18} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-muted">
                      PHONE
                    </span>
                    <span className="mt-1 block text-base font-semibold text-black transition group-hover:text-gold-dark">
                      {company.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-black">
                    <Mail size={18} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-muted">
                      EMAIL
                    </span>
                    <span className="mt-1 block text-base font-semibold text-black transition group-hover:text-gold-dark">
                      {company.email}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gold text-black">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-[0.65rem] font-semibold tracking-[0.18em] text-muted">
                    ADDRESS
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-black">
                    {company.address}
                  </span>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-[0.7rem] font-semibold tracking-[0.16em] text-gold-dark underline-offset-4 hover:underline"
                  >
                    VIEW ON GOOGLE MAPS
                  </a>
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            noValidate
            className="bg-white p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  FULL NAME
                </label>
                <input
                  name="fullName"
                  value={values.fullName}
                  onChange={onChange}
                  className={`${fieldClass} ${errors.fullName ? 'border-red-500' : ''}`}
                  autoComplete="name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  className={`${fieldClass} ${errors.email ? 'border-red-500' : ''}`}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  PHONE NUMBER
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={onChange}
                  className={`${fieldClass} ${errors.phone ? 'border-red-500' : ''}`}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  CLEANING SERVICE REQUIRED
                </label>
                <select
                  name="service"
                  value={values.service}
                  onChange={onChange}
                  className={`${fieldClass} ${errors.service ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-600">{errors.service}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  PROPERTY TYPE
                </label>
                <select
                  name="propertyType"
                  value={values.propertyType}
                  onChange={onChange}
                  className={`${fieldClass} ${errors.propertyType ? 'border-red-500' : ''}`}
                >
                  <option value="">Select property type</option>
                  {propertyTypes.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className={`${fieldClass} resize-y ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                )}
              </div>
            </div>

            {submitted && (
              <div
                className="mt-5 border border-gold/40 bg-ivory px-4 py-3 text-sm text-black"
                role="status"
              >
                Form validated successfully. Email delivery is not configured
                yet — please contact us directly at{' '}
                <a className="font-semibold text-gold-dark" href={company.emailHref}>
                  {company.email}
                </a>{' '}
                or call{' '}
                <a className="font-semibold text-gold-dark" href={company.phoneHref}>
                  {company.phone}
                </a>
                .
              </div>
            )}

            <div className="mt-7">
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                SEND ENQUIRY
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
