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
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Affiliates Section */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-bold">Our Affiliates & Sponsors</h2>
        <div className="overflow-hidden whitespace-nowrap bg-gray-900 p-4 rounded-md">
          <div className="ticker-content inline-flex space-x-8 animate-ticker">
            {affiliatesSponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex items-center space-x-2">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="text-gray-400 hover:text-white">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {/* Medical Aids */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Medical Aids</h3>
          <ul className="space-y-2">
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
          <ul className="space-y-2">
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100046969886329">
                <a className="flex items-center space-x-2">
                  <FaFacebook size={24} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Facebook</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="flex items-center space-x-2">
                  <FaTwitter size={24} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Twitter</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/eluthandweni_maternity_clinic/?hl=en-gb">
                <a className="flex items-center space-x-2">
                  <FaInstagram size={24} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">Instagram</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="flex items-center space-x-2">
                  <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
                  <span className="text-gray-400 hover:text-white">LinkedIn</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/home"><a className="text-gray-400 hover:text-white">Home</a></Link></li>
            <li><Link href="/about"><a className="text-gray-400 hover:text-white">About Us</a></Link></li>
            <li><Link href="/services"><a className="text-gray-400 hover:text-white">Services</a></Link></li>
            <li><Link href="/contact"><a className="text-gray-400 hover:text-white">Contact</a></Link></li>
          </ul>
        </div>

        {/* Newsletter */}
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

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Eluthandweni Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
}
