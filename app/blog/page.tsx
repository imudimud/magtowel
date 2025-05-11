import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  // Mock blog posts data
  const featuredPost = {
    id: 1,
    title: "The Science Behind MagTowel's Magnetic Technology",
    excerpt:
      "Discover how our innovative magnetic technology works and why it's revolutionizing the way people use towels.",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    category: "Technology",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "science-behind-magtowel-magnetic-technology",
  }

  const blogPosts = [
    {
      id: 2,
      title: "5 Ways to Use Your MagTowel During Outdoor Activities",
      excerpt:
        "From hiking to beach days, learn how to maximize the functionality of your MagTowel during various outdoor adventures.",
      date: "April 28, 2023",
      author: "Ahmed Benali",
      category: "Lifestyle",
      image: "/placeholder.svg?height=400&width=600",
      slug: "5-ways-to-use-magtowel-outdoor-activities",
    },
    {
      id: 3,
      title: "Behind the Scenes: How MagTowels Are Made",
      excerpt:
        "Take a tour of our manufacturing process and see the care and quality that goes into every MagTowel we produce.",
      date: "April 10, 2023",
      author: "Leila Mansouri",
      category: "Company",
      image: "/placeholder.svg?height=400&width=600",
      slug: "behind-the-scenes-how-magtowels-are-made",
    },
    {
      id: 4,
      title: "Customer Stories: How MagTowel Changed My Gym Routine",
      excerpt:
        "Read testimonials from customers who have incorporated MagTowel into their fitness routines with great results.",
      date: "March 22, 2023",
      author: "Karim Hadj",
      category: "Testimonials",
      image: "/placeholder.svg?height=400&width=600",
      slug: "customer-stories-magtowel-gym-routine",
    },
    {
      id: 5,
      title: "The Environmental Impact of MagTowel vs. Traditional Towels",
      excerpt:
        "Learn how MagTowel's durability and materials make it a more environmentally friendly choice compared to conventional towels.",
      date: "March 5, 2023",
      author: "Sarah Johnson",
      category: "Sustainability",
      image: "/placeholder.svg?height=400&width=600",
      slug: "environmental-impact-magtowel-vs-traditional-towels",
    },
    {
      id: 6,
      title: "MagTowel's Giveback Initiative: One Year Later",
      excerpt:
        "A look at the impact our Giveback Initiative has had in its first year and the communities we've been able to help.",
      date: "February 18, 2023",
      author: "Ahmed Benali",
      category: "Giveback",
      image: "/placeholder.svg?height=400&width=600",
      slug: "magtowel-giveback-initiative-one-year-later",
    },
    {
      id: 7,
      title: "Care Guide: How to Maintain Your MagTowel for Years to Come",
      excerpt:
        "Follow these simple care instructions to ensure your MagTowel stays in perfect condition for as long as possible.",
      date: "February 3, 2023",
      author: "Leila Mansouri",
      category: "Product Care",
      image: "/placeholder.svg?height=400&width=600",
      slug: "care-guide-maintain-magtowel-years-to-come",
    },
  ]

  // Mock categories
  const categories = [
    { name: "All", count: 10 },
    { name: "Technology", count: 3 },
    { name: "Lifestyle", count: 4 },
    { name: "Company", count: 2 },
    { name: "Testimonials", count: 3 },
    { name: "Sustainability", count: 2 },
    { name: "Giveback", count: 1 },
    { name: "Product Care", count: 2 },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#29ABE2] to-[#008080] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">MagTowel Blog</h1>
            <p className="mt-4 text-lg md:text-xl">
              Insights, tips, and stories about our products, technology, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-2xl font-bold text-[#29ABE2]">Featured Article</h2>
          <div className="rounded-lg border overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    {featuredPost.author}
                  </span>
                </div>
                <h3 className="text-2xl font-bold md:text-3xl">{featuredPost.title}</h3>
                <p className="mt-4 text-gray-600">{featuredPost.excerpt}</p>
                <div className="mt-6">
                  <Button asChild className="bg-[#29ABE2] hover:bg-[#29ABE2]/90">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                {/* Search */}
                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-semibold">Search</h3>
                  <div className="relative">
                    <Input type="search" placeholder="Search articles..." className="pr-10" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex justify-between text-gray-600 hover:text-[#29ABE2]"
                        >
                          <span>{category.name}</span>
                          <span className="text-gray-400">({category.count})</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <li key={post.id} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${post.slug}`} className="font-medium hover:text-[#29ABE2] line-clamp-2">
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2">
                {blogPosts.map((post) => (
                  <article key={post.id} className="rounded-lg border bg-white overflow-hidden shadow-sm">
                    <div className="relative aspect-video">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#29ABE2]">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <User className="mr-1 h-4 w-4 text-gray-500" />
                          <span>{post.author}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`} className="text-[#29ABE2] hover:underline text-sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" className="bg-[#29ABE2] text-white hover:bg-[#29ABE2]/90">
                    1
                  </Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-[#29ABE2] sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with our latest articles, product news, and exclusive offers.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-[#29ABE2] hover:bg-[#29ABE2]/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
