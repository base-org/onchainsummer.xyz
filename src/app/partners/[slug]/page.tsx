import { notFound, redirect } from 'next/navigation'
import compareAsc from 'date-fns/compareAsc'
import format from 'date-fns/format'
import { schedule } from '@/config/schedule'

import { PartnerHero } from '@/components/PartnerHero'
import React from 'react'
import { DropCard } from '@/components/DropCard'
import { SDK } from '@/utils/graphqlSdk'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import unreset from './unreset.module.scss'

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const { partner, article } = await getPartner(slug)

  if (!partner) {
    notFound()
  }

  const { otherDrops, name, icon } = partner

  return (
    <div className="-mt-[100px] md:-mt-14 w-full max-w-6xl mx-auto">
      <main className="flex h-full flex-col items-center justify-between relative px-6 pb-36 xl:px-0 gap-10 md:gap-[54px]">
        <PartnerHero partner={partner} />
        <section className="w-full font-text">
          <div className="flex flex-col gap-6 md:gap-10 bg-gray-200/80 w-full rounded-xl">
            <div className="md:px-16 lg:px-32 md:py-[54px] m-4 md:border md:border-gray-400 md:border-1 rounded-xl break-words">
              <h2 className="text-lg leading-8 md:text-[32px] md:leading-[180%]">
                {article.content.title}
              </h2>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className={unreset.unreset}
              >
                {article.content.body}
              </ReactMarkdown>
            </div>
            <div className="mb-4 mx-4">
              <div className="-mr-4">
                <div className="overflow-scroll hide-scrollbar">
                  <div className="flex overflow-x-scroll md:overflow-x-auto w-max hide-scrollbar">
                    <ul className="flex flex-row gap-8 last:pr-4">
                      {otherDrops.map((drop) => (
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
          </div>
        </section>
      </main>
    </div>
  )
}

async function getPartner(slug: string) {
  const now = new Date().getTime()
  const today = format(new Date(now), 'yyyy-MM-dd')

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
    digest: partner.drop.aarweaveDigest,
  })

  const articleId = digest.transactions.edges[0].node.id

  const res = await fetch(`https://arweave.net/${articleId}`)

  const article = (await res.json()) as {
    content: { body: string; title: string }
  }

  return { partner, article }
}

export default Page
