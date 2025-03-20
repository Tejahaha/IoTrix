"use client"

import { useState, useEffect } from "react"
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Zap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useAnimateOnScroll('nav a', {
    direction: 'down',
    threshold: 0.1,
    once: true
  });

  // Add scroll event listener to handle header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b ${scrolled ? 'shadow-sm' : ''} transition-all duration-200`}>
        <div className="container mx-auto px-4 flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-lg md:text-xl font-bold">IOTRIX</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/members" className="text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Members
            </Link>
            <Link href="/events" className="text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Events
            </Link>
            <Link href="/contact" className="text-sm font-medium py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed inset-0 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute top-0 right-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold">Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="px-4 py-6 flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/members"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              href="/events"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="flex items-center p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  )
}