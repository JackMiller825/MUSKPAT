import { useEffect, useState } from "react";

export function useClipboard(value: string) {
  const [copied, setCopied] = useState(false);
  const available = value.trim().length > 0;

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  function copy() {
    if (!available) return;
    const text = value.trim();
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.focus();
    area.select();
    area.setSelectionRange(0, text.length);
    let copiedNow = false;
    try {
      copiedNow = document.execCommand("copy");
    } catch {
      copiedNow = false;
    }
    area.remove();
    if (copiedNow) {
      setCopied(true);
      return;
    }
    if (!navigator.clipboard) return;
    void navigator.clipboard.writeText(text).then(
      () => setCopied(true),
      () => setCopied(false),
    );
  }

  return { available, copied, copy };
}
