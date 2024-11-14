import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pink-800 rounded-full" />
              <span className="text-xl font-bold">Accepted Medical Aids</span>
            </div>
            <p className="text-gray-400 hover:text-white">
              Bonitas Medical Aid
            </p>
            <p className="text-gray-400 hover:text-white">Gems Medical Aid</p>
            <p className="text-gray-400 hover:text-white">MedShield</p>
            <p className="text-gray-400 hover:text-white">Discovery Health</p>
            <p className="text-gray-400 hover:text-white">Momentum Health</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/home" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#primary-healthcare" className="text-gray-400 hover:text-white">Primary Healthcare</Link></li>
              <li><Link href="/services#maternal-child-health" className="text-gray-400 hover:text-white">Maternal & Child Health</Link></li>
              <li><Link href="/services#hiv-aids-treatment" className="text-gray-400 hover:text-white">HIV/AIDS Treatment</Link></li>
              <li><Link href="/services#emergency-services" className="text-gray-400 hover:text-white">Emergency Services</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400"
              />
              <Button className="w-full bg-pink-800 hover:bg-pink-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Eluthandweni Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}