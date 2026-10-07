import { displayStat, liveContract, project, tokenConfig } from "../config/project"

const contract = liveContract(project.contractAddress)

const cards = [
  { label: "NETWORK", value: tokenConfig.network },
  {
    label: "CONTRACT",
    value: contract ? `${contract.slice(0, 6)}…${contract.slice(-4)}` : "Coming Soon",
  },
  { label: "SUPPLY", value: displayStat(tokenConfig.totalSupply) },
  { label: "LIQUIDITY", value: displayStat(tokenConfig.liquidityStatus) },
]

export function TokenInfo() {
  return (
    <div className="token-cards">
      {cards.map((card) => (
        <article key={card.label} className="panel token-card">
          <span>{card.label}</span>
          <strong>{card.value}</strong>
        </article>
      ))}
    </div>
  )
}
