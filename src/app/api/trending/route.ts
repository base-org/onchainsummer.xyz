import axios from 'axios'
import { NextResponse } from 'next/server'

const API_URL = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_URL
const API_KEY = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_KEY
const CHAIN = process.env.NEXT_PUBLIC_MINT_DOT_FUN_CHAIN_ID

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedWallet = searchParams.get('connectedWallet')

  const url = `${API_URL}/collections?connectedWallet=${connectedWallet}&chain=${CHAIN}`

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
