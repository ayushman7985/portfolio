import { useEffect, useMemo, useState } from 'react'
import { codeSnippets } from '../data/content'

type Token = {
  type: string
  text?: string
  plain?: string
}

function TokenSpan({ token }: { token: Token }) {
  if (token.type === 'newline') return <br />
  if (token.type === 'indent') return <span>{token.text}</span>
  if (token.type === 'comment') return <span className="code-comment">{token.text}</span>
  if (token.type === 'keyword') return <span className="code-keyword">{token.text}</span>
  if (token.type === 'fn') return <span className="code-fn">{token.text}</span>
  if (token.type === 'param') return <span className="code-param">{token.text}</span>
  if (token.type === 'type') return <span className="code-type">{token.text}</span>
  if (token.type === 'string') return <span className="code-string">{token.text}</span>
  return <span className="code-plain">{token.text}</span>
}

export default function AnimatedCodeEditor() {
  const [snippetIndex, setSnippetIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  const snippet = codeSnippets[snippetIndex]
  const flatTokens = useMemo(() => {
    const tokens: Token[] = []
    snippet.lines.forEach((line) => {
      tokens.push(line)
      if (line.plain) tokens.push({ type: 'plain', text: line.plain })
    })
    return tokens
  }, [snippet])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 768px)')
    const onChange = () => setReduceMotion(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(flatTokens.length)
      return
    }

    setVisibleCount(0)
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setVisibleCount(i)
      if (i >= flatTokens.length) {
        window.clearInterval(id)
        window.setTimeout(() => {
          setSnippetIndex((s) => (s + 1) % codeSnippets.length)
        }, 2200)
      }
    }, 45)

    return () => window.clearInterval(id)
  }, [flatTokens, reduceMotion, snippetIndex])

  const shown = flatTokens.slice(0, visibleCount)

  return (
    <div className="w-full min-w-0 max-w-md rounded-xl overflow-hidden border border-[#1a2438] bg-[#080c16] md:bg-[#080c16]/95 md:shadow-[0_0_40px_#00f0ff18]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a2438] bg-[#0a0e18]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-[#6b7c96] truncate">{snippet.filename}</span>
      </div>
      <pre className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed min-h-[180px] overflow-x-auto whitespace-pre-wrap break-words">
        <code>
          {shown.map((token, idx) => (
            <TokenSpan key={`${snippetIndex}-${idx}`} token={token} />
          ))}
          {!reduceMotion && visibleCount < flatTokens.length && (
            <span className="typing-cursor" aria-hidden />
          )}
        </code>
      </pre>
    </div>
  )
}
