import { useEffect, useState } from "react"
import { assets } from "../config/assets"

const BOOT_KEY = "terafab-booted"
const LINES = ["INITIALIZING FACTORY...", "COMPUTE ONLINE", "TERAFAB ONLINE"]

export function LoadingScreen() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(BOOT_KEY) !== "1")
  const [line, setLine] = useState(0)

  useEffect(() => {
    if (!visible) return
    const timers = [
      window.setTimeout(() => setLine(1), 600),
      window.setTimeout(() => setLine(2), 1150),
      window.setTimeout(() => {
        sessionStorage.setItem(BOOT_KEY, "1")
        setVisible(false)
      }, 1750),
    ]
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [visible])

  if (!visible) return null

  return (
    <div className="boot" role="status" aria-live="polite">
      <div className="boot-card">
        <img src={assets.logoMark} alt="" width={92} height={92} />
        <p>{LINES[line]}</p>
        <div className="boot-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  )
}
