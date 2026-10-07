import { Link } from "react-router-dom"
import { usePageMeta } from "../hooks/usePageMeta"

export function NotFound() {
  usePageMeta("404 | TERAFAB")

  return (
    <article className="page">
      <div className="wrap missing">
        <p className="eyebrow">SECTOR ERROR</p>
        <h1>404</h1>
        <h2>FACTORY SECTOR NOT FOUND</h2>
        <p>This part of the factory hasn&apos;t been built yet.</p>
        <div>
          <Link className="btn btn-primary" to="/">
            RETURN TO FACTORY
          </Link>
        </div>
      </div>
    </article>
  )
}
