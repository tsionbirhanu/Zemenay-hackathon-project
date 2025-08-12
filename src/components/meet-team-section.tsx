import Image from "next/image"

export function MeetTeamSection() {
  const teamMembers = [
    {
      name: "Freselam Abebe",
      role: "Founder & Senior Developer",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["FULL STACK", "PROJECT MANAGER"],
    },
    {
      name: "Teshome Ashafi",
      role: "Co-Founder and Expert in agile methodologies",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["CO-FOUNDER", "AGILE EXPERT"],
    },
    {
      name: "Michael Engeda",
      role: "Co-Founder & Systems Development",
      image: "/placeholder.svg?height=100&width=100",
      skills: ["SYSTEMS DEVELOPMENT", "MOBILE DEVELOPER"],
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white font-heading mb-8">Meet Our Team</h2>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl card-gradient hover:glow-effect transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-center">
                {/* Profile Image */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover border-2 border-purple-500/30"
                  />
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{member.name}</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.role}</p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full border border-purple-500/30"
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
