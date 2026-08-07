import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Briefcase, Send } from 'lucide-react'
import { profile } from '../data/content'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="sec-label">// contact</div>
        <h2 className="sec-title">Let's Connect</h2>
        <p className="text-[15px] text-[#7a8aa0] mb-10 max-w-xl leading-relaxed">
          Have a project in mind or want to discuss an opportunity? Reach out — I&apos;d love to
          hear from you.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {[
            { icon: MapPin, label: 'Location', value: profile.location },
            { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
            { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
            { icon: Briefcase, label: 'Availability', value: profile.availability },
          ].map((item) => {
            const Inner = (
              <>
                <div className="w-11 h-11 rounded-lg bg-[#141e2e] border border-[#1a2a40] flex items-center justify-center shrink-0 text-[#c8d4e8]">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#4a5a70] mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-[#eaf0fc] break-all">{item.value}</div>
                </div>
              </>
            )
            const className =
              'flex items-center gap-4 p-4 rounded-xl border border-[#1a2a40] bg-[#0c1220]/80 transition-colors'
            return item.href ? (
              <a key={item.label} href={item.href} className={`${className} hover:border-[#00f0ff55]`}>
                {Inner}
              </a>
            ) : (
              <div key={item.label} className={className}>
                {Inner}
              </div>
            )
          })}

          <div className="inline-flex items-center gap-2.5 mt-2 px-4 py-2.5 rounded-full border border-[#00f0ff44] font-mono text-sm text-[var(--cyan)]">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] status-pulse" />
            Open for opportunities
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="space-y-4 p-6 rounded-xl border border-[#1a2a40] bg-[#0c1220]/80"
        >
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-[#6b7c96] mb-2">
              Name
            </label>
            <input
              id="name"
              className="cyber-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-xs text-[#6b7c96] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="cyber-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs text-[#6b7c96] mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="cyber-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--cyan)] text-[#05070d] font-semibold text-sm hover:bg-[#5ff7ff] transition-colors"
          >
            <Send size={16} /> {sent ? 'Opening email…' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
