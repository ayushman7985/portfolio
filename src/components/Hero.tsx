import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'
import { heroDesc, profile } from '../data/content'
import AnimatedCodeEditor from './AnimatedCodeEditor'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="absolute inset-0 cyber-grid pointer-events-none" aria-hidden />
      <div className="section-pad w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-[var(--cyan)] mb-5 flex items-center gap-2"
          >
            <span>&gt; init_ai_systems()</span>
            <span className="typing-cursor" aria-hidden />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,6vw,3.75rem)] font-bold leading-[1.1] text-[#eaf0fc] mb-3"
          >
            {profile.firstName}
            <br />
            <span className="neon-text">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg md:text-xl text-[#8898b0] mb-6 max-w-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="space-y-3 mb-8 max-w-lg text-[15px] text-[#7a8aa0] leading-relaxed"
          >
            {heroDesc.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--cyan)] text-[#05070d] font-semibold text-sm hover:bg-[#5ff7ff] transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#2a3650] text-[#c8d4e8] text-sm font-medium hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-colors"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#2a3650] text-[#c8d4e8] text-sm font-medium hover:border-[var(--magenta)] hover:text-[var(--magenta)] transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex justify-center lg:justify-end"
        >
          <AnimatedCodeEditor />
        </motion.div>
      </div>
    </section>
  )
}
