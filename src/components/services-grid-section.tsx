import { Button } from "@/components/ui/button"
import { Code, Search, WorkflowIcon as Wordpress, Settings } from "lucide-react"

export function ServicesGridSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white font-heading mb-6">Comprehensive Technology Solutions</h2>
          <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            We specialize in delivering transformative solutions that integrate seamlessly into your business processes.
            From web development and software engineering to AI-driven strategies, we&apos;re here to help you scale.
          </p>
        </div>

        {/* Services Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-3xl blur-xl" />
          <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white text-center mb-12 font-heading">OUR SERVICES</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Stack Web Development */}
              <div className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 font-heading">FULL STACK WEB DEVELOPMENT</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      End-to-end web solutions from frontend interfaces to backend systems, ensuring seamless user
                      experiences and robust functionality.
                    </p>
                    <Button className="rounded-full px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>

              {/* SEO Management */}
              <div className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 font-heading">SEO MANAGEMENT</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Comprehensive SEO strategies to boost your online visibility, drive organic traffic, and improve
                      search engine rankings.
                    </p>
                    <Button className="rounded-full px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>

              {/* WordPress Development */}
              <div className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Wordpress className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 font-heading">
                      WORDPRESS DEVELOPMENT WITH ELEMENTOR PRO
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Custom WordPress solutions with Elementor Pro for flexible, user-friendly websites that are easy
                      to manage and scale.
                    </p>
                    <Button className="rounded-full px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Website Maintenance */}
              <div className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 font-heading">WEBSITE MAINTENANCE</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Ongoing support and maintenance to keep your website secure, updated, and performing at its best
                      with regular monitoring.
                    </p>
                    <Button className="rounded-full px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-300">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
