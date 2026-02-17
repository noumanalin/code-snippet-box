import { lazy } from "react";
import { Route, Routes,  } from "react-router-dom";
const  Home = lazy(()=> import("./Pages/Home"));

function App() {
  return (
    <>
      <header aria-label="header"></header>
      <Routes>

        <Route path="/" element={<Home/>}/>

      </Routes>


      <footer aria-label="footer"></footer>
    </>
  )
}

export default App
