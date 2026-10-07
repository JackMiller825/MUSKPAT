import { assets } from "../config/assets"
import { externalHref, project } from "../config/project"
import { usePageMeta } from "../hooks/usePageMeta"

export function HowToBuy() {
  usePageMeta("How to Buy | TERAFAB")
  const dex = externalHref(project.links.uniswap)

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">ENTER THE FACTORY</p>
          <h1>HOW TO BUY {project.ticker}</h1>
          <p className="lede">Four airlocks. No wallet connection on this site until one is actually offered.</p>
        </div>
      </header>
      <div className="wrap buy-layout">
        <div className="buy-art panel">
          <img
            src={assets.howToBuy}
            alt="Illustrated how-to-buy poster for TERAFAB"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>
        <div className="buy-steps">
          <article className="panel buy-step">
            <p className="step-no">STEP 1</p>
            <h2>GET ETH</h2>
            <p>Acquire ETH and move it to an Ethereum-compatible wallet.</p>
          </article>
          <article className="panel buy-step">
            <p className="step-no">STEP 2</p>
            <h2>CONNECT YOUR WALLET</h2>
            <p>Use a wallet you control. Examples: MetaMask, Coinbase Wallet, Trust Wallet.</p>
          </article>
          <article className="panel buy-step">
            <p className="step-no">STEP 3</p>
            <h2>OPEN THE OFFICIAL DEX LINK</h2>
            <p>The link is published here only after it is the official one.</p>
            {dex ? (
              <p>
                <a className="btn btn-primary" href={dex} target="_blank" rel="noopener noreferrer">
                  OPEN DEX
                </a>
              </p>
            ) : (
              <p className="ca-value">COMING SOON</p>
            )}
          </article>
          <article className="panel buy-step">
            <p className="step-no">STEP 4</p>
            <h2>SWAP ETH FOR {project.ticker}</h2>
            <p className="warn">Always verify the official contract address before swapping.</p>
          </article>
        </div>
      </div>
    </article>
  )
}
