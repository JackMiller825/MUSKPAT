import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { assets } from "./config/assets"
import "./styles/globals.css"

document.documentElement.style.setProperty("--factory-bg", `url("${assets.factoryBackground}")`)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
