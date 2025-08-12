"use client"

import { Button } from "@/components/ui/button"
import { Moon, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/pricing", label: "PRICING" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-from via-purple-900  backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Zemenay" width={40} height={40} className="w-10 h-10" />
            <span className="text-white font-bold tracking-wide ml-2">ZEMENAY</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 text-sm font-medium bg-blue-800 hover:bg-blue-700 border-blue-900 text-white transition-all duration-300"
                >
                  {link.label}
                </Button>
              </Link>
            ))}

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-10 h-10 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <Moon className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full w-10 h-10 text-white hover:bg-blue-700 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-2xl bg-black/80 backdrop-blur-sm border border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white hover:bg-blue-700 transition-all duration-300"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-full justify-start text-white hover:bg-blue-700 transition-all duration-300"
                >
                  <Moon className="h-5 w-5 mr-2" />
                  Dark Mode
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
