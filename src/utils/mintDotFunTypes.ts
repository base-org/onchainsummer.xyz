export type MintStatus = {
  price: string
  isMintable: boolean
  tx: {
    data: string
    quantity: string
    to: `0x${string}`
    tokenId: string
    value: string
  }
}

interface Mint {
  imageURI: string
}

export interface Collection {
  name: string
  contract: string
  mintsLastHour: number
  recentMints: Mint[]
  externalURL: string
  imageURL: string | null
  deployer: string
  mintStatus: MintStatus
}
