import { DAY, Partner } from './types'

const openSeason: Partner = {
  slug: 'open-season',
  name: 'Duck Season',
  url: 'https://opensea.io/',
  description:
    'It’s the season of giving, and we’re giving you the chance to win a one-of-a-kind NFT from the OpenSea team. We’ve created 10 unique NFTs, and we’re giving them away to 10 lucky winners. All you have to do is enter your email address below for a chance to win.',
  brandColor: '#31FEA6',
  icon: '/partners/open-sea/icon.svg',
  iconInverse: '/partners/open-sea/icon-inverse.svg',
  drop: {
    image: '/partners/open-sea/drop/duck.jpeg',
    creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
    name: 'Duck Season NFT Drop',
    aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
    createdBy: 'Duck Season',
    description:
      'Duck season, rabbit season, duck season, rabbit season, duck season, rabbit season... FIRE!',
    crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
    address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
    type: 'erc-721',
    startDate: new Date('2023-06-27').getTime(),
    endDate: new Date('2023-06-27').getTime() + DAY * 2,
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
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
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
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
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
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
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
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
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

export default openSeason
