import { useEffect, useState } from 'react'
import { Menu, X, Github, Mail, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05070d]/85 backdrop-blur-md border-b border-[#1a2438]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-display text-sm md:text-base font-semibold tracking-wider text-[#eaf0fc]">
            AYUSHMAN<span className="text-[var(--cyan)]">.DEV</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                  active === link.id
                    ? 'text-[var(--cyan)] bg-[#00f0ff12]'
                    : 'text-[#6b7c96] hover:text-[#eaf0fc]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--cyan)] text-[#05070d] hover:bg-[#5ff7ff] transition-colors"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#1a2438] bg-[#0a0e18] text-[#eaf0fc]"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0a0e18] border-l border-[#1a2438] p-6 flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-sm text-[var(--cyan)]">MENU</span>
                <button type="button" onClick={close} aria-label="Close" className="text-[#6b7c96]">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={close}
                    className={`px-4 py-3 rounded-lg text-base ${
                      active === link.id
                        ? 'text-[var(--cyan)] bg-[#00f0ff12]'
                        : 'text-[#c8d4e8]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="mb-4 w-full text-center px-4 py-3 text-sm font-semibold rounded-lg bg-[var(--cyan)] text-[#05070d]"
              >
                Download Resume
              </a>
              <div className="flex gap-3 justify-center border-t border-[#1a2438] pt-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-[#6b7c96] hover:text-[var(--cyan)]">
                  <Github size={20} />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 text-[#6b7c96] hover:text-[var(--cyan)]">
                  <Mail size={20} />
                </a>
                <a href={profile.phoneHref} aria-label="Phone" className="p-2 text-[#6b7c96] hover:text-[var(--cyan)]">
                  <Phone size={20} />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
