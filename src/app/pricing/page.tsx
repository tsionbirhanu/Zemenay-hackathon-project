import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { PricingHeroSection } from "@/components/pricing-hero-section"
import { PricingTiersSection } from "@/components/pricing-tiers-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-background dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      <Navigation />
      <PricingHeroSection />
      <PricingTiersSection />
      <Footer />
    </main>
  )
}
