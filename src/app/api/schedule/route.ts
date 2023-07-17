import { schedule } from '@/config/schedule'

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(schedule)
}
