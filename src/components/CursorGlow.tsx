import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 768px)')
    if (mqReduce.matches || mqMobile.matches) return

    const el = ref.current
    if (!el) return

    let raf = 0
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setVisible(true)
    }

    const onLeave = () => setVisible(false)

    const tick = () => {
      x += (targetX - x) * 0.15
      y += (targetY - y) * 0.15
      el.style.left = `${x}px`
      el.style.top = `${y}px`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="cursor-glow"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    />
  )
}
