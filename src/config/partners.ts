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
  writeup: {
    sections: {
      heading: string
      contents: string[]
      image: string
    }[]
  }
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
  externalDrops: {
    image: string
    href: string
    title: string
    endDate: number
    price: string
  }[]
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
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      startDate: +new Date() - DAY,
      endDate: +new Date() + DAY,
      price: '0.0001',
      writeup: {
        sections: [
          {
            heading: 'This is a heading',
            contents: [
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.',
              'Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.',
              'Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            ],
            image: '/partners/open-sea/drop/section-1.png',
          },
          {
            heading: 'This is a sub-heading',
            contents: [
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.',
              'Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.',
              'Luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            ],
            image: '/partners/open-sea/drop/section-2.png',
          },
        ],
      },
    },
    externalDrops: [
      {
        image: '/partners/open-sea/external-drops/1.png',
        href: 'https://opensea.io/collection/lootproject',
        title: 'The Magic Abstract',
        endDate: +new Date() + DAY,
        price: '0.5',
      },
      {
        image: '/partners/open-sea/external-drops/2.png',
        href: 'https://opensea.io/collection/lootproject',
        title: 'The Magic Abstract',
        endDate: +new Date() + DAY,
        price: '0.5',
      },
      {
        image: '/partners/open-sea/external-drops/3.png',
        href: 'https://opensea.io/collection/lootproject',
        title: 'The Magic Abstract',
        endDate: +new Date() + DAY,
        price: '0.5',
      },
      {
        image: '/partners/open-sea/external-drops/4.png',
        href: 'https://opensea.io/collection/lootproject',
        title: 'The Magic Abstract',
        endDate: +new Date() + DAY,
        price: '0.5',
      },
    ],
  },
]
