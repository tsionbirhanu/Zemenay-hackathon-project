import { Navigation } from "@/components/navigation"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-background dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navigation />
      <ServicesHeroSection />
      <ServicesGridSection />
      <EducationSection />
      <Footer />
    </main>
  )
}
