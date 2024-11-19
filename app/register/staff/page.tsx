'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StaffRegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [staffId, setStaffId] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Handle OTP sending
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    console.log('Sending OTP to:', email)
    setOtpSent(true)
  }

  // Handle staff registration
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (!otp) {
      setError('Please enter the OTP sent to your email.')
      return
    }
    setError(null)
    // Logic to verify OTP and register the staff
    console.log('Registering staff:', { name, email, staffId, password, otp })
    // If successful, redirect to login page or show success message
    router.push('/login/staff')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Staff Registration</CardTitle>
          <CardDescription>Register as a new staff member</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={otpSent ? handleRegister : handleSendOtp}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="staffId">Staff ID</Label>
                <Input
                  id="staffId"
                  type="text"
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {otpSent && (
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-pink-800 hover:bg-pink-700">
                {otpSent ? 'Register' : 'Send OTP'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}