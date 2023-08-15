import coke from '@/config/partners/coke'

export function externalCbnftUrl({ address }: { address: string }) {
  const allDrops = [...coke.drops]
  const showDropOnCbnft = allDrops.find((drop) => {
    return drop.address.toLowerCase() === address.toLowerCase()
  })

  if (!showDropOnCbnft) return

  return `https://nft.coinbase.com/mint/base/${address}?utm_source=onchainsummer.xyz`
}
