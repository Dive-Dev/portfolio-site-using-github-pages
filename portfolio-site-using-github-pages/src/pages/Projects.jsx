import { Link } from "react-router-dom"

export default function Projects() {
  const projects = [
    {
      title: "AI Learning System",
      desc: "AI-powered recommendation engine for personalized learning paths.",
      tech: ["React", "Python", "AI"],
      github: "#",
      live: "#"
    },
    {
      title: "Blockchain Community",
      desc: "Web3-based developer community platform with engagement tools.",
      tech: ["React", "Solidity", "Web3"],
      github: "#",
      live: "#"
    },
    {
      title: "Marketing Dashboard",
      desc: "Analytics dashboard for digital marketing campaigns and SEO tracking.",
      tech: ["React", "Node.js", "APIs"],
      github: "#",
      live: "#"
    },
    {
      title: "Cloud Deployment System",
      desc: "Automated CI/CD pipeline for deploying web applications.",
      tech: ["AWS", "Docker", "DevOps"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio built with React and Tailwind.",
      tech: ["Vite", "React", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Data Analytics Tool",
      desc: "Tool for visualizing and analyzing structured datasets.",
      tech: ["Python", "Pandas", "Charts"],
      github: "#",
      live: "#"
    }
  ]

  return (
    <div className="min-h-screen px-4 pt-24 pb-12 text-gray-900 bg-white sm:px-6 md:px-12">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center md:text-4xl">
        My Projects <span className="text-blue-600">🚀</span>
      </h1>

      <p className="mt-3 text-sm text-center text-gray-600 md:text-base">
        A collection of things I’ve built while learning and exploring
      </p>

      {/* Projects Grid */}
      <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 transition duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                {project.desc}
              </p>

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm text-center text-blue-600 border border-blue-200 rounded-lg hover:border-blue-500"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Live
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600">
          Want to work together?
        </p>

        <Link
          to="/contact"
          className="inline-block px-6 py-3 mt-4 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Contact Me
        </Link>
      </div>

    </div>
  )
}