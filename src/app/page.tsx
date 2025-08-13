import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyZemenaySection } from "@/components/why-zemenay-section"
import { ClientsLogosSection } from "@/components/clients-logos-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-background dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <WhyZemenaySection />
      <ClientsLogosSection />
      <Footer />
    </main>
  )
}
