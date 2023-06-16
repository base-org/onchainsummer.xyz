import { notFound } from 'next/navigation'
import { partners } from '@/config/partners'

import { PartnerHero } from '@/components/PartnerHero/PartnerHero'

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const partner = await getPartner(slug)

  if (!partner) {
    notFound()
  }

  return (
    <main>
      <PartnerHero partner={partner} />
    </main>
  )
}

async function getPartner(slug: string) {
  const partner = partners.find((p) => p.slug === slug)

  return partner
}

export default Page
