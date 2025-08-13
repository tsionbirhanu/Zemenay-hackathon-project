import Image from "next/image"

export function PeopleFirstSection() {
  return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 dark:text-white font-heading mb-8">We Put People First</h2>
                        <p className="text-lg md:text-xl text-blue-950 dark:text-gray-300 leading-relaxed">
              At Zemenay, we believe technology should empower people and make their lives easier. Our mission is
              simple: to create solutions that prioritize people at every step, delivering exceptional digital
              experiences that truly matter.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <Image
                src="/p.svg?height=400&width=600"
                alt="Team collaboration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
