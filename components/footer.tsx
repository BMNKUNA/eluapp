import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const medicalAids = [
    { name: "Bonitas Medical Aid", icon: "/images/bonitas.png" },
    { name: "Gems Medical Aid", icon: "/images/gems.png" },
    { name: "MedShield", icon: "/images/medshield.png" },
    { name: "Discovery Health", icon: "/images/discovery.png" },
    { name: "Momentum Health", icon: "/images/momentum.png" },
  ];

  const affiliatesSponsors = [
    { name: "Afrocentric Group", logo: "/images/afrocentric.png" },
    { name: "Wits University", logo: "/images/wits.png" },
    { name: "Department of Health", logo: "/images/department-health.png" },
    { name: "Flourish Mom Network", logo: "/images/flourishmom.png" },
    { name: "Hollywood Foundations", logo: "/images/hollywoodbets.png" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-6 lg:px-20">
      {/* Affiliates & Sponsors Section */}
      <div className="mb-12">
        <h2 className="text-center text-xl font-semibold">Our Affiliates & Sponsors</h2>
        <div className="relative mt-4 overflow-hidden">
          <div className="ticker-content flex space-x-12 animate-ticker">
            {affiliatesSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center space-x-3 text-gray-300 hover:text-white"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span>{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Medical Aids */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Medical Aids</h3>
          <ul className="space-y-3">
            {medicalAids.map((aid) => (
              <li key={aid.name} className="flex items-center space-x-2">
                <Image
                  src={aid.icon}
                  alt={aid.name}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-gray-400 hover:text-white">{aid.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3">
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100046969886329" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <FaFacebook size={20} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Facebook</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <FaTwitter size={20} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Twitter</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/eluthandweni_maternity_clinic/?hl=en-gb" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <FaInstagram size={20} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Instagram</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a className="flex items-center space-x-2">
                  <FaLinkedin size={20} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">LinkedIn</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/home" legacyBehavior>
                <a className="text-gray-400 hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-400 hover:text-white">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-gray-400 hover:text-white">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-400 hover:text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and health tips.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500"
            />
            <Button className="w-full bg-pink-800 hover:bg-pink-700">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-400">
        <p>&copy; 2024 Eluthandweni Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
