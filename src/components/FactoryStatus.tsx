import { Bot, Brain, Cpu, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const cards: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: "CHIPS", copy: "Silicon for the intelligence economy", icon: Cpu },
  { title: "COMPUTE", copy: "Infrastructure at massive scale", icon: Server },
  { title: "AGENTS", copy: "Intelligence deployed into the world", icon: Bot },
  { title: "SUPER INTELLIGENCE", copy: "The destination", icon: Brain },
]

export function FactoryStatus() {
  return (
    <div className="status-row">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <article key={card.title} className="panel status-card">
            <div className="status-icon" aria-hidden="true">
              <Icon size={20} />
            </div>
            <div>
              <h2>{card.title}</h2>
              <p>{card.copy}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
