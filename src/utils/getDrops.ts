import { Drop } from '@/config/partners/types'

export function getDrops(drops: Drop[], dropAddress?: string) {
  const randomDrop = drops[0]

  const featuredDrop = dropAddress
    ? drops.find(
        (drop) => drop.address.toLowerCase() === dropAddress.toLowerCase()
      ) || randomDrop
    : randomDrop

  const remainingDrops = drops.filter((drop) => drop.name !== featuredDrop.name)

  return {
    featuredDrop,
    remainingDrops,
  }
}
