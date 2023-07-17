import { schedule } from '@/config/schedule'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug // 'a', 'b', or 'c'

  if (!slug) {
    return NextResponse.json({ success: false }, { status: 404 })
  }

  const date = Object.keys(schedule).find(
    (date) => schedule[date].slug === slug
  )

  if (!date) {
    return NextResponse.json({ success: false }, { status: 404 })
  }

  const partner = schedule[date]

  return NextResponse.json(partner)
}
