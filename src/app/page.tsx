import format from 'date-fns/format'
import compareAsc from 'date-fns/compareAsc'
import Image from 'next/image'
import { SDK } from '@/utils/graphqlSdk'
import { Button } from '@/components/Button'
import { DropCard } from '@/components/DropCard'
import { PartnerHero } from '@/components/PartnerHero'
import { schedule } from '@/config/schedule'
import { Tabs, TabsComponentProps } from '@/components/Tabs'
import { ReactMarkdown } from '@/components/ReactMarkdown'
import { PageContainer } from '@/components/PageContainer'
import { getDrops } from '@/utils/getDrops'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const Home = async ({ searchParams }: Props) => {
  const { partner, tabs, article } = await getPageData()
  const { drops, name, icon } = partner

  const dropAddressParam = searchParams.drop

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  const { featuredDrop, remainingDrops } = getDrops(drops, dropAddress)

  return (
    <PageContainer>
      <div className="flex h-full flex-col items-center justify-between relative px-6 pb-36 xl:px-0 gap-10 md:gap-[54px]">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={!!dropAddress}
        />
        <section className="w-full">
          <div className="bg-gray-200/80 p-4 rounded-3xl">
            <div className="mb-4 flex gap-2 items-end">
              <div className="relative z-20 h-20 w-20">
                <Image src={icon} alt={`${partner} Icon`} fill />
              </div>
              <div className="">
                <h2 className="text-[32px]">{name}</h2>
                <p className="text-[16px] uppercase text-[#858585]">
                  Collection
                </p>
              </div>
            </div>
            <div className="-mr-4">
              <div className="overflow-scroll hide-scrollbar">
                <div className="flex overflow-x-scroll md:overflow-x-auto w-max hide-scrollbar">
                  <ul className="flex flex-row gap-4 md:gap-8 last:pr-4">
                    {remainingDrops.map((drop) => (
                      <li key={drop.name} className="flex flex-col">
                        <DropCard {...drop} partner={name} partnerIcon={icon} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 rounded-xl md:px-6 pt-4 mt-4 md:py-7 break-words">
              <div className="basis-1/2">
                <h2 className="text-[32px] font-display">
                  {article.content.title}
                </h2>
              </div>
              <div className="basis-1/2">
                <ReactMarkdown
                  content={`${article.content.body.slice(0, 500)} ...`}
                />
                <Button
                  className="uppercase border border-1 border-black !bg-transparent !text-black mt-6 !w-[136px] !py-2"
                  href={`/partners/${partner.slug}`}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full" id="drops">
          <Tabs {...tabs} />
        </section>
      </div>
    </PageContainer>
  )
}

const INITIAL_TABS: TabsComponentProps = {
  upcomingDrops: [],
  pastDrops: [],
}

async function getPageData() {
  const now = new Date().getTime()
  const today = format(new Date(now), 'yyyy-MM-dd')
  const featuredPartner = schedule[today] || schedule[Object.keys(schedule)[0]]

  const tabs: TabsComponentProps = Object.keys(schedule).reduce((acc, date) => {
    const comparison = compareAsc(now, new Date(date).getTime())
    const partner = schedule[date]

    if (comparison === 0 || typeof partner === 'undefined') {
      return acc
    }

    if (partner === featuredPartner) {
      return {
        ...acc,
      }
    }

    if (comparison === -1) {
      if (acc.upcomingDrops.find((drop) => drop.slug === partner.slug)) {
        return acc
      }
      return {
        ...acc,
        upcomingDrops: [...acc.upcomingDrops, partner],
      }
    }

    if (acc.pastDrops.find((drop) => drop.slug === partner.slug)) {
      return acc
    }

    return {
      ...acc,
      pastDrops: [...acc.pastDrops, partner],
    }
  }, INITIAL_TABS)

  const digest = await SDK.GetMirrorTransactions({
    digest: featuredPartner.aarweaveDigest,
  })

  const articleId = digest.transactions.edges[0].node.id

  const res = await fetch(`https://arweave.net/${articleId}`)

  const article = (await res.json()) as {
    content: { body: string; title: string }
  }

  return { partner: featuredPartner, tabs, article }
}

export default Home
