'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage({ params }: { params: { type: string } }) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const isStaff = params.type === 'staff'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log(`${isStaff ? 'Staff' : 'Patient'} login:`, id, password)
    // Redirect to appropriate dashboard or show error
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{isStaff ? 'Staff Login' : 'Patient Login'}</CardTitle>
          <CardDescription>
            {isStaff
              ? 'Enter your staff credentials to access the system.'
              : 'Enter your patient credentials to access your records.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="id">{isStaff ? 'Staff ID' : 'Patient ID'}</Label>
                <Input
                  id="id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
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
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}