import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { assets } from "../config/assets"
import { project } from "../config/project"
import { FactoryStatus } from "./FactoryStatus"

export function Hero() {
  const bgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const narrow = window.matchMedia("(max-width: 979px)").matches
    const image = bgRef.current
    if (!image || reduce || narrow) return

    let frame = 0
    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        image.style.transform = `translate3d(0, ${window.scrollY * 0.16}px, 0) scale(1.06)`
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section className="hero" aria-label="Introduction">
      <img
        ref={bgRef}
        className="hero-bg"
        src={assets.factoryBackground}
        alt=""
        width={1672}
        height={941}
      />
      <div className="hero-shade" />
      <div className="hero-layout">
        <p className="eyebrow">SILICON SCALE INTELLIGENCE</p>
        <h1>
          <span>BUILDING</span>
          <span className="glow-text">THE BRAINS</span>
          <span>OF TOMORROW</span>
        </h1>
        <div className="hero-figure">
          <img
            className="hero-robot"
            src={assets.heroCharacter}
            alt="TERAFAB factory android extending an open hand"
            width={900}
            height={1124}
          />
        </div>
        <div className="hero-copy">
          <p className="lede">TERAFAB is the factory of Super Intelligence.</p>
          <p className="lede">
            From silicon and compute to intelligent agents, the factory turns raw infrastructure into the intelligence
            layer of tomorrow.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/factory">
            ENTER THE FACTORY
            <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
          </Link>
          <a className="btn btn-secondary" href="#conveyor">
            HOW IT WORKS
            <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="ticker-badge">{project.ticker}</p>
      </div>
      <FactoryStatus />
    </section>
  )
}
