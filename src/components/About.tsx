import { motion } from 'framer-motion'
import { aboutParagraphs, achievements, education, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">// about</div>
        <h2 className="sec-title">About Me</h2>
      </motion.div>

      <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start min-w-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto lg:mx-0"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[#00f0ff44]">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={192}
              height={192}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 text-[15px] text-[#8898b0] leading-relaxed w-full max-w-2xl min-w-0"
        >
          {aboutParagraphs.map((p, i) => (
            <p key={i}>
              {i === 0 ? (
                <>
                  Hello! I&apos;m{' '}
                  <strong className="text-[var(--cyan)] font-semibold">{profile.name}</strong>
                  {p.replace(`Hello! I'm ${profile.name}`, '')}
                </>
              ) : (
                p
              )}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <div className="sec-label">// education</div>
        <h3 className="font-display text-xl font-bold text-[#eaf0fc] mb-8">Education</h3>
        <div className="space-y-0">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 py-6 border-b border-[#141e2e] last:border-0"
            >
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_#00f0ff88] mt-1.5 shrink-0" />
                {i < education.length - 1 && <span className="flex-1 w-px bg-[#1a2a40] mt-1.5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between gap-2 mb-2">
                  <h4 className="text-base font-semibold text-[#eaf0fc]">{edu.school}</h4>
                  {'year' in edu && edu.year && (
                    <span className="font-mono text-xs text-[#4a5a70]">{edu.year}</span>
                  )}
                </div>
                {'degree' in edu && edu.degree && (
                  <p className="text-sm text-[#7a8aa0]">
                    {edu.degree} — <span className="text-[var(--cyan)] font-semibold">{edu.score}</span>
                  </p>
                )}
                {'entries' in edu && edu.entries && (
                  <ul className="space-y-2 mt-1">
                    {edu.entries.map((e) => (
                      <li key={e.label} className="flex flex-wrap justify-between gap-2 text-sm text-[#7a8aa0]">
                        <span>
                          {e.label} — <span className="text-[var(--cyan)] font-semibold">{e.score}</span>
                        </span>
                        <span className="font-mono text-xs text-[#4a5a70]">{e.year}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="sec-label">// achievements</div>
        <h3 className="font-display text-xl font-bold text-[#eaf0fc] mb-6">Achievements</h3>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a.slice(0, 32)} className="relative pl-5 text-sm text-[#7a8aa0] leading-relaxed">
              <span className="absolute left-0 text-[var(--cyan)] opacity-50">→</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
