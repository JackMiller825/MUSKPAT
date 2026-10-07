import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { assets } from "../config/assets"
import { navLinks } from "../config/project"
import { BuyButton, SocialButtons } from "./SocialButtons"
import { useOverclock } from "./Overclock"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const clicks = useRef<number[]>([])
  const { trigger } = useOverclock()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    menuRef.current?.querySelector("a")?.focus()
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  function onLogoClick() {
    const now = Date.now()
    clicks.current = [...clicks.current.filter((stamp) => now - stamp < 2500), now]
    if (clicks.current.length >= 5) {
      clicks.current = []
      trigger()
    }
    setOpen(false)
  }

  return (
    <>
      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <div className="nav-inner">
          <Link className="brand" to="/" onClick={onLogoClick} aria-label="TERAFAB home">
            <img src={assets.navbarLogo} alt="TERAFAB" width={220} height={42} />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <SocialButtons compact />
            <BuyButton className="nav-buy" />
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div id="mobile-menu" ref={menuRef} className="mobile-menu">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <div className="mobile-social">
            <SocialButtons />
            <BuyButton />
          </div>
        </div>
      ) : null}
    </>
  )
}
