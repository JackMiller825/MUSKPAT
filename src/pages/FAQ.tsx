import { usePageMeta } from "../hooks/usePageMeta"

const faqs = [
  {
    q: "What is TERAFAB?",
    a: "TERAFAB is an Ethereum community token built around the idea of the infrastructure race powering the next generation of intelligence.",
  },
  {
    q: "Is TERAFAB affiliated with Tesla, SpaceX, Nvidia, TSMC or Elon Musk?",
    a: "No. TERAFAB is an independent community project and is not endorsed by or affiliated with those companies or individuals.",
  },
  {
    q: "What network is TERAFAB on?",
    a: "Ethereum.",
  },
  {
    q: "Where can I find the official contract address?",
    a: "Only use the contract address displayed on the official TERAFAB website and verified community channels.",
  },
  {
    q: "Is TERAFAB an investment?",
    a: "TERAFAB is a community-driven crypto token. Crypto assets are highly volatile and involve substantial risk. Do your own research.",
  },
]

export function FAQ() {
  usePageMeta("FAQ | TERAFAB")

  return (
    <article className="page">
      <header className="page-hero">
        <div className="wrap">
          <p className="eyebrow">CONTROL ROOM</p>
          <h1>FAQ</h1>
          <p className="lede">Short answers. No invented metrics.</p>
        </div>
      </header>
      <div className="wrap faq-layout">
        {faqs.map((item) => (
          <details key={item.q} className="panel faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </article>
  )
}
