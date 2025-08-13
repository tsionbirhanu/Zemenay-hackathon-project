"use client"

import { Shield, Zap, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function WhyZemenaySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Clean & Minimalist Interfaces",
      description:
        "Achieve your digital presence with our high-performance solutions ensuring your users experience seamless interactions.",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "shadow-yellow-500/30",
      delay: "delay-100",
    },
    {
      icon: Shield,
      title: "Scalable, High-Performance Code",
      description:
        "Protect your data and users with our state-of-the-art security measures, giving you peace of mind in the digital landscape.",
      gradient: "from-green-400 via-blue-500 to-purple-600",
      glowColor: "shadow-blue-500/30",
      delay: "delay-300",
    },
    {
      icon: Send,
      title: "Reliable Support & Maintenance",
      description:
        "Grow your business with our limitless support and scalable infrastructure, designed to evolve with your needs.",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      glowColor: "shadow-purple-500/30",
      delay: "delay-500",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-48 right-1/3 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 font-heading mb-8 tracking-tight">
              WHY ZEMENAY
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Empower your business with our cutting-edge solutions.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              We offer a range of services designed to elevate your digital presence and drive success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} ${feature.delay}`}
              >

                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 hover:border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">

                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}
                  ></div>

                  <div className="relative text-center">
                    <div className="relative inline-flex items-center justify-center mb-8">
                      <div
                        className={`absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg group-hover:opacity-40 transition-all duration-500`}
                      ></div>
                      <div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${feature.glowColor} group-hover:shadow-2xl`}
                      >
                        <Icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-white/30 group-hover:rotate-180 transition-transform duration-1000"></div>
                    </div>


                    <h3 className="text-2xl font-bold text-white mb-6 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>

            <Button
              size="lg"
              className="group relative rounded-full px-16 py-8 text-xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-1"
            >

              <span className="relative z-10 flex items-center gap-3">
                <span className="tracking-wide">GET STARTED</span>
                <div className="relative">
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-6 h-6 absolute -left-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shimmer"></div>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        .bg-size-200 { background-size: 200% 200%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
      `}</style>
    </section>
  )
}
