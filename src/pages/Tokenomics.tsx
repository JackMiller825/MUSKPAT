import { assets } from "../config/assets"
import { project } from "../config/project"
import { ConfigLink } from "../components/SocialButtons"
import { ContractAddress } from "../components/ContractAddress"
import { TokenInfo } from "../components/TokenInfo"
import { usePageMeta } from "../hooks/usePageMeta"

export function Tokenomics() {
  usePageMeta("Tokenomics | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">ETHEREUM</p>
          <h1>{project.ticker}</h1>
          <p className="lede">THE TOKEN OF THE FACTORY</p>
        </div>
      </header>
      <div className="wrap token-layout">
        <div>
          <TokenInfo />
          <p className="token-note">
            Supply, taxes, and liquidity stay unpublished until they are real. This page will not invent them.
          </p>
          <div className="link-row">
            <ConfigLink href={project.links.etherscan}>ETHERSCAN</ConfigLink>
            <ConfigLink href={project.links.uniswap}>UNISWAP</ConfigLink>
            <ConfigLink href={project.links.dextools}>DEXTOOLS</ConfigLink>
          </div>
        </div>
        <div className="token-coin">
          <img
            src={assets.ethereumToken}
            alt="Gold Ethereum coin"
            width={720}
            height={654}
            loading="lazy"
          />
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 22 }}>
        <ContractAddress />
      </div>
    </article>
  )
}
