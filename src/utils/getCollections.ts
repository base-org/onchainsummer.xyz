import { paths, setParams } from '@reservoir0x/reservoir-sdk'
import { Drop } from '@/config/partners/types'
import { getNow } from '@/utils/getNow'

export const getCollections = async (drops: Drop[]) => {
  try {
    const now = getNow()
    const contracts = drops.reduce((contracts, drop) => {
      if (drop.address !== '0x' && drop.endDate && now >= drop.endDate) {
        return [...contracts, drop.address]
      }
      return contracts
    }, [] as `0x${string}`[])

    if (contracts.length <= 0) {
      return {}
    }
    const baseUrl = process.env.NEXT_PUBLIC_RESERVOIR_API_URL
      ? process.env.NEXT_PUBLIC_RESERVOIR_API_URL
      : 'https://api-base.reservoir.tools'
    const url = new URL(`${baseUrl}/collections/v6`)
    setParams(url, {
      contract: contracts,
    })

    const response = await fetch(url.href, { next: { revalidate: 0.5 * 60 } })
    const data = await response.json()
    const collections: paths['/collections/v6']['get']['responses']['200']['schema']['collections'] =
      data.collections
    return (
      collections?.reduce((map, collection) => {
        if (collection.primaryContract) {
          map[collection.primaryContract] = collection
        }
        return map
      }, {} as Record<string, (typeof collections)[0]>) || {}
    )
  } catch (e) {
    return {}
  }
}
