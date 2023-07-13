import { isAddress } from 'viem'

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address) ? address : ''
  if (!parsed) {
    return ''
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}
