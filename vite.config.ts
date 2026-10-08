import { copyFileSync } from "node:fs"
import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

function spaFallback() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const dist = resolve("dist")
      copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"))
    },
  }
}

export default defineConfig({
  // Project Pages URL is /MUSKPAT/ until a custom domain is attached.
  // Switch this to "/" when the domain serves the site from the root.
  base: "/MUSKPAT/",
  plugins: [react(), spaFallback()],
})
