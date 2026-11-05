/**
 * Placeholder testimonials only.
 * Replace with genuine customer reviews before activating this section publicly.
 */
export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  active: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    quote: '[Customer review placeholder — replace with a genuine client quote.]',
    name: '[Client Name]',
    role: '[Role / Location]',
    active: false,
  },
  {
    id: 'placeholder-2',
    quote: '[Customer review placeholder — replace with a genuine client quote.]',
    name: '[Client Name]',
    role: '[Role / Location]',
    active: false,
  },
  {
    id: 'placeholder-3',
    quote: '[Customer review placeholder — replace with a genuine client quote.]',
    name: '[Client Name]',
    role: '[Role / Location]',
    active: false,
  },
]

/** Set to true once genuine reviews are supplied and active: true. */
export const testimonialsEnabled = false
