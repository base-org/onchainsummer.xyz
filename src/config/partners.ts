const DAY = 1000 * 60 * 60 * 24

export interface NFTDrop {
  address: `0x${string}`
  crossMintClientId: string
  name: string
  description: string
  startDate: number
  endDate: number
  price: string
}

export interface Partner {
  slug: string
  name: string
  url: string
  drop: NFTDrop
}

export const partners: Partner[] = [
  {
    slug: 'open-sea',
    name: 'OpenSea',
    url: 'https://opensea.io/',
    drop: {
      name: 'Space Light Dark',
      description:
        'Discover a world where art meets blockchain technology. Our platform empowers artists, creators, and collectors to participate in the digital revolution of non-fungible tokens (NFTs).',
      crossMintClientId: '57c79280-ce57-466f-9e9b-a4aa26a29fcf',
      address: '0x932937FAAE4Ec7dC59fA96089f28D33709B45204',
      startDate: +new Date() - DAY,
      endDate: +new Date() + DAY,
      price: '0.5',
    },
  },
]
