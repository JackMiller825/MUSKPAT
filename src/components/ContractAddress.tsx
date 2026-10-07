import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { liveContract, project } from "../config/project"

export function ContractAddress() {
  const address = liveContract(project.contractAddress)
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    if (!address) return
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="panel ca" aria-label="Contract address">
      <p className="ca-label">CONTRACT ADDRESS</p>
      {address ? (
        <div className="ca-row">
          <code>{address}</code>
          <button type="button" className="btn btn-primary" onClick={onCopy}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      ) : (
        <p className="ca-value">COMING SOON</p>
      )}
    </section>
  )
}
