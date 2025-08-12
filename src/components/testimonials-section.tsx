import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Birhan Mamesha",
      role: "Founder at Birhan Automation",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "Working with this team has been an absolute game-changer for our business. Their innovative solutions have transformed our workflow and boosted our productivity tenfold.",
    },
    {
      name: "Dagmawi Bealu",
      role: "CEO at Dagi Tech",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "I can't recommend their services enough. The level of expertise and dedication they bring to every project is truly remarkable. They've exceeded all our expectations since partnering with them.",
    },
    {
      name: "Kindu Samuel",
      role: "Lead at Samuel Development",
      image: "/placeholder.svg?height=60&width=60",
      quote:
        "The customer support is top-notch. They're always available to answer questions and provide guidance. It's clear that they genuinely care about their clients' success.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry professionals have to say about our services and
            solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full rounded-full object-cover border-2 border-purple-500/30"
                  />
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{testimonial.name}</h3>
                <p className="text-purple-400 text-sm mb-6">{testimonial.role}</p>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
