import { MintType } from '@/components/MintDialog/types'
import { isProd } from './chain'

type DropDetails = {
  crossMintClientId: string
  mintType: MintType
  address: `0x${string}`
}

export const unlimited: DropDetails = isProd
  ? {
      crossMintClientId: 'd3adf3b6-2e94-406a-8196-678281a938ea',
      address: '0x97fCc2cbeC045dD1Bbd3C12f39DF244FDe3fc859',
      mintType: MintType.ThirdWeb,
    }
  : {
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      mintType: MintType.ThirdWeb,
    }

export const limited: DropDetails = isProd
  ? {
      crossMintClientId: '',
      address: '0xBD254879329417D58c70308260DDd9eEcfeFB84d',
      mintType: MintType.ThirdWeb,
    }
  : {
      crossMintClientId: '1ed011f8-e06a-4a88-b55e-b55c1aa65d67',
      address: '0xBf0DAa69194a9D8ec4Aa2F0421D5A6EAd712a83A',
      mintType: MintType.ThirdWeb,
    }

export const limited2: DropDetails = isProd
  ? {
      crossMintClientId: '',
      address: '0xBD254879329417D58c70308260DDd9eEcfeFB84d',
      mintType: MintType.ThirdWeb,
    }
  : {
      crossMintClientId: '1ee04cb8-7480-4884-b220-63ea096b5bf6',
      address: '0xA6710e8bDc60A2DAa3Ec23975d0abef9dEde79d5',
      mintType: MintType.ThirdWeb,
    }

export const zora: DropDetails = isProd
    ? {
        address: '0x3fb678b3b2698db713faa36de1144c6019d82f2b',
        crossMintClientId: '4242753d-1d8a-477e-acbd-de49a400d225',
        mintType: MintType.Zora,
      }
    : {
        address: '0xc410e3291fed14d98b41f29060a56ae2db993894',
        crossMintClientId: '1119fbf5-fa74-4839-8090-bfc3e276f3be',
        mintType: MintType.Zora,
      }
