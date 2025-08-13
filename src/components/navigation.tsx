"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/pricing", label: "PRICING" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/30 dark:bg-black/20 backdrop-blur-md border-b border-border dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="Zemenay"
              width={40}
              height={40}
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-foreground dark:text-white font-bold tracking-wide ml-2 text-xl">ZEMENAY</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 text-sm font-medium light-card-gradient text-white dark:bg-blue-600/80 dark:hover:bg-blue-500 dark:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full w-10 h-10 text-foreground dark:text-white hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full w-10 h-10 text-foreground dark:text-white hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 p-6 rounded-2xl bg-background/80 dark:bg-black/80 backdrop-blur-sm border border-border dark:border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground dark:text-white hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="border-t border-border dark:border-white/10 pt-4">
                <Button
                  variant="ghost"
                  onClick={toggleDarkMode}
                  className="w-full justify-start text-foreground dark:text-white hover:bg-foreground/10 dark:hover:bg-white/10 transition-all duration-300"
                >
                  {isDarkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
