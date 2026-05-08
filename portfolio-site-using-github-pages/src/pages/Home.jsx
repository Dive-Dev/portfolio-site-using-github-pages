import { Link } from "react-router-dom"

export default function Home() {
  const services = [
    { title: "Application Development", desc: "Web & Mobile apps using React, React Native and modern frameworks." },
    { title: "Cloud & DevOps", desc: "AWS, Docker, CI/CD pipelines, scalable deployments." },
    { title: "AI & Data Analytics", desc: "AI systems, automation tools, dashboards & insights." },
    { title: "Blockchain Development", desc: "Smart contracts, Web3 apps, decentralized systems." },
    { title: "IT Hardware & Supply", desc: "Infrastructure setup, hardware support, procurement assistance." },
    { title: "Community Building", desc: "Developer communities, knowledge sharing, tech ecosystems." },
    { title: "Open Collaboration", desc: "Open source, internships, volunteering, and tech projects." },
    { title: "Workshops & Training", desc: "Training for students, teachers, and professionals." },
    { title: "Mentorship", desc: "Career guidance, peer learning, and project support." }
  ]

  return (
    <div className="min-h-screen pt-20 text-gray-900 bg-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-between max-w-6xl px-6 mx-auto text-center md:flex-row md:text-left">

        {/* TEXT */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Building Scalable <br />
            <span className="text-blue-600">Digital Solutions</span> 🚀
          </h1>

          <p className="mt-4 text-sm text-gray-600 md:text-base">
            I build scalable web & mobile applications, cloud systems, AI solutions,
            and developer ecosystems that create real-world impact.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 text-blue-600 transition border border-blue-200 rounded-xl hover:border-blue-500"
            >
              Contact Me
            </Link>
          </div>
        </div>

{/* IMAGE */}
<div className="mt-8 md:mt-0">
  <img
    src={`${import.meta.env.BASE_URL}profile.jpg`}
    alt="Divesh S"
    className="object-cover w-40 h-40 border-4 border-blue-100 rounded-full shadow-lg sm:w-52 sm:h-52 md:w-72 md:h-72"
  />
</div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 mt-24 text-center bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl font-bold text-blue-600 md:text-3xl">
            What I Do
          </h2>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            My core expertise and areas of contribution
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((item, i) => (
              <div
                key={i}
                className="p-6 transition duration-300 bg-white border border-blue-100 shadow-sm rounded-xl hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
              >
                <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-16">
            <p className="text-sm text-gray-600 md:text-base">
              Want to collaborate or build something impactful?
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 mt-4 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              Let’s Connect
            </Link>
          </div>

        </div>

      </section>

    </div>
  )
}