"use client"

import { useState } from "react"
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Zap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useAnimateOnScroll('nav a', {
    direction: 'down',
    threshold: 0.1,
    once: true
  });

  useAnimateOnScroll('.mobile-menu-button', {
    direction: 'right',
    threshold: 0.1,
    once: true
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold">IOTRIX</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-button block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/members" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Members
          </Link>
          <Link href="/events" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Events
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/members"
                className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Members
              </Link>
              <Link
                href="/events"
                className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex justify-end pt-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

