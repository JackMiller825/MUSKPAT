/**
 * Official TERAFAB configuration.
 * Leave a field empty until the value is real.
 * Empty links render as disabled or "COMING SOON".
 * contractAddress must be the deployed 0x address — never a placeholder.
 */
export const project = {
  name: "TeraFab",
  ticker: "$TERAFAB",
  tagline: "The Factory of Super Intelligence",
  contractAddress: "",
  links: {
    x: "",
    telegram: "",
    etherscan: "",
    uniswap: "",
    dextools: "",
  },
} as const

export const tokenConfig = {
  name: project.name,
  ticker: project.ticker,
  network: "Ethereum",
  contractAddress: project.contractAddress,
  totalSupply: "COMING SOON",
  buyTax: "COMING SOON",
  sellTax: "COMING SOON",
  liquidityStatus: "COMING SOON",
} as const

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/origin", label: "Origin" },
  { to: "/factory", label: "Factory" },
  { to: "/tokenomics", label: "Tokenomics" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/community", label: "Community" },
  { to: "/how-to-buy", label: "How to Buy" },
] as const

export const footerLinks = [
  ...navLinks,
  { to: "/faq", label: "FAQ" },
] as const

const ETH_ADDRESS = /^0x[a-fA-F0-9]{40}$/

export function liveContract(address: string): string | null {
  const value = address.trim()
  return ETH_ADDRESS.test(value) ? value : null
}

export function externalHref(url: string): string | null {
  const value = url.trim()
  return value.length > 0 ? value : null
}

export function displayStat(value: string): string {
  const trimmed = value.trim()
  if (!trimmed || trimmed.toUpperCase() === "COMING SOON") return "Coming Soon"
  return trimmed
}
