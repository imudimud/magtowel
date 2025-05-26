"use client"

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (res?.error) {
      setError('Invalid email or password')
    } else {
      router.push('/')
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <h1 className="mb-6 text-3xl font-bold text-[#3B7A8B]">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
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
          <Button type="submit" className="bg-[#E6C288] text-[#3B7A8B] hover:bg-[#E6C288]/90">Login</Button>
        </form>
        <p className="mt-4 text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#3B7A8B] underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
