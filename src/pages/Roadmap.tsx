import { RoadmapCard } from "../components/RoadmapCard"
import { usePageMeta } from "../hooks/usePageMeta"

const phases = [
  {
    phase: "PHASE 01",
    title: "IGNITION",
    items: ["Brand activation", "Website launch", "Community opening", "Ethereum launch"],
  },
  {
    phase: "PHASE 02",
    title: "FABRICATION",
    items: ["Community expansion", "TERAFAB content engine", "Meme production", "Social growth"],
  },
  {
    phase: "PHASE 03",
    title: "SCALE-UP",
    items: ["Community tools", "Ecosystem experiments", "Partnership exploration", "Expanded TERAFAB universe"],
  },
]

export function Roadmap() {
  usePageMeta("Roadmap | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">FABRICATION PLAN</p>
          <h1>ROADMAP</h1>
          <p className="lede">An industrial plan. No dates invented. No boxes checked that the factory has not earned.</p>
        </div>
      </header>
      <div className="wrap roadmap-grid">
        {phases.map((phase) => (
          <RoadmapCard key={phase.phase} phase={phase.phase} title={phase.title} items={phase.items} />
        ))}
        <RoadmapCard phase="PHASE 04" title="SUPER INTELLIGENCE" items={["UNKNOWN"]} locked />
      </div>
    </article>
  )
}
