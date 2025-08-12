import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black/90 text-white py-16 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand and Contact section */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Image src="/images/logo.png" alt="Zemenay" width={40} height={40} className="w-10 h-10 mb-4" />
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Zemenay.tech.solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>Zemenay Tech Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <span>zemenaytech.solutions@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  HOME
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  ABOUT
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  SERVICES
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  PRICING
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300">
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-white">LEGAL</h4>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-300">
                PRIVACY AND POLICIES
              </Link>
              <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors duration-300">
                TERMS OF SERVICES
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 Zemenay. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
