export interface OrderItem {
  id: number
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  specialInstructions?: string
}

export type OrderStatus = 'Processing' | 'Delivered' | 'Cancelled'

export interface Order {
  id: string
  date: string
  status: OrderStatus
  items: OrderItem[]
  shipping: ShippingInfo
  total: number
  paymentMethod: string
}
