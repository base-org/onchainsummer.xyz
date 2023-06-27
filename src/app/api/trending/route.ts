import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.mint.fun/api/v1/collections?connectedWallet=''`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MINT_FUN_API_KEY}`,
        },
      }
    )

    return NextResponse.json(response?.data)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching data' })
  }
}
