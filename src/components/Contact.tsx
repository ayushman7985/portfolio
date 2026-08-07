import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Briefcase, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { profile } from '../data/content'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = (await res.json()) as { success?: string | boolean; message?: string }

      if (!res.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Failed to send message')
      }

      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.')
    }
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
              disabled={status === 'loading'}
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
              disabled={status === 'loading'}
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
              disabled={status === 'loading'}
            />
          </div>

          {status === 'success' && (
            <div className="flex items-start gap-2 text-sm text-[#00f0ff] font-mono">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              Message sent! It will arrive in {profile.email}.
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-start gap-2 text-sm text-[#ff6b9d] font-mono">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[var(--cyan)] text-[#05070d] font-semibold text-sm hover:bg-[#5ff7ff] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
