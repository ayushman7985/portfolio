import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">// projects</div>
        <h2 className="sec-title">Things I've Built</h2>
        <p className="text-[15px] text-[#7a8aa0] mb-10 max-w-xl leading-relaxed">
          A selection of backend systems, full-stack apps, and machine learning projects — from
          multi-tenant APIs and task management to AI-powered games.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 min-w-0">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative p-6 rounded-xl border border-[#1a2a40] bg-[#0c1220] transition-[border-color,transform] duration-300 hover:border-[#00f0ff55] md:hover:-translate-y-1"
          >
            <div className="flex justify-between items-start gap-3 mb-3">
              <h3 className="text-base font-semibold text-[#eaf0fc] group-hover:text-[var(--cyan)] transition-colors break-words">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-[#4a5a70] bg-[#1a2a40] px-2.5 py-1 rounded shrink-0">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-[#7a8aa0] leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-[var(--cyan)] bg-[#00f0ff12] border border-[#00f0ff30] px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#5a7090] hover:text-[var(--cyan)] transition-colors"
              >
                <Github size={14} /> GitHub
              </a>
              {'live' in project && project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#5a7090] hover:text-[var(--cyan)] transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
