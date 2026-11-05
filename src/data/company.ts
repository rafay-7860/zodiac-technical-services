export const company = {
  name: 'ZODIAC CLEANING SERVICES',
  shortName: 'Zodiac',
  tagline: 'A CLEANER SPACE. A BETTER EVERYDAY.',
  concept: 'WE MAKE CLEANLINESS LOOK EXTRAORDINARY.',
  phone: '+971 4 287 7295',
  phoneHref: 'tel:+97142877295',
  email: 'zodiacuae@gmail.com',
  emailHref: 'mailto:zodiacuae@gmail.com',
  address:
    'ST DIP 1 Ware-house 13 - Sheikh Mohammed Bin Zayed Rd - Dubai Investment Park First - Green Community Village - Dubai - United Arab Emirates',
  mapsUrl: 'https://maps.app.goo.gl/T8Z4PprRG35n651N8',
  location: 'Dubai, United Arab Emirates',
  city: 'Dubai',
  country: 'United Arab Emirates',
  description:
    'Zodiac Cleaning Services is based in Dubai, United Arab Emirates. We aim to provide a professional cleaning service experience with attention to cleanliness, detail, and customer requirements. Our goal is to help create cleaner, fresher, and more welcoming environments.',
  seo: {
    title: 'Zodiac Cleaning Services | Professional Cleaning in Dubai, UAE',
    description:
      'Contact Zodiac Cleaning Services in Dubai, UAE for cleaning enquiries. Explore business information, location, and contact details.',
  },
} as const

export const navigation = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'WHY ZODIAC', href: '/#why-zodiac' },
  { label: 'CONTACT', href: '/contact' },
] as const

export const processSteps = [
  {
    id: '01',
    title: 'GET IN TOUCH',
    description: 'Customers contact the Zodiac team.',
  },
  {
    id: '02',
    title: 'DISCUSS YOUR NEEDS',
    description: "Understand the customer's cleaning requirements.",
  },
  {
    id: '03',
    title: 'PLAN THE SERVICE',
    description: 'Arrange the service according to the agreed requirements.',
  },
  {
    id: '04',
    title: 'ENJOY A CLEANER SPACE',
    description: 'The customer receives the agreed cleaning service.',
  },
] as const

export const whyZodiac = [
  {
    id: '01',
    title: 'ATTENTION TO DETAIL',
    description: 'A thoughtful approach to cleaning and presentation.',
  },
  {
    id: '02',
    title: 'PROFESSIONAL APPROACH',
    description: 'A focus on organized and professional service.',
  },
  {
    id: '03',
    title: 'CUSTOMER FOCUS',
    description: 'Understanding individual cleaning requirements.',
  },
  {
    id: '04',
    title: 'CLEAN ENVIRONMENTS',
    description: 'Helping create fresh and welcoming spaces.',
  },
] as const
