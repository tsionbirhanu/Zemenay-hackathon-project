import { Navigation } from "@/components/navigation"
import { AboutJourneySection } from "@/components/about-journey-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { PeopleFirstSection } from "@/components/people-first-section"
import { MeetTeamSection } from "@/components/meet-team-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <AboutJourneySection />
      <MissionVisionSection />
      <PeopleFirstSection />
      <MeetTeamSection />
    </main>
  )
}
