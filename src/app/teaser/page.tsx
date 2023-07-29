'use client'

import { PageContainer } from '@/components/PageContainer'
import { Teaser as TeaserComp } from '@/components/Teaser'

export default function Teaser() {
  return (
    <div className="bg-teaser-gradient h-fit flex-grow">
      <TeaserComp />
    </div>
  )
}
