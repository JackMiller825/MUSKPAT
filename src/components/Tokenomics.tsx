import { contractText, tokenConfig } from "../config/token";
import { ContractCopyButton } from "./ContractBar";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { asset } from "../config/assets";

const tax =
  tokenConfig.buyTax === tokenConfig.sellTax ? tokenConfig.buyTax : `${tokenConfig.buyTax} / ${tokenConfig.sellTax}`;

const fields = [
  { label: "TOTAL SUPPLY", value: tokenConfig.totalSupply },
  { label: "BUY / SELL TAX", value: tax },
  { label: "LP STATUS", value: tokenConfig.lpStatus },
  { label: "OWNERSHIP", value: tokenConfig.ownership },
];

export function Tokenomics() {
  return (
    <section className="section tokenomics" id="tokenomics" aria-labelledby="tokenomics-title">
      <div className="wrap">
        <div className="split">
          <div>
            <SectionHeading id="tokenomics-title" eyebrow="ETHEREUM" title="TOKENOMICS" />
            <Reveal>
              <dl className="stat-grid">
                {fields.map((field) => (
                  <div key={field.label} className="panel">
                    <dt>{field.label}</dt>
                    <dd>{field.value}</dd>
                  </div>
                ))}
                <div className="panel contract-cell">
                  <dt>CONTRACT</dt>
                  <dd>
                    <span>{contractText()}</span>
                    <ContractCopyButton />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <figure className="monitor mission-visual">
              <figcaption>PARAMETERS</figcaption>
              <img
                src={asset("images/muskpat-section-tokenomics.png")}
                alt=""
                width="228"
                height="172"
                loading="lazy"
              />
            </figure>
            <ul className="orbit-icons" aria-hidden="true">
              <li><img src={asset("images/muskpat-icon-earth.png")} alt="" width="56" height="56" /></li>
              <li><img src={asset("images/muskpat-icon-moon.png")} alt="" width="56" height="56" /></li>
              <li><img src={asset("images/muskpat-icon-mars.png")} alt="" width="56" height="56" /></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
