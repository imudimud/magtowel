import ProductCard from "@/components/common/product-card"

interface RelatedProductsProps {
  currentProductId: number
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Mock data for related products
  // In a real implementation, this would fetch related products from an API or database
  const allProducts = [
    {
      id: 1,
      name: "Classic MagTowel",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "classic-magtowel",
    },
    {
      id: 2,
      name: "Premium MagTowel",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "premium-magtowel",
    },
    {
      id: 3,
      name: "Travel MagTowel",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "travel-magtowel",
    },
    {
      id: 4,
      name: "Sport MagTowel",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      slug: "sport-magtowel",
      salePrice: 29.99,
    },
  ]

  // Filter out the current product
  const relatedProducts = allProducts.filter((product) => product.id !== currentProductId)

  return (
    <section className="w-full bg-[#E6C288]/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#3B7A8B]">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
