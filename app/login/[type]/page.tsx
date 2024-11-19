'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LoginPageProps = {
  params: Promise<{
    type?: string;
  }>;
};

export default function LoginPage({ params }: LoginPageProps) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Extract the 'type' property from the resolved promise
  const [resolvedParams, setResolvedParams] = useState<{ type?: string }>({});
  params.then(p => setResolvedParams(p));

  const isStaff = resolvedParams?.type === 'staff';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!id || !password) {
      setError('Both fields are required');
      return;
    }

    try {
      // Here you would typically make an API call to authenticate the user
      // For now, we'll just simulate a successful login
      console.log(`${isStaff ? 'Staff' : 'Patient'} login:`, id, password);
      
      // Simulate an API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Redirect based on user type
      router.push(isStaff ? '/staff-dashboard' : '/patient-dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-800">
            {isStaff ? 'Staff Login' : 'Patient Login'}
          </CardTitle>
          <CardDescription>
            {isStaff
              ? 'Enter your staff credentials to access the system.'
              : 'Enter your patient credentials to access your records.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id" className="text-gray-700">
                {isStaff ? 'Staff ID' : 'Patient ID'}
              </Label>
              <Input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <Button 
              type="submit" 
              className="w-full bg-pink-800 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}