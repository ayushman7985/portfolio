import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">// experience</div>
        <h2 className="sec-title">Experience</h2>
      </motion.div>

      <div>
        {experience.map((job, i) => (
          <motion.div
            key={job.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 py-6 border-b border-[#141e2e] last:border-0"
          >
            <div className="flex flex-col items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_#00f0ff88] mt-1.5 shrink-0" />
              {i < experience.length - 1 && <span className="flex-1 w-px bg-[#1a2a40] mt-1.5" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap justify-between gap-2 mb-3">
                <h3 className="text-base font-semibold text-[#eaf0fc]">{job.role}</h3>
                <span className="font-mono text-xs text-[#4a5a70] whitespace-nowrap">{job.date}</span>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 40)} className="relative pl-5 text-sm text-[#7a8aa0] leading-relaxed">
                    <span className="absolute left-0 text-[var(--cyan)] opacity-50">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
