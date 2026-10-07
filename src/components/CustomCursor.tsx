import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const allow = fine.matches && !reduce.matches
    setEnabled(allow)
    const onChange = () => setEnabled(fine.matches && !reduce.matches)
    fine.addEventListener("change", onChange)
    reduce.addEventListener("change", onChange)
    return () => {
      fine.removeEventListener("change", onChange)
      reduce.removeEventListener("change", onChange)
    }
  }, [])

  useEffect(() => {
    const node = cursorRef.current
    if (!enabled || !node) return

    document.documentElement.classList.add("has-custom-cursor")
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let frame = 0

    const onMove = (event: MouseEvent) => {
      x = event.clientX
      y = event.clientY
      const target = event.target
      const hot = target instanceof Element && Boolean(target.closest("a, button, summary, [data-cursor]"))
      node.classList.toggle("is-hot", hot)
    }

    const loop = () => {
      cx += (x - cx) * 0.28
      cy += (y - cy) * 0.28
      const hot = node.classList.contains("is-hot")
      const scale = hot ? 1.75 : 1
      node.style.transform = `translate3d(${cx}px, ${cy}px, 0) scale(${scale})`
      frame = window.requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    frame = window.requestAnimationFrame(loop)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", onMove)
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [enabled])

  if (!enabled) return null

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />
}
