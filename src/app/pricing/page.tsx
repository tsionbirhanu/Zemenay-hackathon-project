import { Navigation } from "@/components/navigation"
import { PricingHeroSection } from "@/components/pricing-hero-section"
import { PricingTiersSection } from "@/components/pricing-tiers-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <PricingHeroSection />
      <PricingTiersSection />
    </main>
  )
}
