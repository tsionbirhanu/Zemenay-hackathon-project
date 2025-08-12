import { Button } from "@/components/ui/button"

export function MissionVisionSection() {
  const cards = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with high-performance, scalable digital solutions that drive growth and innovation.",
      buttonText: "OUR MISSION",
    },
    {
      title: "Our Vision",
      description: "Simplifying digital. Amplifying success.",
      buttonText: "OUR VISION",
    },
    {
      title: "Our Value",
      description:
        "We believe in honest digital solutions that create meaningful connections between businesses and their customers.",
      buttonText: "OUR VALUE",
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-6 font-heading">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-8 min-h-[100px]">{card.description}</p>
                <Button className="w-full rounded-full py-3 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300 transform hover:scale-105">
                  {card.buttonText}
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
