
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NetworkVisualization } from "./network-visualization"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }
  return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animate-float-slow">
        <NetworkVisualization />
      </div>

            <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-6 mt-20"
      >
        <div className="text-center mb-16">
                    <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold font-heading mb-8 leading-tight text-foreground dark:text-white"
          >
            Revolutionize Your
            <br />
            <span className="text-purple-400">
              Digital Experience
            </span>
          </motion.h1>
                    <motion.p
            variants={itemVariants}
            className="text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At Zemenay, we build clean, scalable, and elegant digital experiences for forward-thinking businesses.
          </motion.p>

                    <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="group relative rounded-full px-12 py-6 text-lg font-semibold light-card-gradient text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 animate-pulse-glow"
            >
              <span className="relative z-10">Lets build together</span>
            </Button>
                    </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
