import { partners } from '@/config/partners'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(partners)
}
