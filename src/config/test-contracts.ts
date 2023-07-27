import { isProd } from './chain'

type DropDetails = {
  crossMintClientId: string
  address: `0x${string}`
}

export const unlimited: DropDetails = isProd
  ? {
      crossMintClientId: '',
      address: '0x97fCc2cbeC045dD1Bbd3C12f39DF244FDe3fc859',
    }
  : {
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
    }

export const limited: DropDetails = isProd
  ? {
      crossMintClientId: '',
      address: '0xBD254879329417D58c70308260DDd9eEcfeFB84d',
    }
  : {
      crossMintClientId: '1ed011f8-e06a-4a88-b55e-b55c1aa65d67',
      address: '0xBf0DAa69194a9D8ec4Aa2F0421D5A6EAd712a83A',
    }

export const limited2: DropDetails = isProd
  ? {
      crossMintClientId: '',
      address: '0xBD254879329417D58c70308260DDd9eEcfeFB84d',
    }
  : {
      crossMintClientId: '1ee04cb8-7480-4884-b220-63ea096b5bf6',
      address: '0xA6710e8bDc60A2DAa3Ec23975d0abef9dEde79d5',
    }
