const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

export const website = {
  title: 'Onchain Summer',
  description: 'Get onchain this summer to join a multi-week celebration of art, culture, gaming, community, and more.\nNew mints happening daily August 9th - 31st.\nBase is open for everyone; come bask in the Onchain Summer sun.',
  url: 'https://onchainsummer.xyz',
  siteName: 'Onchain Summer',
  logo: {
    url: '/logo.png',
    width: 3840,
    height: 2160,
    alt: 'Onchain Summer',
  },
  twitter: {
    site: '@onchainsummer',
    creator: '@onchainsummer',
  },
  keywords: ['NFT', 'OnchainSummer', 'Coinbase'],
  themeColor: '#ffffff',
  manifest: '/manifest.json',
}
