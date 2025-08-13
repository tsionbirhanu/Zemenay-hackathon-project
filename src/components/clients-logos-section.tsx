"use client"

const clients = [
  { name: "Chewata Awaki", logo: "/ch1.svg" },
  { name: "Hiyaw", logo: "/ch2.svg" },
  { name: "EGA", logo: "/ch3.svg" },
  { name: "Berhanu", logo: "/ch4.svg" },
  { name: "The Den", logo: "/ch5.svg" },
  { name: "Efuye Gela", logo: "/ch6.svg" },
]

const radius = 180

export function ClientsLogosSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-6">
            Clients We&apos;ve Had the Pleasure to Work With
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We&apos;re proud to have collaborated with these industry leaders, helping them achieve their digital
            transformation goals.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-96 ">
          <div className="absolute flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 z-20 ">
            <img
              src="/logo.svg"
              alt="Zemenay Logo"
              className="w-32 h-32 object-contain"
              draggable={false}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full border border-blue-500/20 animate-spin-slow" />
            <div className="absolute w-[28rem] h-[28rem] rounded-full border border-purple-500/10 animate-spin-reverse" />
          </div>

          {clients.map((client, index) => {
            const angleDeg = (index * 360) / clients.length
            const animationDuration = 20 

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  marginLeft: -radius,
                  marginTop: -radius,
                  animation: `orbit-spin-${index} ${animationDuration}s linear infinite`,
                  transformOrigin: "50% 50%",
                  animationDelay: `-${(animationDuration / clients.length) * index}s`,
                }}
              >
                <div
                  className="w-28 h-28 flex items-center justify-center"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(${radius}px, -50%)`,
                  }}
                >
                  <div className="group relative">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="w-14 h-14 object-contain transition-all duration-300"
                        draggable={false}
                      />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {client.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <style jsx>{`
        @keyframes orbit-spin-0 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-2 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-3 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-4 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-spin-5 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin 40s linear infinite reverse;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
