import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyZemenaySection } from "@/components/why-zemenay-section"
import { ClientsLogosSection } from "@/components/clients-logos-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <WhyZemenaySection />
      <ClientsLogosSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
