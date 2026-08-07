import { Github, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#141e2e] py-10 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#2a3a50] text-center sm:text-left">
          // built with intention · {profile.name.toLowerCase()} · 2026
        </p>
        <div className="flex gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-[#1a2a40] bg-[#0a0e18] flex items-center justify-center text-[#6b7c96] hover:text-[var(--cyan)] hover:border-[#00f0ff44] transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-9 h-9 rounded-lg border border-[#1a2a40] bg-[#0a0e18] flex items-center justify-center text-[#6b7c96] hover:text-[var(--cyan)] hover:border-[#00f0ff44] transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
