import { useEffect, useState } from "react"
import { terminalLines } from "../config/assets"

export function TerminalFeed() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % terminalLines.length)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal-top">
        <span>TERAFAB // CONTROL</span>
        <span>ABSURDLY ONLINE</span>
      </div>
      <p className="terminal-line">{terminalLines[index]}</p>
    </div>
  )
}
