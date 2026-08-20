import { useEffect, useMemo, useRef, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, ISourceOptions } from '@tsparticles/engine'

export default function ParticleBackground() {
  const [ready, setReady] = useState(false)
  const containerRef = useRef<Container | null>(null)

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

  useEffect(() => {
    if (!ready) return

    let resumeTimer = 0
    const onScroll = () => {
      containerRef.current?.pause()
      window.clearTimeout(resumeTimer)
      resumeTimer = window.setTimeout(() => {
        containerRef.current?.play()
      }, 180)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(resumeTimer)
    }
  }, [ready])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 30,
      detectRetina: false,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: {
          value: 22,
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
          speed: 0.45,
          direction: 'none',
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 1, max: 2.2 } },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: { enable: true },
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
      particlesLoaded={async (container) => {
        containerRef.current = container ?? null
      }}
    />
  )
}
