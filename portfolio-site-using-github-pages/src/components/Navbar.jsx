import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block transition ${
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
        : "text-gray-600 hover:text-blue-600"
    }`

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">

      <div className="flex items-center justify-between px-6 py-4 md:px-10">

        {/* Logo */}
        <NavLink to="/" className="text-lg font-bold text-blue-600 md:text-xl">
          Divesh S
        </NavLink>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-6 md:flex">

          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Download CV
          </a>

        </div>

        {/* Mobile Toggle */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-6 pb-4 space-y-4 bg-white border-t border-gray-200 md:hidden">

          <NavLink to="/" end onClick={() => setIsOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/projects" onClick={() => setIsOpen(false)} className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/services" onClick={() => setIsOpen(false)} className={linkClass}>
            Services
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/resume" onClick={() => setIsOpen(false)} className={linkClass}>
            Resume
          </NavLink>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="block px-4 py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Download CV
          </a>

        </div>
      )}
    </nav>
  )
}