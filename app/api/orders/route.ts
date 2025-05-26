import { NextResponse } from 'next/server'
import type { Order } from '@/lib/order'
import fs from 'fs/promises'
import path from 'path'

const ORDERS_FILE = path.join(process.cwd(), 'db', 'orders.json')

async function readOrders(): Promise<Order[]> {
  try {
    const data = await fs.readFile(ORDERS_FILE, 'utf8')
    return JSON.parse(data) as Order[]
  } catch {
    return []
  }
}

async function writeOrders(orders: Order[]) {
  await fs.mkdir(path.dirname(ORDERS_FILE), { recursive: true })
  await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2))
}

export async function GET() {
  const orders = await readOrders()
  return NextResponse.json(orders)
}

export async function POST(req: Request) {
  const data = await req.json()
  const orders = await readOrders()

  const total = data.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)

  const newOrder: Order = {
    id: `ORD-${Date.now()}`,
    date: new Date().toISOString(),
    status: 'Processing',
    paymentMethod: data.paymentMethod || 'cash',
    items: data.items,
    shipping: data.shipping,
    total,
  }

  orders.push(newOrder)
  await writeOrders(orders)

  return NextResponse.json(newOrder, { status: 201 })
}
