import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      if (!cancelled) setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 45,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: {
          value: 42,
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
          speed: 0.6,
          direction: 'none',
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.15, max: 0.5 } },
        size: { value: { min: 1, max: 2.5 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.35 } },
        },
      },
    }),
    [],
  )

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={options}
    />
  )
}
