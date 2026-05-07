import {
  Cloud,
  Code,
  Brain,
  Boxes,
  Cpu,
  Rocket,
  Users,
  Handshake,
  GraduationCap,
  Lightbulb
} from "lucide-react"

import { Link } from "react-router-dom"

export default function Services() {

  const services = [
    {
      title: "Application Development",
      desc: "Web & Mobile apps using modern frameworks.",
      points: ["Frontend Development", "Full Stack Applications", "Mobile Apps"],
      icon: Code
    },
    {
      title: "Cloud & DevOps",
      desc: "Deploy, scale, and automate applications.",
      points: ["CI/CD Pipelines", "AWS Deployment", "Docker"],
      icon: Cloud
    },
    {
      title: "AI & Data Analytics",
      desc: "AI systems and data-driven solutions.",
      points: ["Data Analytics", "AI Integration", "Automation"],
      icon: Brain
    },
    {
      title: "Blockchain Development",
      desc: "Web3 and decentralized applications.",
      points: ["Smart Contracts", "DApps", "Web3 Integration"],
      icon: Boxes
    },
    {
      title: "IT Hardware & Supply",
      desc: "Infrastructure setup & support.",
      points: ["System Setup", "Hardware Support", "Procurement"],
      icon: Cpu
    },
    {
      title: "Entrepreneurship & Product",
      desc: "Startup building and scaling support.",
      points: ["MVP Development", "Strategy", "Funding Guidance"],
      icon: Rocket
    },
    {
      title: "Community Building",
      desc: "Developer ecosystems & networking.",
      points: ["Communities", "Knowledge Sharing", "Events"],
      icon: Users
    },
    {
      title: "Open Collaboration",
      desc: "Open source & project collaboration.",
      points: ["Open Source", "Internships", "Projects"],
      icon: Handshake
    },
    {
      title: "Workshops & Training",
      desc: "Training for students & professionals.",
      points: ["Workshops", "Skill Training", "Corporate Sessions"],
      icon: GraduationCap
    },
    {
      title: "Mentorship & Guidance",
      desc: "Career and project guidance.",
      points: ["Mentorship", "Project Help", "Peer Learning"],
      icon: Lightbulb
    }
  ]

  return (
    <div className="min-h-screen px-4 pt-24 pb-12 text-gray-900 bg-white sm:px-6 md:px-12">

      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          My Services <span className="text-blue-600">⚡</span>
        </h1>

        <p className="mt-3 text-sm text-gray-600 md:text-base">
          Solutions, skills, and impact areas I work on
        </p>
      </section>

      {/* Services Section */}
      <section className="px-4 py-12 mt-12 bg-gray-50 rounded-2xl">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="p-6 transition duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
              >

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-blue-600">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Interested in working together?
          </p>

          <Link
            to="/contact"
            className="inline-block px-6 py-3 mt-4 font-semibold text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Contact Me
          </Link>
        </div>

      </section>

    </div>
  )
}