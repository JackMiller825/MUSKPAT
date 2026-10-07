import type { PointerEvent } from "react"
import { assets } from "../config/assets"

export function FactoryCore() {
  function onMove(event: PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    event.currentTarget.style.setProperty("--mx", `${x}%`)
    event.currentTarget.style.setProperty("--my", `${y}%`)
  }

  return (
    <section className="core" onPointerMove={onMove} aria-labelledby="core-title">
      <div className="core-frame">
        <img
          src={assets.factoryCore}
          alt="Glowing TERAFAB reactor core inside the factory"
          width={1200}
          height={960}
        />
      </div>
      <h2 id="core-title">THE TERAFAB CORE</h2>
      <p className="equation">
        <span>COMPUTE</span>
        <span className="plus">+</span>
        <span>COMMUNITY</span>
        <span className="plus">+</span>
        <span>CULTURE</span>
        <span className="plus">=</span>
        <span className="result">TERAFAB</span>
      </p>
    </section>
  )
}
