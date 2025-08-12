"use client"

import { Button } from "@/components/ui/button"
import { NetworkVisualization } from "./network-visualization"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Network Visualization */}
      <NetworkVisualization />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white font-heading mb-8 leading-tight">
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group relative rounded-full px-12 py-6 text-lg font-semibold bg-blue-800 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 animate-pulse-glow"
          >
            <span className="relative z-10">lets build together</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
