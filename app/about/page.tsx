import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TawkToChat from "@/components/TawkToChat"; // Import TawkToChat

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TawkToChat /> {/* Add TawkToChat here */}

      <main className="pt-16">
        {/* About Section */}
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
                  At Eluthandweni Clinic, our mission is to provide accessible, high-quality healthcare services to all members of our community...
                </p>
                {/* Rest of the content */}
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Dedicated Staff</h2>
              <p className="text-xl text-gray-600">Our experienced professionals are here to provide the best care</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Staff cards */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
