import { isProd } from './chain'
import {
  fwb,
  parallel,
  coke,
  anotherblock,
  standWithCrypto,
  highlight,
  zora,
  pixelmon,
  showtime,
  mirrorWellness,
  indelible,
  manifold,
  blackbird,
  nestcoin,
  optimism,
  atari,
  rainbowWallet,
  iskra,
  oak,
  openSea,
  fwbBonfire,
} from './partners'

import { Partner } from './partners/types'

export const schedule: Record<string, Partner> = isProd
  ? {
      '2023-08-10': fwb,
      '2023-08-11': parallel,
      '2023-08-12': coke,
      '2023-08-13': anotherblock,
      '2023-08-14': standWithCrypto,
      '2023-08-15': highlight,
      '2023-08-16': zora,
      '2023-08-17': pixelmon,
      '2023-08-18': showtime,
      '2023-08-19': mirrorWellness,
      '2023-08-20': indelible,
      '2023-08-21': manifold,
      '2023-08-22': blackbird,
      '2023-08-23': nestcoin,
      '2023-08-24': optimism,
      '2023-08-25': atari,
      '2023-08-26': rainbowWallet,
      '2023-08-27': iskra,
      '2023-08-28': oak,
      '2023-08-29': openSea,
      '2023-08-30': fwbBonfire,
    }
  : {
      '2023-07-18': fwb,
      '2023-07-19': parallel,
      '2023-07-20': coke,
      '2023-07-21': anotherblock,
      '2023-07-22': standWithCrypto,
      '2023-07-23': highlight,
      '2023-07-24': zora,
      '2023-07-25': pixelmon,
      '2023-07-26': showtime,
      '2023-07-27': mirrorWellness,
      '2023-07-28': indelible,
      '2023-07-29': manifold,
      '2023-07-30': blackbird,
      '2023-07-31': nestcoin,
      '2023-08-01': optimism,
      '2023-08-02': atari,
      '2023-08-03': rainbowWallet,
      '2023-08-04': iskra,
      '2023-08-05': oak,
      '2023-08-06': openSea,
      '2023-07-07': fwbBonfire,
    }
