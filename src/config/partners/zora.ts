import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const zora: Partner = {
  slug: 'zora',
  name: 'Zora',
  url: 'https://zora.co/',
  description:
    "Zora is bringing the world's imagination onchain. Imagine, mint and enjoy.",
  brandColor: '#000000',
  icon: '/partners/zora/icon.png',
  banner: '/partners/zora/banner-icon.svg',
  // TODO: update digest
  aarweaveDigest: '',
  // TODO: update twitter?
  twitter: '@lo',
  drops: [
    {
      image: '/partners/zora/drops/FINAL_ART-BASE -SummerZorb.png',
      creator: '0xf9FCD1fa7A5a3f2Cf6fe3a33e1262b74C04FeeDa',
      name: 'Summer Zorb',
      externalLink: 'Zora.co',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description:
        "Zora is the best place to imagine, mint and enjoy. Have a great summer! Ours truly,",
      address: '0xbd52c54ab5116b1d9326352f742e6544ffdeb2cb',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      // TODO: update image with S3 bucker URL
      image: '',
      creator: '0x9ED5c1B24478f5069fEbd8359A3869F971C365c3',
      // TODO: confirm collectino name
      name: 'Helmet City: Mecha Gardens',
      externalLink: 'Zora.co',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description:
        "Zora is the best place to imagine, mint and enjoy. Have a great summer! Ours truly,",
      address: '0x0651996B6a6EebD1fc697E5735A2dca541BbE06B',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      // TODO: update image with S3 bucker URL
      image: '',
      creator: '0xa838829224dA02187bf5983f280f8F3abE5FdA06',
      name: `Can't Lose My Cool`,
      externalLink: 'Zora.co',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 18, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description:
        "Zora is the best place to imagine, mint and enjoy. Have a great summer! Ours truly,",
      address: '0x6ee6e88eb8ae143bb9b4b4b0a2269a080a45ef7e',
      mintType: MintType.External,
      crossMintClientId: '',
    },
    {
      image: '/partners/zora/drops/FINAL_ART-MalihaAbidi.jpg',
      creator: '0x7be470E6DC93855338a4Cc85D47447811421C7c8',
      name: 'a paragon',
      externalLink: 'Zora.co',
      type: 'external',
      startDate: Date.UTC(2023, 7, 16, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 31, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      description:
        "Zora is the best place to imagine, mint and enjoy. Have a great summer! Ours truly,",
      address: '0xb999ec5e57000540cbf821addbc69c37bf506f9f',
      mintType: MintType.External,
      crossMintClientId: '',
    },
  ],
}

export default zora
