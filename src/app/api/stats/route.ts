import { NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET() {
  const stats = {
    institutions: 3,
    services: 50,
    users: 1000
  }

  return NextResponse.json(stats)
} 