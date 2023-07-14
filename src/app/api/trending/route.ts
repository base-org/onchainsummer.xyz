import axios from 'axios'
import { NextResponse } from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_URL
const API_KEY = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedWallet = searchParams.get('connectedWallet')
  const chain = searchParams.get('chain')

  const url = `${API_URL}/collections?connectedWallet=${connectedWallet}&chain=${chain}`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    return NextResponse.json(response?.data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
