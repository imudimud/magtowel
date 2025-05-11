import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import ProductGallery from "@/components/sections/product-gallery"
import ProductInfo from "@/components/sections/product-info"
import RelatedProducts from "@/components/sections/related-products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params

  // Mock data for product details
  // In a real implementation, this would fetch data from an API or database
  const products = {
    "classic-magtowel": {
      id: 1,
      name: "Classic MagTowel",
      price: 29.99,
      description:
        "The original MagTowel that started it all. Perfect for everyday use at the gym, beach, or during outdoor activities.",
      features: [
        "Embedded magnets for secure attachment to metal surfaces",
        "Ultra-absorbent microfiber material",
        "Quick-drying and lightweight",
        "Compact and portable design",
        "Machine washable",
      ],
      specifications: {
        material: "80% Polyester, 20% Polyamide",
        dimensions: "40 x 20 inches (100 x 50 cm)",
        weight: "250g",
        magnets: "4 neodymium magnets",
      },
      careInstructions:
        "Machine wash cold with like colors. Do not use bleach or fabric softener. Tumble dry low or hang to dry.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      colors: ["Blue", "Black", "Gray", "Teal"],
      sizes: ["Small", "Medium", "Large", "X-Large"],
      reviews: [
        {
          id: 1,
          name: "Ahmed K.",
          rating: 5,
          date: "2023-08-15",
          text: "This towel is amazing! The magnets are strong and it stays in place during my entire workout.",
        },
        {
          id: 2,
          name: "Leila M.",
          rating: 4,
          date: "2023-07-22",
          text: "Great quality and the magnetic feature is very useful. Would recommend!",
        },
      ],
    },
    "premium-magtowel": {
      id: 2,
      name: "Premium MagTowel",
      price: 39.99,
      description:
        "Our premium version with extra features for the discerning customer. Larger size and more magnets for enhanced stability.",
      features: [
        "6 high-strength neodymium magnets",
        "Larger size for more coverage",
        "Premium microfiber with enhanced absorbency",
        "Anti-bacterial treatment",
        "Reinforced edges for durability",
      ],
      specifications: {
        material: "85% Polyester, 15% Polyamide with anti-bacterial treatment",
        dimensions: "50 x 30 inches (125 x 75 cm)",
        weight: "350g",
        magnets: "6 neodymium magnets",
      },
      careInstructions:
        "Machine wash cold with like colors. Do not use bleach or fabric softener. Tumble dry low or hang to dry.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      colors: ["Blue", "Black", "Gray", "Teal"],
      sizes: ["Medium", "Large", "X-Large"],
      reviews: [
        {
          id: 1,
          name: "Sarah L.",
          rating: 5,
          date: "2023-09-05",
          text: "Worth every penny! The premium version is noticeably better than other towels I've used.",
        },
      ],
    },
    "travel-magtowel": {
      id: 3,
      name: "Travel MagTowel",
      price: 24.99,
      description:
        "Compact and lightweight, perfect for travelers and those on the go. Folds into a small pouch for easy storage.",
      features: [
        "Ultra-compact design with carrying pouch",
        "2 strategically placed magnets",
        "Fast-drying travel-friendly material",
        "Lightweight construction",
        "Includes carabiner clip for attachment to bags",
      ],
      specifications: {
        material: "80% Polyester, 20% Polyamide",
        dimensions: "30 x 15 inches (75 x 38 cm)",
        weight: "150g",
        magnets: "2 neodymium magnets",
      },
      careInstructions: "Hand wash or machine wash gentle cycle. Air dry for best results.",
      images: [
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
        "/placeholder.svg?height=600&width=600",
      ],
      colors: ["Blue", "Black", "Teal"],
      sizes: ["Small", "Medium"],
      reviews: [
        {
          id: 1,
          name: "Karim B.",
          rating: 5,
          date: "2023-08-30",
          text: "Perfect for my travels! Takes up almost no space in my bag and works great.",
        },
      ],
    },
  }

  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 md:px-6">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-[#3B7A8B]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-[#3B7A8B]">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#3B7A8B]">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Product Description */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-[#3B7A8B]">Product Description</h2>
            <p className="mb-6 text-gray-700">{product.description}</p>

            <h3 className="mb-4 text-xl font-bold">Key Features</h3>
            <ul className="mb-8 list-inside list-disc space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="mb-4 text-xl font-bold">Specifications</h3>
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-2">
                  <span className="font-medium capitalize">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-bold">Care Instructions</h3>
            <p className="mb-8 text-gray-700">{product.careInstructions}</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-[#3B7A8B]">Customer Reviews</h2>

            {product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="rounded-lg border p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#3B7A8B"
                              className="h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            )}

            <div className="mt-8">
              <Link href="#" className="inline-flex items-center text-[#3B7A8B] hover:underline">
                Write a Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />

      {/* Back to Shop */}
      <div className="container mx-auto px-4 py-8 md:px-6">
        <Link href="/shop" className="inline-flex items-center text-[#3B7A8B] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>
      </div>
    </main>
  )
}
