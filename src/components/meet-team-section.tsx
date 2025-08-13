import Image from "next/image"

export function MeetTeamSection() {
  const teamMembers = [
    {
      name: "Freselam Abebe",
      role: "Founder & Senior Developer",
      image: "/f.svg?height=100&width=100",
      skills: ["FULL STACK", "PROJECT MANAGER"],
    },
    {
      name: "Tehetna Askal",
      role: "Co-Founder and Expert in agile methodologies",
      image: "/t.svg?height=100&width=100",
      skills: ["CO-FOUNDER", "AGILE EXPERT"],
    },
    {
      name: "Michael Engeda",
      role: "Co-Founder & Systems Development",
      image: "/m.svg?height=100&width=100",
      skills: ["SYSTEMS DEVELOPMENT", "MOBILE DEVELOPER"],
    },
  ]

  return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-purple-900 dark:text-white font-heading mb-8">Meet Our Team</h2>
        </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
                        <div
              key={index}
              className="group p-6 md:p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover border-2 border-purple-500/30"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-heading">{member.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">{member.role}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-gradient-to-r dark:from-purple-600/20 dark:to-blue-600/20 text-purple-800 dark:text-purple-300 rounded-full border border-purple-300 dark:border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
