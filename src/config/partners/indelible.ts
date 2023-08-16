import { Partner } from './types'
import { CAMPAIGN_HOUR, CAMPAIGN_MINUTE } from '@/config/constants'
import { MintType } from '@/components/MintDialog/types'

const indelible: Partner = {
  slug: 'indelible',
  name: 'Indelible',
  url: 'https://indelible.xyz/',
  description:
    "Collect art curated by Indelible Labs and learn how they're empowering artists who want to take their ideas onchain.",
  brandColor: 'rgb(0, 224, 191)',
  icon: '/partners/indelible/icon.png',
  banner: '/partners/indelible/banner-icon.svg',
  aarweaveDigest: 'XzNUxTbsDb-TbDEEloEHTfRfKPDpVSXAKfORPTfj9zc',
  twitter: '@indelible_labs',
  drops: [
    {
      image: '/partners/indelible/drops/drop-1.jpeg',
      creator: '0xd444448ed791De5c3635280D78D60d15E34fb73f',
      name: 'The Guardian',
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://indelible.xyz/mint/degenapeacademy',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: '/partners/indelible/drops/drop-2.gif',
      creator: '0x63989a803b61581683B54AB6188ffa0F4bAAdf28',
      name: 'Pabs and Rupert Scootin',
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://indelible.xyz/mint/pablostanley',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: '/partners/indelible/drops/drop-3.jpeg',
      creator: '0x759c4ebebe5071db56c78b6c7bae53c15cb2f6d8',
      name: 'Learning To Double Dutch',
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://indelible.xyz/mint/ambervittoria',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
    {
      image: '/partners/indelible/drops/drop-4.png',
      creator: '0xb70cc02cbd58c313793c971524ad066359fd1e8e',
      name: 'Glass Punk',
      address: '0x0',
      crossMintClientId: '',
      mintType: MintType.External,
      externalLink: 'https://indelible.xyz/mint/piv',
      type: 'erc-721',
      startDate: Date.UTC(2023, 7, 20, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      endDate: Date.UTC(2023, 7, 22, CAMPAIGN_HOUR, CAMPAIGN_MINUTE, 0, 0),
      price: '0',
    },
  ],
}

export default indelible
