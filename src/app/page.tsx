import { Button } from '@/components/Button'
import { DropCard } from '@/components/DropCard'
import { PartnerHero } from '@/components/PartnerHero'
import { Separator } from '@/components/Separator'
import { partners } from '@/config/partners'

const Home = async () => {
  const partner = await getCurrentPartner()
  const { drop, externalDrops, name, icon } = partner
  return (
    <div>
      <main className="flex h-full flex-col items-center justify-between relative overflow-x-hidden">
        <PartnerHero partner={partner} />
        <section className="px-8 lg:px-[120px] font-text w-full">
          <Separator />
          <h2 className="text-lg font-medium leading-8 mt-6 lg:mt-12">
            {drop.writeup.sections[0].heading}
          </h2>
          <div className="mt-6 lg:mt-3 lg:columns-2 lg:gap-20">
            <p>{drop.writeup.sections[0].contents[0]}</p>
            <Separator className="mt-6 lg:hidden" />
            <Button variant="SECONDARY" className="w-full mt-6">
              Read More
            </Button>
          </div>
          <Separator className="hidden lg:block mt-12" />
        </section>
        <section className="px-8 lg:px-20 mt-16 pb-10 lg:mt-20 lg:pb-20 w-full">
          <h2 className="sr-only">External Drops</h2>
          <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {externalDrops.map((externalDrop) => (
              <li key={externalDrop.title}>
                <DropCard {...externalDrop} partner={name} partnerIcon={icon} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

async function getCurrentPartner() {
  // TODO: get current partner from the current date
  const partner = partners[0]

  return partner
}

export default Home
