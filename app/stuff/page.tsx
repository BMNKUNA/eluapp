import Image from "next/image"
import { Star } from 'lucide-react'
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

export default function StaffPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section id="staff" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Dedicated Staff</h1>
              <p className="text-xl text-gray-600">Experienced professionals committed to your health</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Thabo Nkosi", role: "General Practitioner" },
                { name: "Nurse Nomvula Dlamini", role: "Head Nurse" },
                { name: "Dr. Priya Naidoo", role: "Pediatrician" },
                { name: "Dr. Sipho Mabaso", role: "Obstetrician" },
                { name: "Nurse Zanele Khumalo", role: "Midwife" },
                { name: "Dr. Fatima Patel", role: "Cardiologist" },
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
      </main>

      <Footer />
    </div>
  )
}