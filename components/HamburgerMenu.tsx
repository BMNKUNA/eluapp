'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        className="p-2"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white dark:bg-gray-900"
          >
            <div className="flex flex-col h-full p-4">
              <div className="flex justify-end">
                <Button variant="ghost" className="p-2" onClick={toggleMenu}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow">
                <Link
                  href="/"
                  className={`text-2xl font-bold mb-4 ${
                    pathname === '/' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`text-2xl font-bold mb-4 ${
                    pathname === '/services' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className={`text-2xl font-bold mb-4 ${
                    pathname === '/about' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={`text-2xl font-bold mb-4 ${
                    pathname === '/contact' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className={`text-2xl font-bold mb-4 ${
                    pathname === '/login' ? 'text-pink-800' : 'text-gray-600'
                  }`}
                >
                  Login
                </Link>
                <Link href="/contact">
                  <Button className="bg-pink-800 hover:bg-pink-700 text-white">Enquire</Button>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}