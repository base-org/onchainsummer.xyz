import { notFound, redirect } from 'next/navigation'
import compareAsc from 'date-fns/compareAsc'
import format from 'date-fns/format'
import { schedule } from '@/config/schedule'
import { PartnerHero } from '@/components/PartnerHero'
import { ReactMarkdown } from '@/components/ReactMarkdown'
import React from 'react'
import { DropCard } from '@/components/DropCard'
import { SDK } from '@/utils/graphqlSdk'
import { PageContainer } from '@/components/PageContainer'
import { Metadata, ResolvingMetadata } from 'next'
import { website } from '@/config/website'
import { getDrops } from '@/utils/getDrops'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Page = async ({ params, searchParams }: Props) => {
  const slug = params.slug
  const { partner, article } = await getPartner(slug)

  const dropAddressParam = searchParams.drop

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  if (!partner) {
    notFound()
  }

  const { drops, name, icon } = partner

  const { featuredDrop, remainingDrops } = getDrops(drops, dropAddress)

  return (
    <PageContainer subNavBgColor={partner.brandColor}>
      <main className="flex h-full flex-col items-center justify-between relative px-6 pb-36 xl:px-0 gap-10 md:gap-[54px]">
        <PartnerHero
          partner={partner}
          headline={featuredDrop}
          staticHeadline={!!dropAddress}
        />
        <section className="w-full font-text p-1">
          <div className="mb-4 mx-4">
            <div className="-mr-4">
              <div className="overflow-scroll hide-scrollbar">
                <div className="flex overflow-x-scroll md:overflow-x-auto w-max hide-scrollbar">
                  <ul className="flex flex-row gap-8 last:pr-4">
                    {remainingDrops.map((drop) => (
                        <li key={drop.name} className="flex flex-col">
                          <DropCard
                              {...drop}
                              partner={name}
                              partnerIcon={icon}
                          />
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 bg-gray-200/80 w-full rounded-3xl">
            <div className="p-6 md:px-16 lg:px-32 md:py-[54px] rounded-2xl break-words m-4">
              <h2 className="text-[32px] leading-8 md:text-[46px] md:leading-[180%] font-display">
                {article.content.title}
              </h2>
              <ReactMarkdown content={article.content.body} />
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug
  const dropAddressParam = searchParams.drop

  const dropAddress = Array.isArray(dropAddressParam)
    ? dropAddressParam[0]
    : dropAddressParam

  // fetch data
  const { partner } = await getPartner(slug)

  const { featuredDrop } = getDrops(partner.drops, dropAddress)

  return {
    title: partner.name,
    description: partner.description,
    openGraph: {
      title: `${partner.name} | Onchain Summer`,
      description: partner.description,
      url: `https://onchainsummer.xyz/partner/${partner.slug}${
        dropAddress ? `?drop=${dropAddress}` : ''
      }`,
      siteName: 'Onchain Summer',
      images: [
        {
          url: featuredDrop.image,
          alt: featuredDrop.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${partner.name} | Onchain Summer`,
      description: partner.description,
      site: website.twitter.site,
      creator: partner.twitter,
      images: [featuredDrop.image],
    },
  }
}

async function getPartner(slug: string, dropAddress?: string | string[]) {
  const now = new Date().getTime()
  const today = format(now - 4 * 60 * 60 * 1000, 'yyyy-MM-dd')

  const date = Object.keys(schedule).find(
    (date) => schedule[date].slug === slug
  )

  if (!date) {
    return notFound()
  }

  const comparison = compareAsc(new Date(today), new Date(date))

  if (comparison < 0) {
    redirect('/#drops')
  }

  const partner = schedule[date]

  if (!partner) {
    return notFound()
  }

  const digest = await SDK.GetMirrorTransactions({
    digest: partner.aarweaveDigest,
  })

  const articleId = digest.transactions.edges[0].node.id

  const res = await fetch(`https://arweave.net/${articleId}`)

  const article = (await res.json()) as {
    content: { body: string; title: string }
  }

  return { partner, article }
}

export default Page
