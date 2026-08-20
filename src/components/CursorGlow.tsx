import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

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
    let scrolling = false
    let scrollTimer = 0

    const render = (visible: boolean) => {
      el.style.opacity = visible && !scrolling ? '1' : '0'
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }

    const tick = () => {
      const dx = targetX - x
      const dy = targetY - y
      if (Math.abs(dx) < 0.15 && Math.abs(dy) < 0.15) {
        x = targetX
        y = targetY
        render(true)
        raf = 0
        return
      }
      x += dx * 0.18
      y += dy * 0.18
      render(true)
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onLeave = () => {
      el.style.opacity = '0'
    }

    const onScroll = () => {
      scrolling = true
      el.style.opacity = '0'
      window.clearTimeout(scrollTimer)
      scrollTimer = window.setTimeout(() => {
        scrolling = false
      }, 120)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      window.clearTimeout(scrollTimer)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden />
}
