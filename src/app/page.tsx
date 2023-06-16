import { Button } from '@/components/Button'
import { PartnerHero } from '@/components/PartnerHero/PartnerHero'
import { partners } from '@/config/partners'

const Home = async () => {
  const partner = await getCurrentPartner()
  return (
    <main className="flex h-full flex-col items-center justify-between relative overflow-x-hidden">
      <PartnerHero partner={partner} />
    </main>
  )
}

async function getCurrentPartner() {
  // TODO: get current partner from the current date
  const partner = partners[0]

  return partner
}

export default Home
