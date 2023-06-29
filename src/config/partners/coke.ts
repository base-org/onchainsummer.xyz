import { DAY, Partner } from './types'

const cokeConfig: Partner = {
  slug: 'coke',
  name: 'Coke',
  url: 'https://www.coca-cola.com/',
  description:
    'Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world. Created in Atlanta, Georgia, by Dr. John S. Pemberton, Coca-Cola was first offered as a fountain beverage by mixing Coca-Cola syrup with carbonated water. Coca-Cola was introduced in 1886, patented in 1887, registered as a trademark in 1893 and by 1895 it was being sold in every state and territory in the United States. In 1899, The Coca-Cola Company began franchised bottling operations in the United States.',
  brandColor: '#F40009',
  icon: '/partners/coke/icon.svg',
  iconInverse: '/partners/coke/icon.svg',
  drop: {
    image: '/partners/coke/drop/coke.webp',
    name: 'Coke NFT Drop',
    createdBy: 'Coke',
    description:
      'Coca-Cola is the most popular and biggest-selling soft drink in history, as well as the best-known product in the world. Created in Atlanta, Georgia, by Dr. John S. Pemberton, Coca-Cola was first offered as a fountain beverage by mixing Coca-Cola syrup with carbonated water. Coca-Cola was introduced in 1886, patented in 1887, registered as a trademark in 1893 and by 1895 it was being sold in every state and territory in the United States. In 1899, The Coca-Cola Company began franchised bottling operations in the United States.',
    crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
    address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
    startDate: new Date('2023-06-26').getTime(),
    endDate: new Date('2023-06-26').getTime() + DAY,
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
      title: 'Closer to the Sun',
      endDate: +new Date() + DAY,
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      href: 'https://opensea.io/collection/lootproject',
      title: 'Runaway',
      endDate: +new Date() + DAY,
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      href: 'https://opensea.io/collection/lootproject',
      title: 'Yu-Gi-Oh!',
      endDate: +new Date() + DAY,
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      href: 'https://opensea.io/collection/lootproject',
      title: 'Number 1',
      endDate: +new Date() + DAY,
      price: '0.5',
    },
  ],
}

export default cokeConfig
