export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">

      <div className="grid max-w-6xl gap-8 px-6 py-10 mx-auto md:grid-cols-3">

        {/* About */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
            Divesh S
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Building scalable digital solutions across AI, Cloud, and Web3.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
            Quick Links
          </h3>
          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p>Home</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
            Connect
          </h3>

          <div className="mt-3 space-y-2 text-sm">
            <a href="#" className="block hover:text-blue-600">GitHub</a>
            <a href="#" className="block hover:text-blue-600">LinkedIn</a>
            <a href="#" className="block hover:text-blue-600">Email</a>
          </div>
        </div>

      </div>

      <div className="pb-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Divesh S
      </div>
    </footer>
  )
}