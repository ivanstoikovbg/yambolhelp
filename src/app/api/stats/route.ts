import { NextResponse } from 'next/server'

export async function GET() {
  const stats = {
    institutions: 3,
    services: 50,
    users: 1000
  }

  return NextResponse.json(stats)
} 