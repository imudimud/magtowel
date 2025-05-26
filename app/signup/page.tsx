"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    if (!res.ok) {
      const data = await res.json()
      setError(data.message || 'Failed to sign up')
      return
    }
    router.push('/login')
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-6 text-3xl font-bold text-[#3B7A8B]">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90">Create Account</Button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-[#3B7A8B] underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  )
}
