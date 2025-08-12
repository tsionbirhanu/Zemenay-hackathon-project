export function ClientsSection() {
  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-6">
            Clients We&lsquo;ve Had the Pleasure to Work With
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We&apos;re proud to have collaborated with these industry leaders, helping them achieve their digital
            transformation goals.
          </p>
        </div>

        {/* Client Logos - Placeholder for actual logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          {["THE DEN", "Berhanu", "EGA", "ALIYAH FOUNDATION", "TOPAZ APP"].map((client, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:opacity-100 hover:scale-110 filter grayscale hover:grayscale-0"
            >
              <div className="h-16 w-32 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg flex items-center justify-center border border-purple-500/20">
                <span className="text-gray-400 text-sm font-semibold">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
