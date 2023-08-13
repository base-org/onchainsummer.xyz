import { MintType } from '@/components/MintDialog/types'
import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { keccak256, toHex, Hex } from 'viem'

const standWithCrypto: Partner = {
  slug: 'standwithcrypto',
  name: 'Stand with Crypto',
  url: 'https://www.coinbase.com/public-policy/advocacy/standwithcrypto',
  description:
    'Show your support for crypto innovation and advocacy by participating in a virtual Day of Action, with each action unlocking future rewards, and the opportunity to mint a special Day of Action x Stand with Crypto shield.',
  brandColor: 'rgb(1, 76, 236)',
  icon: '/partners/stand-with-crypto/icon.png',
  banner: '/partners/stand-with-crypto/banner-icon.svg',
  aarweaveDigest: '',
  twitter: '@standwithCrypt',
  drops: [
    {
      image: '/partners/stand-with-crypto/drops/standWithCrypto1.mp4',
      creator: '0x4B0e6c1f66cA950B22e9Eaa8f075F0944a705B03',
      name: 'Stand with Crypto Supporter',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0.00435',
      mintType: MintType.ThirdWeb,
      address: '0x874Ad7c13935F73c7bbE94efBD8e766De2A585Eb',
      crossMintClientId: '7acea657-ad34-46cb-8f10-368c455408b0',
      dataSuffix: {
        value: keccak256(toHex('US')).slice(0, 10) as Hex,
        label: `I am a U.S. citizen or lawful permanent resident (i.e., a green card
          holder). [Privacy Policy](https://www.coinbase.com/legal/privacy)`,
      },
      description: `This collectible commemorates the launch of the Stand With Crypto Alliance on August 14, 2023.

Priced at 0.00435 ETH, this represents the 435 congressional districts in the U.S. All proceeds benefit the Alliance.`
    },
    {
      image: '/partners/stand-with-crypto/drops/standWithCrypto2.jpg',
      creator: '0x4B0e6c1f66cA950B22e9Eaa8f075F0944a705B03',
      name: 'Join Stand With Crypto',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://www.standwithcrypto.org/?action=join-stand-with-crypto',
      mintType: MintType.External,
      address: '0x',
      crossMintClientId: '',
    },
    {
      image: '/partners/stand-with-crypto/drops/standWithCrypto3.jpg',
      creator: '0x4B0e6c1f66cA950B22e9Eaa8f075F0944a705B03',
      name: 'Tell your representative to support pro-crypto policies',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://www.standwithcrypto.org/?action=email-representative',
      mintType: MintType.External,
      address: '0x',
      crossMintClientId: '',
    },
    {
      image: '/partners/stand-with-crypto/drops/standWithCrypto4.jpg',
      creator: '0x4B0e6c1f66cA950B22e9Eaa8f075F0944a705B03',
      name: 'Apply for a 5 ETH grant',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://prop.house/base/stand-with-crypto',
      mintType: MintType.External,
      address: '0x',
      crossMintClientId: '',
    },
    {
      image: '/partners/stand-with-crypto/drops/standWithCrypto5.jpg',
      creator: '0x4B0e6c1f66cA950B22e9Eaa8f075F0944a705B03',
      name: 'Tweet your support for #StandwithCrypto',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 14, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 12, 1, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
      externalLink: 'https://twitter.com/intent/tweet?&text=I%20%23standwithcrypto.%20So%20can%20you.%20Join%20standwithcrypto.org',
      mintType: MintType.External,
      address: '0x',
      crossMintClientId: '',
    },
  ],
}

export default standWithCrypto
