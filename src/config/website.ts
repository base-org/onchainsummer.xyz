const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

export const website = {
  title: 'Onchain Summer',
  description: 'Mint NFTs with OnChainSummer',
  url: 'https://onchainsummer.xyz',
  siteName: 'Onchain Summer',
  logo: {
    url: '/public/logo.png',
    width: 3840,
    height: 2160,
    alt: 'Onchain Summer',
  },
  twitter: {
    site: '@onchainsummer',
    creator: '@onchainsummer',
  },
  keywords: ['NFT', 'OnchainSummer', 'Coinbase'],
  themeColor: '#FF7DCB',
  manifest: '/public/manifest.json',
}
