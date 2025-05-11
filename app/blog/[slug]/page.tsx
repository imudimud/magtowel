import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params

  // Mock blog posts data
  const blogPosts = {
    "science-behind-magtowel-magnetic-technology": {
      id: 1,
      title: "The Science Behind MagTowel's Magnetic Technology",
      content: [
        "At MagTowel, we've revolutionized the humble towel by incorporating powerful neodymium magnets into our design. But how exactly does this technology work, and what makes it so effective?",
        "### The Power of Neodymium",
        "Our MagTowels use neodymium magnets, which are the strongest type of permanent magnets commercially available. These rare-earth magnets are made from an alloy of neodymium, iron, and boron (Nd₂Fe₁₄B) and can produce magnetic fields exceeding 1.4 teslas – that's strong enough to lift more than 1,000 times their own weight!",
        "We strategically place these magnets within the towel's corners and edges, ensuring they're securely encased in waterproof, corrosion-resistant housing. This placement allows the towel to attach firmly to any ferromagnetic surface (like gym equipment, metal beach chairs, or car exteriors) while maintaining the towel's comfort and functionality.",
        "### Engineering Challenges We Overcame",
        "Developing the MagTowel wasn't without its challenges. Our engineering team had to solve several key problems:",
        "1. **Weight Balance**: Adding magnets without making the towel too heavy or unbalanced",
        "2. **Waterproofing**: Ensuring the magnets remain effective even after repeated washing",
        "3. **Safety**: Creating a product that's safe for all users, including those with electronic medical devices",
        "4. **Durability**: Designing a system where the magnets won't detach or damage the fabric over time",
        "Through extensive testing and refinement, we developed our proprietary MagSecure™ technology that addresses all these concerns while maintaining the towel's softness and absorbency.",
        "### Real-World Applications",
        "The magnetic technology in MagTowel opens up numerous practical applications:",
        "- **Gym workouts**: Attach your towel to metal equipment for easy access during your workout",
        "- **Beach days**: Secure your towel to a metal chair or umbrella pole to prevent it from blowing away",
        "- **Camping**: Hang your towel on your vehicle or metal camping equipment for quick drying",
        "- **Home use**: Attach to refrigerators, washing machines, or other metal surfaces for convenient access",
        "### The Future of Magnetic Textiles",
        "MagTowel represents just the beginning of what's possible with magnetic textile technology. Our research and development team is constantly exploring new applications and improvements, from enhanced magnetic strength to additional product lines that leverage this innovative approach.",
        "By combining cutting-edge magnetic technology with high-quality textiles, we've created a product that solves real-world problems while maintaining the comfort and functionality you expect from a premium towel.",
      ].join("\n\n"),
      date: "May 15, 2023",
      author: "Sarah Johnson",
      authorTitle: "Founder & CEO",
      authorBio:
        "Sarah founded MagTowel after experiencing frustration with traditional towels during her outdoor adventures. With a background in textile engineering, she developed the innovative magnetic solution.",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Technology",
      image: "/placeholder.svg?height=600&width=1200",
      relatedPosts: [2, 3, 7],
    },
    "5-ways-to-use-magtowel-outdoor-activities": {
      id: 2,
      title: "5 Ways to Use Your MagTowel During Outdoor Activities",
      content: [
        "MagTowel isn't just for the gym - it's the perfect companion for all your outdoor adventures. Here are five creative ways to use your MagTowel during outdoor activities that will make you wonder how you ever managed without it.",
        "### 1. Hiking and Trail Running",
        "When you're on the trail, every ounce matters, and versatile gear is essential. Your MagTowel can serve multiple purposes:",
        "- **Attach it to your metal water bottle or backpack frame** for quick access when you need to wipe away sweat",
        "- **Use it as a cooling wrap** by soaking it in a stream and attaching it to your metal trekking poles or backpack",
        "- **Create an impromptu shade** by securing it to your vehicle at the trailhead for a post-hike cool-down spot",
        'One MagTowel user, Karim, shares: "During my hike in the Atlas Mountains, I attached my MagTowel to my trekking poles to create a small shade area during my lunch break. It was a game-changer in the midday heat!"',
        "### 2. Beach Days",
        "We've all experienced the frustration of a beach towel that won't stay put. MagTowel solves this problem elegantly:",
        "- **Secure it to metal beach chairs** so it won't blow away in the coastal breeze",
        "- **Attach it to your cooler or metal beach umbrella pole** for easy access after a swim",
        "- **Create a privacy screen** by connecting multiple MagTowels to metal supports",
        "The magnetic feature is particularly useful at beaches with strong winds, keeping your towel exactly where you want it.",
        "### 3. Camping and Outdoor Cooking",
        "MagTowel shines at the campsite in numerous ways:",
        "- **Attach it to your vehicle** for quick hand-drying while cooking or cleaning",
        "- **Secure it to your metal cooler or camp stove** (when cool) for easy access",
        "- **Use it as a clean food prep surface** by laying it flat on a metal table",
        "- **Hang it on your tent's metal poles** to dry overnight after an evening wash",
        "The ability to quickly attach and detach your towel makes campsite organization much simpler.",
        "### 4. Water Sports",
        "Whether you're kayaking, canoeing, or stand-up paddleboarding, MagTowel is your perfect companion:",
        "- **Attach it to metal parts of your kayak or canoe** for quick access when you need to dry your hands",
        "- **Secure it to your vehicle at the put-in point** so you have a clean, dry towel waiting when you return",
        "- **Use it on metal boat surfaces** without worrying about it blowing into the water",
        "The quick-drying properties of MagTowel make it ideal for water sports where you need a towel that won't stay soggy all day.",
        "### 5. Outdoor Workouts",
        "Take your fitness routine outdoors with MagTowel:",
        "- **Attach it to metal park equipment** during outdoor circuit training",
        "- **Secure it to your vehicle during roadside workouts** for easy access",
        "- **Use it as a clean surface for ground exercises** by laying it flat",
        "- **Keep it attached to metal bike frames** during cycling breaks",
        "The versatility of MagTowel makes it an essential part of any outdoor fitness enthusiast's gear.",
        "### Bonus Tip: Photography Helper",
        "Here's a creative use we've heard from our customers: Use your MagTowel as a photography aid by attaching it to metal surfaces to create diffused lighting or as a clean surface to place gear on during outdoor photo shoots.",
        "The magnetic technology in MagTowel opens up countless possibilities for outdoor use. We're always amazed by the creative ways our customers find to use their MagTowels in the wild!",
      ].join("\n\n"),
      date: "April 28, 2023",
      author: "Ahmed Benali",
      authorTitle: "Head of Product Design",
      authorBio:
        "Ahmed brings over 15 years of product design experience to MagTowel. He's passionate about creating functional products that solve real-world problems.",
      authorImage: "/placeholder.svg?height=100&width=100",
      category: "Lifestyle",
      image: "/placeholder.svg?height=600&width=1200",
      relatedPosts: [1, 4, 7],
    },
  }

  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  // Mock related posts
  const allPosts = [
    {
      id: 1,
      title: "The Science Behind MagTowel's Magnetic Technology",
      excerpt:
        "Discover how our innovative magnetic technology works and why it's revolutionizing the way people use towels.",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      slug: "science-behind-magtowel-magnetic-technology",
    },
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

  const relatedPosts = allPosts.filter((p) => post.relatedPosts.includes(p.id))

  // Function to render markdown-like content
  const renderContent = (content: string) => {
    const paragraphs = content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="mt-8 mb-4 text-xl font-bold">
            {paragraph.replace("### ", "")}
          </h3>
        )
      } else if (paragraph.startsWith("- ")) {
        return (
          <ul key={index} className="my-4 list-disc pl-6 space-y-2">
            {paragraph.split("\n").map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        )
      } else if (paragraph.match(/^\d+\. /)) {
        return (
          <ol key={index} className="my-4 list-decimal pl-6 space-y-2">
            {paragraph.split("\n").map((item, i) => (
              <li key={i} className="text-gray-700">
                {item.replace(/^\d+\. /, "")}
              </li>
            ))}
          </ol>
        )
      } else if (paragraph.includes("**")) {
        return (
          <p key={index} className="my-4 text-gray-700">
            {paragraph.split("**").map((part, i) => {
              return i % 2 === 0 ? part : <strong key={i}>{part}</strong>
            })}
          </p>
        )
      } else {
        return (
          <p key={index} className="my-4 text-gray-700">
            {paragraph}
          </p>
        )
      }
    })

    return <div>{paragraphs}</div>
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#29ABE2] to-[#008080] py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center space-x-2">
              <span className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm">
              <span className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative mx-auto -mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Blog Content */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Social Share */}
            <div className="mb-8 flex items-center justify-between">
              <Link href="/blog" className="flex items-center text-[#29ABE2] hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Share:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4 text-[#1877F2]" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">More sharing options</span>
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">{renderContent(post.content)}</article>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-500">Tags:</span>
              <Link
                href={`/blog/tag/magtowel`}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
              >
                MagTowel
              </Link>
              <Link
                href={`/blog/tag/${post.category.toLowerCase()}`}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
              >
                {post.category}
              </Link>
              <Link
                href={`/blog/tag/innovation`}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200"
              >
                Innovation
              </Link>
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-lg border bg-gray-50 p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{post.author}</h3>
                  <p className="text-[#29ABE2]">{post.authorTitle}</p>
                  <p className="mt-2 text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-[#29ABE2]">Related Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="rounded-lg border bg-white overflow-hidden shadow-sm">
                  <div className="relative aspect-video">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold line-clamp-2">
                      <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#29ABE2]">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">{relatedPost.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-lg bg-[#29ABE2] p-8 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Experience MagTowel for Yourself</h2>
            <p className="mt-4">
              Ready to try the innovative magnetic towel that's changing the way people stay dry? Shop our collection
              today.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" className="bg-white text-[#29ABE2] hover:bg-gray-100">
                <Link href="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
