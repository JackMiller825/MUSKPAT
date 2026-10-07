import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Community } from "../pages/Community"
import { Factory } from "../pages/Factory"
import { FAQ } from "../pages/FAQ"
import { Home } from "../pages/Home"
import { HowToBuy } from "../pages/HowToBuy"
import { NotFound } from "../pages/NotFound"
import { Origin } from "../pages/Origin"
import { Roadmap } from "../pages/Roadmap"
import { Tokenomics } from "../pages/Tokenomics"

export function PageTransition() {
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash, reduce])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={reduce ? { opacity: 1 } : { opacity: 0, x: -12 }}
        transition={{ duration: reduce ? 0 : 0.28, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/community" element={<Community />} />
          <Route path="/how-to-buy" element={<HowToBuy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}
