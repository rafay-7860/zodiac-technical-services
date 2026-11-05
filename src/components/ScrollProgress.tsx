import { useScrollProgress } from '../hooks/useScrollProgress'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  const reduced = useReducedMotion()

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gold"
        style={{
          transform: `scaleX(${progress})`,
          transition: reduced ? 'none' : 'transform 80ms linear',
        }}
      />
    </div>
  )
}
