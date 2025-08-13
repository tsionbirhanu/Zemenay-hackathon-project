import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative  bg-black/20 bg-gradient-to-b from-purple-900/10 to-black/95 dark:from-purple-900/10 dark:to-black/95 light:from-slate-100 light:to-slate-200 text-white dark:text-white light:text-slate-800 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-blue-900/20 to-transparent dark:from-purple-900/30 dark:via-blue-900/20 dark:to-transparent light:from-blue-100/50 light:via-indigo-100/30 light:to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 dark:bg-blue-400/30 light:bg-blue-500/40 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/40 dark:bg-purple-400/40 light:bg-indigo-500/50 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-cyan-400/20 dark:bg-cyan-400/20 light:bg-cyan-500/30 rounded-full animate-pulse" />
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
            <h4 className="text-xl font-semibold mb-6 text-white dark:text-white light:text-slate-800">Quick Links</h4>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white dark:text-white light:text-slate-800">Legal</h4>
            <div className="space-y-4">
              <Link
                href="/privacy"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white dark:text-white light:text-slate-800">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Zemenay_Tech_Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">Zemenay Tech Solutions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300">
                <Mail className="w-5 h-5" />
                <span className="text-sm">zemenaytechsolutions@gmail.com</span>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-gradient-to-r from-transparent via-purple-500/30 to-transparent dark:via-purple-500/30 light:via-slate-300/50 pt-4">
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-400 light:text-slate-500 text-sm">
              © 2025 Zemenay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
