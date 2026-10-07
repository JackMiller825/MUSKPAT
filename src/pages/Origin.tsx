import { assets } from "../config/assets"
import { usePageMeta } from "../hooks/usePageMeta"

const timeline = [
  { id: "01", title: "AI", copy: "The era began with software." },
  { id: "02", title: "MORE COMPUTE", copy: "Software ran into power, clusters, and scale." },
  { id: "03", title: "MORE CHIPS", copy: "Compute asked for silicon, and a lot of it." },
  { id: "04", title: "AUTONOMOUS AGENTS", copy: "Models step out of the chat box and into the world." },
  { id: "05", title: "SUPER INTELLIGENCE", copy: "The destination of the infrastructure race." },
  { id: "06", title: "TERAFAB", copy: "The factory beneath that race." },
]

export function Origin() {
  usePageMeta("Origin | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">SCHEMATIC 00</p>
          <h1>ORIGIN OF TERAFAB</h1>
          <p className="lede">THE FACTORY OF SUPER INTELLIGENCE</p>
        </div>
      </header>
      <div className="wrap origin-grid">
        <div className="panel origin-story">
          <p>Every technological revolution eventually runs into the same problem:</p>
          <p>infrastructure.</p>
          <p>The AI era began with software.</p>
          <p>
            The next era requires chips, energy, compute, networks, agents, robotics and infrastructure at a scale the
            world has never seen before.
          </p>
          <p>That is the idea behind TERAFAB.</p>
          <p>Not another chatbot.</p>
          <p>Not another model.</p>
          <p>The factory beneath the intelligence revolution.</p>
        </div>
        <div className="origin-visual">
          <img
            src={assets.mainConcept}
            alt="TERAFAB factory city at sunset, with the android and the megastructure"
            width={1400}
            height={788}
            loading="lazy"
          />
        </div>
      </div>
      <section className="section" aria-labelledby="timeline-title">
        <div className="wrap">
          <h2 id="timeline-title">The line, drawn simply</h2>
          <div className="timeline">
            {timeline.map((step) => (
              <article key={step.id} className="time-node">
                <div className="time-index">{step.id}</div>
                <div className="time-body">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
