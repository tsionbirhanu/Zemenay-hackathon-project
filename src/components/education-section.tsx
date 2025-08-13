import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-8">Education and Training</h2>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-3xl blur-xl" />
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-purple-500/20">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading">FREE DEVELOPER TRAINING</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Empowering the next generation of developers through comprehensive, hands-on training programs. From
                  frontend and backend development to mobile development, we provide students passionate about
                  technology.
                </p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Backend Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Mobile Development</span>
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
