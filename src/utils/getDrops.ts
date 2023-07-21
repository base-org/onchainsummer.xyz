import { Drop } from '@/config/partners/types'
import { randomIntFromInterval } from './randomIntFromInterval'

export function getDrops(drops: Drop[], dropAddress?: string) {
  const dropsLength = drops.length

  const randomDropIndex = randomIntFromInterval(0, dropsLength - 1)
  const randomDrop = drops[randomDropIndex]

  const featuredDrop = dropAddress
    ? drops.find((drop) => drop.address === dropAddress) || randomDrop
    : randomDrop

  const remainingDrops = drops.filter((drop) => drop.name !== featuredDrop.name)

  return {
    featuredDrop,
    remainingDrops,
  }
}
