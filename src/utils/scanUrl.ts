import { isProd } from '@/config/chain'

export const scanUrl = (l1: boolean, hash: string) => {
  return l1
    ? isProd
      ? `https://etherscan.io/tx/${hash}`
      : `https://goerli.etherscan.io/tx/${hash}`
    : isProd
    ? `https://basescan.org/tx/${hash}`
    : `https://goerli.basescan.org/tx/${hash}`
}
