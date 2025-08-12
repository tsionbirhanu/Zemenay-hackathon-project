import { Navigation } from "@/components/navigation"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { EducationSection } from "@/components/education-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ServicesHeroSection />
      <ServicesGridSection />
      <EducationSection />
    </main>
  )
}
