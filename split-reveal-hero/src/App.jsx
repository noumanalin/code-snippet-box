import { lazy } from "react"

const HeroBanner = lazy(() => import("./Components/HeroBanner"));
const ScrollToTopButton = lazy(() => import("./Components/ScrollToTopButton"));
const WhatsAppLogo = lazy(() => import("./Components/WhatsappLogo"));


function App() {

  return (
    <>
      <header></header>

      <HeroBanner />

      <article className="sectionlayout !py-38 ">
        <h2 className="text-3xl">Your Next Component</h2>
      </article>

      <footer>

      </footer>

      <WhatsAppLogo />
      <ScrollToTopButton />
    </>
  )
}

export default App
