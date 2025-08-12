export function ClientsLogosSection() {
  const clients = [
    { name: "THE DEN", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Berhanu", logo: "/placeholder.svg?height=80&width=120" },
    { name: "EGA", logo: "/placeholder.svg?height=80&width=120" },
    { name: "ALIYAH FOUNDATION", logo: "/placeholder.svg?height=80&width=120" },
    { name: "TOPAZ APP", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-6">
            Clients We&apos;ve Had the Pleasure to Work With
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We&apos;re proud to have collaborated with these industry leaders, helping them achieve their digital
            transformation goals.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:opacity-100 hover:scale-110 filter grayscale hover:grayscale-0"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="h-16 w-auto object-contain"
                style={{ maxWidth: "120px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
