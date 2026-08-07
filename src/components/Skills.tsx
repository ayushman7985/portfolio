import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/content'

const categories = [...new Set(skills.map((s) => s.category))]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline gap-3">
        <span className="text-sm font-medium text-[#eaf0fc]">{name}</span>
        <span className="font-mono text-xs text-[var(--cyan)]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#141e2e] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">// skills</div>
        <h2 className="sec-title">Technical Skills</h2>
      </motion.div>

      <div className="space-y-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: ci * 0.05 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#4a5a70] mb-4">
              {cat}
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {skills
                .filter((s) => s.category === cat)
                .map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.08} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
