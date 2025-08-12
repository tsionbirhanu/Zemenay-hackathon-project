import { Shield, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyZemenaySection() {
  const features = [
    {
      icon: Shield,
      title: "Clean & Minimalist Interfaces",
      description: "Protect your data and systems with our state-of-the-art security measures and best practices.",
    },
    {
      icon: Zap,
      title: "Scalable, High Performance Code",
      description: "Protect your data and systems with our state-of-the-art security measures and best practices.",
    },
    {
      icon: Users,
      title: "Reliable Support & Maintenance",
      description:
        "Count on our dedicated support team to keep your digital presence running smoothly with proactive maintenance.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white font-heading mb-6">WHY ZEMENAY</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empower your business with our cutting-edge solutions. We offer a range of services designed to elevate your
            digital presence and drive success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 font-heading">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="group relative rounded-full px-12 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              GET STARTED
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
