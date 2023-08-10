import { NextResponse } from 'next/server'
import { Collection } from '@/utils/mintDotFunTypes'

const API_URL = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_URL
const API_KEY = process.env.NEXT_PUBLIC_MINT_DOT_FUN_API_KEY

interface MediaObject {
  ethPrice: string
  imageURI: string
  mimeType: string
  mintTime: string
  title: string
  tokenID: string
  value: string
}

interface Media {
  contract: string
  media: MediaObject[]
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedWallet = searchParams.get('connectedWallet')
  const chainId = searchParams.get('chain')
  const url = `${API_URL}/collections?connectedWallet=${connectedWallet}&chain=${chainId}`

  try {
    let media: Media[] = []

    const response = await fetch(url, {
      // Revalidate every minute
      next: { revalidate: 1 * 60 },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })

    if (!response.ok) throw new Error('Network response was not ok.')

    const data = await response.json()

    if (!data) throw new Error('No data returned.')

    if (data.collections && Array.isArray(data.collections)) {
      for (let collection of data.collections) {
        const mediaResponse = await fetch(
          `${API_URL}/collections/${collection.contractAddress}/media`,
          {
            // Revalidate every minute
            next: { revalidate: 1 * 60 },
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        )

        if (!response.ok) throw new Error('Network response was not ok.')

        const mediaData = await mediaResponse.json()

        if (!mediaData) throw new Error('No mediaData returned.')

        media.push({
          contract: collection.contract,
          media: [...mediaData.media],
        })
      }
    }

    const newData = data?.collections.map((collection: Collection) => {
      const mints = media.find(
        (media) => media.contract === collection.contract
      )

      return {
        name: collection.name,
        contract: collection.contract,
        mintsLastHour: collection.mintsLastHour,
        mintStatus: collection.mintStatus,
        externalURL: collection.externalURL,
        imageURL: collection.imageURL,
        deployer: collection.deployer,
        images: mints,
      }
    })

    return NextResponse.json({ collections: newData })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
