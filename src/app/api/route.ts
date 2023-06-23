import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const password = searchParams.get('password')

  if (process.env.PASSWORD_PROTECT === password) {
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: { 'Set-Cookie': `ocspw=${password}` },
      }
    )
  }
  return NextResponse.json({ success: false }, { status: 401 })
}
