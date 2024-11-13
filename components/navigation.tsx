import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logoo.jpg" alt="Logo" width={110} height={60} className="rounded-full" />
              <span className="text-xl font-bold">Eluthandweni Clinic</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-pink-800 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-pink-800 transition-colors">
              Services
            </Link>
            <Link href="/staff" className="text-gray-600 hover:text-pink-800 transition-colors">
              Our Staff
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-pink-800 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-pink-800 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/appointment">
              <Button className="bg-pink-800 hover:bg-pink-700">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}