import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background/50 dark:bg-black/20 dark:bg-gradient-to-b dark:from-purple-900/10 dark:to-black/95 text-foreground dark:text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-secondary/5 to-transparent dark:from-purple-900/30 dark:via-blue-900/20 dark:to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-indigo-500/50 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-cyan-500/30 rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Image src="/logo.svg" alt="Zemenay" width={48} height={48} className="w-12 h-12" />
              <span className="text-2xl font-bold">Zemenay</span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-foreground dark:text-white">Quick Links</h4>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-foreground dark:text-white">Legal</h4>
            <div className="space-y-4">
              <Link
                href="/privacy"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-foreground dark:text-white">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Zemenay_Tech_Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">Zemenay Tech Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span className="text-sm">zemenaytechsolutions@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border dark:border-t dark:border-purple-500/30 pt-4">
          <div className="text-center">
            <p className="text-foreground/60 dark:text-gray-400 text-sm">
              © 2025 Zemenay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}