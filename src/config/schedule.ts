import { isProd } from './chain'
import {
  coke,
  fwb,
  parallel,
  anotherblock,
  standWithCrypto,
  highlight,
  zora,
  pixelmon,
  showtime,
  mirrorWellness,
  indelible,
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
    }
