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

const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

export default function App() {
  return (
    <div className="scanlines relative min-h-screen">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
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
