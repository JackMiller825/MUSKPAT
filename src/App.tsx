import { BrowserRouter } from "react-router-dom"
import { CustomCursor } from "./components/CustomCursor"
import { Footer } from "./components/Footer"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { OverclockProvider } from "./components/Overclock"
import { PageTransition } from "./components/PageTransition"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <OverclockProvider>
        <LoadingScreen />
        <CustomCursor />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <PageTransition />
        </main>
        <Footer />
      </OverclockProvider>
    </BrowserRouter>
  )
}
