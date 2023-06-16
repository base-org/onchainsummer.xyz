const DAY = 1000 * 60 * 60 * 24

export interface NFTDrop {
  image: string
  address: `0x${string}`
  crossMintClientId: string
  name: string
  createdBy: string
  description: string
  startDate: number
  endDate: number
  price: string
}

export interface Partner {
  slug: string
  name: string
  url: string
  description: string
  brandColor: string
  icon: string
  iconInverse: string
  drop: NFTDrop
}

export const partners: Partner[] = [
  {
    slug: 'open-sea',
    name: 'OpenSea',
    url: 'https://opensea.io/',
    description:
      'Our cutting-edge platform not only empowers but also inspires artists, creators, and collectors, enabling them to actively engage and thrive in the groundbreaking digital revolution of non-fungible tokens (NFTs).',
    brandColor: '#2081E2',
    icon: '/partners/open-sea/icon.svg',
    iconInverse: '/partners/open-sea/icon-inverse.svg',
    drop: {
      image: '/partners/open-sea/drop/main.png',
      name: 'Space Light Dark',
      createdBy: 'Charlie Baker',
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
