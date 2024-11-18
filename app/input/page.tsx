'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function InputPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
      <div className="w-full max-w-md bg-card p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Input Page</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" className="w-full mt-1" />
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" className="w-full mt-1" />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}