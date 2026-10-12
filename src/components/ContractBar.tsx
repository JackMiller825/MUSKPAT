import { contractText } from "../config/token";
import { useClipboard } from "../hooks/useClipboard";

export function ContractCopyButton({ idleLabel = "Copy address" }: { idleLabel?: string }) {
  const { copied, copy } = useClipboard(contractText());
  const label = copied ? "Copied" : idleLabel;

  return (
    <button type="button" className="glow-btn glow-btn--ghost" onClick={copy} aria-live="polite">
      <span>{label}</span>
    </button>
  );
}
