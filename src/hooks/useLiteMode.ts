import { useEffect, useState } from 'react'

const LITE_QUERY = '(max-width: 768px), (prefers-reduced-motion: reduce)'

export function getLiteMode() {
  return typeof window !== 'undefined' && window.matchMedia(LITE_QUERY).matches
}

/** True on phones or when the user prefers reduced motion. */
export function useLiteMode() {
  const [lite, setLite] = useState(() => getLiteMode())

  useEffect(() => {
    const mq = window.matchMedia(LITE_QUERY)
    const update = () => setLite(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return lite
}
