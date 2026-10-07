import { Link } from "react-router-dom"
import { Conveyor } from "../components/Conveyor"
import { Hero } from "../components/Hero"
import { TerminalFeed } from "../components/TerminalFeed"
import { HOME_TITLE, usePageMeta } from "../hooks/usePageMeta"

const doors = [
  { to: "/origin", kicker: "01", title: "Origin", copy: "Why the next era is an infrastructure problem." },
  { to: "/factory", kicker: "02", title: "Factory", copy: "From raw compute to the reactor at the center." },
  { to: "/tokenomics", kicker: "03", title: "Token", copy: "The Ethereum token of the factory. Details at launch." },
  { to: "/community", kicker: "04", title: "Community", copy: "The builders who keep the line running." },
]

export function Home() {
  usePageMeta(HOME_TITLE)

  return (
    <>
      <Hero />
      <Conveyor />
      <section className="section" aria-labelledby="narrative-title">
        <div className="wrap story-band">
          <h2 id="narrative-title">
            AI was software.
            <br />
            Super Intelligence needs infrastructure.
            <br />
            <span className="glow-text">TERAFAB builds the brains.</span>
          </h2>
          <div>
            <p>Intelligence requires infrastructure. The line runs from silicon to something larger.</p>
            <TerminalFeed />
          </div>
        </div>
      </section>
      <section className="section" aria-label="Explore the factory" style={{ paddingTop: 0 }}>
        <div className="wrap home-links">
          {doors.map((door) => (
            <Link key={door.to} className="panel home-link" to={door.to}>
              <span>{door.kicker}</span>
              <strong>{door.title}</strong>
              <p>{door.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
