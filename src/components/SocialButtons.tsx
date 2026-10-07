import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { assets } from "../config/assets"
import { externalHref, project } from "../config/project"

type SocialButtonsProps = {
  compact?: boolean
}

export function SocialButtons({ compact = false }: SocialButtonsProps) {
  const items = [
    {
      name: "X",
      label: compact ? "X" : "JOIN X",
      href: externalHref(project.links.x),
      icon: assets.iconX,
    },
    {
      name: "Telegram",
      label: compact ? "Telegram" : "JOIN TELEGRAM",
      href: externalHref(project.links.telegram),
      icon: assets.iconTelegram,
    },
  ]

  return (
    <div className={compact ? "nav-social" : "footer-actions"}>
      {items.map((item) =>
        item.href ? (
          <a
            key={item.name}
            className={compact ? "icon-btn" : "btn btn-secondary"}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={compact ? item.name : undefined}
            title={item.name}
          >
            <img src={item.icon} alt="" width={22} height={22} />
            {compact ? <span className="sr-only">{item.name}</span> : item.label}
          </a>
        ) : (
          <button
            key={item.name}
            type="button"
            className={compact ? "icon-btn" : "btn btn-secondary"}
            disabled
            aria-label={`${item.name} coming soon`}
            title="Coming soon"
          >
            <img src={item.icon} alt="" width={22} height={22} />
            {compact ? <span className="sr-only">{item.name} coming soon</span> : item.label}
            {compact ? null : <span className="soon">COMING SOON</span>}
          </button>
        ),
      )}
    </div>
  )
}

export function BuyButton({ className = "" }: { className?: string }) {
  const href = externalHref(project.links.uniswap)
  const label = `BUY ${project.ticker}`

  if (!href) {
    return (
      <Link className={`btn btn-primary ${className}`.trim()} to="/how-to-buy">
        {label}
        <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
      </Link>
    )
  }

  return (
    <a className={`btn btn-primary ${className}`.trim()} href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
    </a>
  )
}

export function ConfigLink({
  href,
  children,
}: {
  href: string
  children: string
}) {
  const live = externalHref(href)
  if (!live) {
    return (
      <button type="button" className="btn btn-secondary" disabled>
        {children}
        <span className="soon">COMING SOON</span>
      </button>
    )
  }

  return (
    <a className="btn btn-secondary" href={live} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowRight className="btn-arrow" size={16} aria-hidden="true" />
    </a>
  )
}
