import { Lock } from "lucide-react"

type RoadmapCardProps = {
  phase: string
  title: string
  items: string[]
  locked?: boolean
}

export function RoadmapCard({ phase, title, items, locked = false }: RoadmapCardProps) {
  return (
    <article className={locked ? "panel roadmap-card is-locked" : "panel roadmap-card"}>
      <p className="phase">{phase}</p>
      <h2>{title}</h2>
      {locked ? (
        <>
          <p className="lock-note">
            <Lock size={16} aria-hidden="true" /> UNKNOWN
          </p>
          <p className="glitch" data-text="THE FACTORY IS STILL BUILDING.">
            THE FACTORY IS STILL BUILDING.
          </p>
        </>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
