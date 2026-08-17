import { lazy, Suspense } from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useLiteMode } from './hooks/useLiteMode'

const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

export default function App() {
  const lite = useLiteMode()

  return (
    <div className="scanlines relative min-h-screen max-w-full overflow-x-clip">
      {!lite && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}
      {!lite && <CursorGlow />}
      <Navbar />
      <main className="relative z-10 min-w-0 max-w-full">
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
