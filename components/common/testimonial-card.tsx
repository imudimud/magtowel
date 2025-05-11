import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

interface TestimonialCardProps {
  testimonial: {
    id: number
    name: string
    rating: number
    text: string
    avatar: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-[#E6C288] text-[#E6C288]" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-[#E6C288] text-[#E6C288]" />)
    }

    return stars
  }

  return (
    <div className="testimonial-card card-hover">
      <div className="flex items-center space-x-4 mb-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#3B7A8B]/20">
          <Image
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            width={50}
            height={50}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-[#3B7A8B]">{testimonial.name}</h4>
          <div className="flex">{renderStars(testimonial.rating)}</div>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial.text}</p>
    </div>
  )
}
