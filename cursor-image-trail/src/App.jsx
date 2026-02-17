import { lazy } from "react"

const HeroCarousel = lazy(() => import("./components/HeroCarousel"));
const ImageTrialAnimation = lazy(() => import("./components/ImageTrialAnimation"));
import './index.css'

const App = () => {
  return (
    <>
      {/* Your Glass Effect NavBar */}
      <header aria-label='Header and Navigation'>
        <nav></nav>
      </header>

      <main >
        <ImageTrialAnimation>
          <HeroCarousel />
        </ImageTrialAnimation>
      </main>


      <footer>

      </footer>
    </>
  )
}

export default App
