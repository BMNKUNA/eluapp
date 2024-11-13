import { ArrowRight, Calendar, Clock, MapPin, Phone, Star, Baby, Scissors, CreditCard, Newspaper, Users, Ambulance, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Counter } from "@/components/ui/counter";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logoo.jpg"  alt="Logo" width={110} height={60} className="rounded-full" />
                <span className="text-xl font-bold">Eluthandweni Clinic</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:bg-pink-800 transition-colors">
                Services
              </Link>
              <Link href="#staff" className="text-gray-600 hover:bg-pink-800 transition-colors">
                Our Staff
              </Link>
              <Link href="#about" className="text-gray-600 hover:bg-pink-800 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text- bg-pink-800 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Login</Button>
              <Button className="bg-pink-800 hover:bg-pink-700">Book Appointment</Button>
            </div>
          </div>
        </div>
      </nav>

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
              <Button size="lg" className="text-lg bg-white bg-pink-800 hover:bg-gray-100">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-transparent text-white border-white hover:bg-white/20">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Users className="w-8 h-8 mr-2 bg-pink-800" />
                  <Counter end={20000} duration={2} />
                </CardTitle>
                <CardDescription className="text-lg">Patients Treated Over The Years</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Ambulance className="w-8 h-8 mr-2 bg-pink-800" />
                  <span className="text-4xl font-bold bg-pink-800">24/7</span>
                </CardTitle>
                <CardDescription className="text-lg">Emergency Services Available</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Building className="w-8 h-8 mr-2 bg-pink-800" />
                  <Counter end={33} duration={4} />
                </CardTitle>
                <CardDescription className="text-lg">Years Serving the Community</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-baseline">
                  <Star className="w-8 h-8 mr-2 bg-pink-800" />
                  <Counter end={4.9} duration={5} />
                </CardTitle>
                <CardDescription className="text-lg">Patient Satisfaction Rating</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive care for you and your family</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Healthcare",
                description: "General consultations and preventive care",
                icon: "🏥",
              },
              {
                title: "Maternal & Child Health",
                description: "Prenatal care, immunizations, and pediatric services",
                icon: "👨‍👩‍👧",
              },
              {
                title: "HIV/AIDS Treatment",
                description: "Testing, counseling, and antiretroviral therapy",
                icon: "💊",
              },
              {
                title: "Chronic Disease Management",
                description: "Ongoing care for diabetes, hypertension, and more",
                icon: "🫀",
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency medical assistance",
                icon: "🚑",
              },
              {
                title: "Community Outreach",
                description: "Health education and mobile clinic services",
                icon: "🤝",
              },
              {
                title: "Maternity Care",
                description: "Comprehensive care for expectant mothers",
                icon: "🤰",
              },
              {
                title: "Circumcision",
                description: "Safe and professional circumcision services",
                icon: "✂️",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity Section */}
      <section id="maternity" className="py-32 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Maternity Care</h2>
            <p className="text-xl text-gray-600">Supporting you through your pregnancy journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Maternity Care"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Maternity Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Baby className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Prenatal check-ups and screenings</span>
                </li>
                <li className="flex items-start">
                  <Baby className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Childbirth education classes</span>
                </li>
                <li className="flex items-start">
                  <Baby className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Labor and delivery support</span>
                </li>
                <li className="flex items-start">
                  <Baby className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Postpartum care and support</span>
                </li>
              </ul>
              <Button className="mt-6 bg-pink-500 hover:bg-pink-600">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Circumcision Section */}
      <section id="circumcision" className="py-32 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Circumcision Services</h2>
            <p className="text-xl text-gray-600">Safe and professional care for all ages</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Circumcision Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Experienced medical professionals</span>
                </li>
                <li className="flex items-start">
                  <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                  <span>State-of-the-art facilities</span>
                </li>
                <li className="flex items-start">
                  <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Comprehensive aftercare instructions</span>
                </li>
                <li className="flex items-start">
                  <Scissors className="mr-2 h-6 w-6 text-pink-500" />
                  <span>Follow-up appointments</span>
                </li>
              </ul>
              <Button className="mt-6 bg-pink-800 hover:bg-pink-600">Learn More</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                alt="Medical Professional"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Medical Aid Section */}
      <section id="medical-aid" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Accepted Medical Aids</h2>
            <p className="text-xl text-gray-600">We work with major medical aid schemes to ensure you get the care you need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "", logo: "/images/bonitas.png" },
              { name: "", logo: "/images/discovery.jpg" },
              { name: "", logo: "/images/medshield.jpg" },
            ].map((aid, index) => (
              <Card key={index} className="flex flex-col items-center justify-center p-6">
                <Image src={aid.logo} alt={aid.name} width={200} height={80} className="mb-4" />
                <CardTitle>{aid.name}</CardTitle>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Don&apos;t have medical aid? We offer affordable options for those without coverage.</p>
            <Button variant="outline">
              <CreditCard className="mr-2 h-4 w-4" />
              Learn About Our Payment Options
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-32 bg-white">
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
            <Button>
              <Newspaper className="mr-2 h-4 w-4" />
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Dedicated Staff</h2>
            <p className="text-xl text-gray-600">Experienced professionals committed to your health</p>
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
                <CardContent>
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Button className="w-full bg-pink-800 hover:bg-pink-700">Book Consultation</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6" />
                  <span>+27 (0) 11 123 4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6" />
                  <span>123 Mandela Street, Johannesburg, 2000</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6" />
                  <span>Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6" />
                  <span>Emergency services available 24/7</span>
                </div>
              </div>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
                <CardDescription>Fill out the form below and we&apos;ll get back to you</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea className="w-full px-3 py-2 border rounded-md" rows={4}></textarea>
                  </div>
                  <Button className="w-full bg-pink-800 hover:bg-pink-700">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-pink-800 rounded-full" />
                <span className="text-xl font-bold">Eluthandweni Clinic</span>
              </div>
              <p className="text-gray-400">
                Providing quality healthcare services for all South Africans.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Our Staff</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Primary Healthcare</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Maternal & Child Health</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">HIV/AIDS Treatment</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Emergency Services</Link></li>
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
    </div>
  )
}