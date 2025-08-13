"use client"

import {
  CodeIcon,
  PaletteIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import React from "react"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

export function WhyZemenaySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const features: Feature[] = [
    {
      title: "Future-Proof Technology",
      description:
        "We build with cutting-edge technologies like Next.js, TypeScript, and Tailwind CSS to ensure your product is scalable, maintainable, and ready for the future.",
      icon: CodeIcon,
    },
    {
      title: "Elegant & Responsive Design",
      description:
        "Our design philosophy is centered around creating beautiful, intuitive, and responsive user interfaces that look great on any device, from mobile to desktop.",
      icon: PaletteIcon,
    },
    {
      title: "Collaborative Partnership",
      description:
        "We believe in working closely with our clients. You're not just a customer; you're a partner. We'll collaborate at every step to bring your vision to life.",
      icon: UsersIcon,
    },
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold font-heading mb-4 text-purple-400">
            Why Zemenay?
          </h2>
          <p className="text-lg text-foreground/80 dark:text-muted-foreground max-w-3xl mx-auto">
            We don&apos;t just build websites, we build digital experiences that drive
            growth and inspire loyalty.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <Button
            size="lg"
            className="group relative rounded-full px-12 py-6 text-lg font-semibold light-card-gradient text-white border-0 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 animate-pulse-glow"
          >
            <span className="relative z-10">Learn More About Us</span>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

function FeatureCard({
  title,
  description,
  icon: Icon,
  // index,
}: Feature & { index: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current?.style.setProperty("--x", `${x}px`);
      cardRef.current?.style.setProperty("--y", `${y}px`);
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(147, 51, 234, 0.4)",
      transition: { duration: 0.3 },
    },
  }

    return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={itemVariants}
      whileHover="hover"
      className="interactive-card p-8 rounded-2xl light-card-gradient text-white shadow-lg h-full"
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-500/20 text-gray-800 dark:text-white rounded-lg">
        <Icon className="w-8 h-8 text-gray-800 dark:text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    </motion.div>
  )
}
