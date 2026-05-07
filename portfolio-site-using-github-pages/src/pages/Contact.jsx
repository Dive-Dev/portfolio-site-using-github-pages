import { useState } from "react"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`)

    window.location.href = `mailto:diveshswork@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="min-h-screen px-4 pt-24 pb-12 text-gray-900 bg-white sm:px-6 md:px-12">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Contact Me <span className="text-blue-600">📬</span>
        </h1>

        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Let’s build something amazing together
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-xl p-6 mx-auto mt-12 bg-white border border-gray-200 shadow-sm md:p-8 rounded-xl">

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full h-40 p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-lg transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>

      {/* Contact Links */}
      <div className="mt-12 text-center text-gray-600">

        <p className="flex items-center justify-center gap-2">
          <FaEnvelope size={16} className="text-blue-600" />
          <span>
            diveshswork@gmail.com
          </span>
        </p>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  )
}
