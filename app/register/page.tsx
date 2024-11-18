'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const router = useRouter()

  const handleStaffRegistration = () => {
    router.push('/register/staff')
  }

  const handlePatientRegistration = () => {
    router.push('/register/patient')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Choose your registration type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleStaffRegistration} className="w-full bg-pink-800 hover:bg-pink-700">
            Register as Staff
          </Button>
          <Button onClick={handlePatientRegistration} className="w-full bg-blue-600 hover:bg-blue-700">
            Register as Patient
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}