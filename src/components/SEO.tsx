import { useEffect } from 'react'
import { company } from '../data/company'

type Props = {
  title?: string
  description?: string
  path?: string
}

export default function SEO({
  title = company.seo.title,
  description = company.seo.description,
  path = '/',
}: Props) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)?.[1] || '')
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)?.[1] || '')
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    const origin = window.location.origin
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `${origin}${path}`
  }, [title, description, path])

  return null
}
