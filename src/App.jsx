import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Gallery from "./pages/Gallery/Gallery"
import Plans from "./pages/Plans/Plans"
import Trainers from "./pages/Trainers/Trainers"
import NotFound from "./pages/NotFound/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact>
      <Gallery></Gallery>
      <Plans></Plans>
      <Trainers></Trainers>
      <NotFound></NotFound> */}
    </BrowserRouter>
  )
}

export default App
