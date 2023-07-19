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

export interface Collection {
  name: string
  contract: string
  mintsLastHour: number
  externalURL: string
  imageURL: string | null
  deployer: string
  mintStatus: MintStatus
  images: Media
}
