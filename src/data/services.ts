/**
 * Proposed service categories — editable and subject to verification by the business.
 * Do not treat these as confirmed offerings until verified.
 */
export type Service = {
  id: string
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
  placeholder: boolean
}

export const services: Service[] = [
  {
    id: 'residential',
    number: '01',
    title: 'RESIDENTIAL CLEANING',
    description:
      'Thoughtful cleaning support for homes and living spaces, tailored to your requirements.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bright modern living room illustrating residential cleaning',
    placeholder: true,
  },
  {
    id: 'commercial',
    number: '02',
    title: 'COMMERCIAL CLEANING',
    description:
      'Professional cleaning for commercial environments focused on presentation and cleanliness.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern commercial interior illustrating commercial cleaning',
    placeholder: true,
  },
  {
    id: 'office',
    number: '03',
    title: 'OFFICE CLEANING',
    description:
      'Organised cleaning for office spaces designed to support a fresh and productive workplace.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clean contemporary office space',
    placeholder: true,
  },
  {
    id: 'deep',
    number: '04',
    title: 'DEEP CLEANING',
    description:
      'A more thorough clean for spaces that need detailed attention across rooms and surfaces.',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional cleaning work illustrating deep cleaning',
    placeholder: true,
  },
  {
    id: 'villa',
    number: '05',
    title: 'VILLA CLEANING',
    description:
      'Careful cleaning support for villa interiors with attention to comfort and detail.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luxury villa interior illustrating villa cleaning',
    placeholder: true,
  },
  {
    id: 'move',
    number: '06',
    title: 'MOVE-IN / MOVE-OUT CLEANING',
    description:
      'Cleaning support for transitions between properties, helping spaces feel ready for the next chapter.',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Empty bright apartment illustrating move-in move-out cleaning',
    placeholder: true,
  },
]

export const serviceOptions = services.map((s) => s.title)

export const propertyTypes = [
  'Apartment',
  'Villa',
  'Office',
  'Commercial Space',
  'Other',
] as const
