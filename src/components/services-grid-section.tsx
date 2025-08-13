"use client"

import { Button } from "@/components/ui/button"
import { Code, Search, WorkflowIcon as Wordpress, Settings } from "lucide-react"
import { motion, Variants } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "FULL STACK WEB DEVELOPMENT",
    description:
      "End-to-end web solutions from frontend interfaces to backend systems, ensuring seamless user experiences and robust functionality.",
  },
  {
    icon: Search,
    title: "SEO MANAGEMENT",
    description:
      "Comprehensive SEO strategies to boost your online visibility, drive organic traffic, and improve search engine rankings.",
  },
  {
    icon: Wordpress,
    title: "WORDPRESS DEVELOPMENT WITH ELEMENTOR PRO",
    description:
      "Custom WordPress solutions with Elementor Pro for flexible, user-friendly websites that are easy to manage and scale.",
  },
  {
    icon: Settings,
    title: "WEBSITE MAINTENANCE",
    description:
      "Ongoing support and maintenance to keep your website secure, updated, and performing at its best with regular monitoring.",
  },
]

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export function ServicesGridSection() {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-900 dark:text-white font-heading mb-6">Our Suite of Services</h2>
          <p className="text-lg md:text-xl text-blue-950 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We craft bespoke digital solutions that drive growth, innovation, and efficiency for your business.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-3xl card-gradient border border-purple-500/20 transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <motion.div
                  className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30 group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <service.icon className="w-20 h-20 md:w-28 md:h-28 text-purple-800 dark:text-purple-300 transition-all duration-500 group-hover:text-purple-600 dark:group-hover:text-white" />
                </motion.div>

                <div className={`flex-1 text-center ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-heading">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8">{service.description}</p>
                  <Button className="rounded-full px-8 py-3 text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/20">
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
