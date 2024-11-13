import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Statistics from "@/components/Statistics";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="South African Healthcare"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-pink-600/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quality Healthcare for All South Africans
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Eluthandweni Clinic is committed to providing accessible, compassionate, and expert healthcare services to our community in South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button size="lg" className="text-lg bg-white text-pink-800 hover:bg-gray-100">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/20">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Statistics />

      {/* Services Preview Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care for you and your family</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Primary Healthcare", description: "General consultations and preventive care" },
              { title: "Maternal & Child Health", description: "Prenatal care, immunizations, and pediatric services" },
              { title: "Emergency Services", description: "24/7 emergency medical assistance" },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/services">
                    <Button variant="ghost" className="mt-2">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <Button className="bg-pink-800 hover:bg-pink-700">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Staff Preview Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Dedicated Staff</h2>
            <p className="text-xl text-gray-600">Meet the professionals committed to your health</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Thabo Nkosi", role: "General Practitioner" },
              { name: "Nurse Nomvula Dlamini", role: "Head Nurse" },
              { name: "Dr. Priya Naidoo", role: "Pediatrician" },
            ].map((staff, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={`https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80`}
                    alt={staff.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{staff.name}</CardTitle>
                  <CardDescription>{staff.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/staff">
              <Button className="bg-pink-800 hover:bg-pink-700">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-xl text-gray-600">Stay informed about health topics and clinic updates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "New Pediatric Wing Opening Soon",
                date: "June 15, 2024",
                excerpt: "We're excited to announce the opening of our new pediatric wing, enhancing our ability to care for young patients.",
              },
              {
                title: "COVID-19 Vaccination Drive",
                date: "June 10, 2024",
                excerpt: "Join our upcoming COVID-19 vaccination drive. Protect yourself and your community.",
              },
              {
                title: "Health Tips for Winter",
                date: "June 5, 2024",
                excerpt: "Learn how to stay healthy during the cold winter months with these expert tips from our doctors.",
              },
            ].map((news, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{news.excerpt}</p>
                </CardContent>
                <CardContent>
                  <Button variant="ghost" className="mt-2">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-pink-800 hover:bg-pink-700">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-32 bg-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl">We're here to help with any questions or concerns</p>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-pink-800 hover:bg-gray-100">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}