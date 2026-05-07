import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

const isProd = import.meta.env.PROD

function App() {
  return (
    <BrowserRouter basename={isProd ? "/portfolio-site-using-github-pages" : "/"}>

      {/* Layout Wrapper */}
      <div className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App