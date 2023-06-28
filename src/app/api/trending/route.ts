import axios from 'axios'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { ethers } from 'ethers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedWallet = searchParams.get('connectedWallet')

  try {
    const response = await axios.get(
      `https://api.mint.fun/api/v1/collections?connectedWallet=${connectedWallet}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.MINT_FUN_API_KEY}`,
        },
      }
    )

    return NextResponse.json(response?.data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
