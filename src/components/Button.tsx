import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

/* Shared button styles for links and native buttons */


type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsAnchor = CommonProps & {
  href: string
  to?: undefined
  target?: string
  rel?: string
}

type ButtonAsLink = CommonProps & {
  to: string
  href?: undefined
}

type Props = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-black hover:bg-gold-dark shadow-[0_10px_30px_rgba(242,184,0,0.25)]',
  secondary:
    'bg-black text-white hover:bg-charcoal border border-black',
  ghost:
    'bg-transparent text-black border border-black/15 hover:border-gold hover:text-black',
  'outline-light':
    'bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold',
}

export default function Button(props: Props) {
  const { children, variant = 'primary', className = '' } = props
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

  const classes = `${base} ${variants[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
