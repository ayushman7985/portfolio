import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mqMobile = window.matchMedia('(max-width: 768px)')

    const update = () => {
      setEnabled(!mqReduce.matches)
    }

    update()
    mqReduce.addEventListener('change', update)
    mqMobile.addEventListener('change', update)

    return () => {
      mqReduce.removeEventListener('change', update)
      mqMobile.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [enabled])

  const options: ISourceOptions = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
    return {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: isMobile ? 28 : 55,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: ['#00f0ff', '#ff2bd6', '#7dd3fc'] },
        links: {
          enable: true,
          color: '#00f0ff',
          distance: 130,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.7,
          direction: 'none',
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.15, max: 0.5 } },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: {
          onHover: { enable: !isMobile, mode: 'grab' },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.35 } },
        },
      },
    }
  }, [])

  if (!enabled || !ready) return null

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={options}
    />
  )
}
