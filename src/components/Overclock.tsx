import { createContext, useCallback, useContext, useMemo, useState } from "react"
import type { ReactNode } from "react"

type OverclockContextValue = {
  trigger: () => void
}

const OverclockContext = createContext<OverclockContextValue | null>(null)

const sparks = [
  { x: "-70px", y: "-40px" },
  { x: "80px", y: "-30px" },
  { x: "-90px", y: "20px" },
  { x: "90px", y: "24px" },
  { x: "-20px", y: "-60px" },
  { x: "30px", y: "50px" },
  { x: "-40px", y: "46px" },
  { x: "60px", y: "-56px" },
]

export function OverclockProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)

  const trigger = useCallback(() => {
    setActive(true)
    window.setTimeout(() => setActive(false), 2000)
  }, [])

  const value = useMemo(() => ({ trigger }), [trigger])

  return (
    <OverclockContext.Provider value={value}>
      {children}
      {active ? (
        <div className="overclock" role="status">
          {sparks.map((spark) => (
            <span
              key={`${spark.x}${spark.y}`}
              className="spark"
              style={{ ["--sx" as string]: spark.x, ["--sy" as string]: spark.y, left: "50%", top: "50%" }}
            />
          ))}
          <strong>FACTORY OVERCLOCKED</strong>
          <em>SUPER INTELLIGENCE OUTPUT +420%</em>
          <small>A factory joke. Not a financial metric.</small>
        </div>
      ) : null}
    </OverclockContext.Provider>
  )
}

export function useOverclock() {
  const context = useContext(OverclockContext)
  if (!context) throw new Error("useOverclock must be used inside OverclockProvider")
  return context
}
