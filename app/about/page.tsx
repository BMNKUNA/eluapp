import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Eluthandweni Clinic</h1>
              <p className="text-xl text-gray-600">Committed to providing quality healthcare for all South Africans</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/clinic-exterior.jpg"
                  alt="Eluthandweni Clinic Exterior"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Eluthandweni Clinic, our mission is to provide accessible, high-quality healthcare services to all members of our community. We strive to improve the health and well-being of our patients through compassionate care, cutting-edge medical practices, and community engagement.
                </p>
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 1991, Eluthandweni Clinic has been serving the Johannesburg community for over three decades. What started as a small community health center has grown into a comprehensive medical facility, offering a wide range of services to meet the diverse needs of our patients.
                </p>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Compassion: We treat every patient with kindness and empathy</li>
                  <li>Excellence: We strive for the highest standards in medical care</li>
                  <li>Integrity: We act with honesty and transparency in all our dealings</li>
                  <li>Inclusivity: We provide care without discrimination</li>
                  <li>Innovation: We embrace new technologies and methods to improve patient care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}