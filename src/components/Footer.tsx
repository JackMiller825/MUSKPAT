import type { ReactNode } from "react";
import { socialLinks } from "../config/socials";
import { tokenConfig } from "../config/token";
import { TelegramIcon, XIcon } from "./BrandIcons";
import { navLinks } from "./MobileMenu";
import { asset } from "../config/assets";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src={asset("images/muskpat-logo-circle-transparent.png")} alt="MUSK MOONSHOT PATTERN emblem" width="72" height="72" />
          <div>
            <strong>MUSK MOONSHOT PATTERN</strong>
            <span className="glow-text">{tokenConfig.ticker}</span>
          </div>
        </div>
        <nav aria-label="Footer">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-socials">
          <FooterLink href={socialLinks.telegram} label="Telegram">
            <TelegramIcon />
          </FooterLink>
          <FooterLink href={socialLinks.x} label="X">
            <XIcon />
          </FooterLink>
        </div>
      </div>
      <div className="wrap footer-legal">
        <p>© 2026 MUSK MOONSHOT PATTERN</p>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  if (!href.trim()) {
    return (
      <button type="button" className="icon-btn" disabled aria-label={`${label} coming soon`}>
        {children}
      </button>
    );
  }
  return (
    <a className="icon-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}
