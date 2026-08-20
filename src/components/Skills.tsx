import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/content'

const categories = [...new Set(skills.map((s) => s.category))]

function SkillBar({
  name,
  level,
  delay,
  inView,
}: {
  name: string
  level: number
  delay: number
  inView: boolean
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline gap-3">
        <span className="text-sm font-medium text-[#eaf0fc]">{name}</span>
        <span className="font-mono text-xs text-[var(--cyan)]">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[#141e2e] overflow-hidden">
        <motion.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? level / 100 : 0 }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ cat }: { cat: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const items = skills.filter((s) => s.category === cat)

  return (
    <div ref={ref}>
      <h3 className="font-mono text-xs uppercase tracking-widest text-[#4a5a70] mb-4">
        {cat}
      </h3>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {items.map((s, i) => (
          <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.06} inView={inView} />
        ))}
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: ci * 0.04 }}
          >
            <SkillCategory cat={cat} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
