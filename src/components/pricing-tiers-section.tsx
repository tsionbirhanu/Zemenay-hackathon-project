import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingTiersSection() {
  const pricingTiers = [
    {
      name: "Community",
      subtitle: "Perfect for personal projects and learning",
      price: "Free",
      features: ["Basic website template", "Community support", "Documentation access", "Limited features"],
      buttonText: "GET STARTED",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "WordPress Solution",
      subtitle: "Tailored WordPress sites for growing businesses",
      price: "Custom Pricing",
      features: [
        "Professional WordPress site",
        "Custom theme & branding",
        "Responsive & mobile-friendly",
        "SEO optimization",
        "Content management system",
      ],
      buttonText: "REQUEST QUOTE",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "Complete digital solutions for organizations",
      price: "Let's Talk",
      features: [
        "Full-scale digital ecosystem",
        "Custom web applications",
        "Advanced integrations",
        "Dedicated support team",
        "Scalable infrastructure",
        "Ongoing maintenance",
      ],
      buttonText: "GET STARTED",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                tier.popular
                  ? "bg-gradient-to-b from-purple-900/60 to-blue-900/60 border-2 border-purple-500/50 glow-effect"
                  : "card-gradient hover:glow-effect"
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center">
                {/* Tier name and subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">{tier.name}</h3>
                <p className="text-gray-300 text-sm mb-8">{tier.subtitle}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-white font-heading">{tier.price}</div>
                  {tier.name === "WordPress Solution" && (
                    <div className="text-gray-400 text-sm mt-2">Based on project requirements</div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 text-left">
                      <div className="flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full rounded-full py-3 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.buttonVariant === "default"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                      : "bg-transparent border-2 border-purple-500/50 hover:border-purple-400 text-white hover:bg-purple-500/10"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
