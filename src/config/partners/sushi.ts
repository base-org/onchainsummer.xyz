import { DAY, Partner } from './types'

const sushiConfig: Partner = {
  slug: 'sushi',
  name: 'Sushi',
  url: 'https://www.sushi.com/',
  description:
    'Sushi is a community driven, decentralized finance (DeFi) platform that lets you trade, earn and borrow crypto assets.',
  brandColor: '#FF6B00',
  icon: '/partners/sushi/icon.svg',
  iconInverse: '/partners/sushi/icon.svg',
  drop: {
    image: '/partners/sushi/drop/sushi.jpeg',
    name: 'Sushi Drop',
    createdBy: 'Meebits',
    description:
      'Sushi is a community driven, decentralized finance (DeFi) platform that lets you trade, earn and borrow crypto assets.',
    crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
    address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
    type: 'external',
    externalLink: 'https://opensea.io/collection/lootproject',
    startDate: new Date('2023-06-28').getTime(),
    endDate: new Date('2023-06-28').getTime() + DAY * 3,
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
  otherDrops: [
    {
      image: '/partners/open-sea/external-drops/1.png',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Bass Face',
      startDate: +new Date(),
      endDate: +new Date() + DAY,
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Collateral Damage',
      startDate: +new Date(),
      endDate: +new Date() + DAY,
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Qunitessence',
      startDate: +new Date(),
      endDate: +new Date() + DAY,
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Bad Trip',
      startDate: +new Date(),
      endDate: +new Date() + DAY,
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
  ],
}

export default sushiConfig
