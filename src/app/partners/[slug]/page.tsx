import { notFound } from 'next/navigation'
import { partners } from '@/config/partners'

import { PartnerHero } from '@/components/PartnerHero'
import { Separator } from '@/components/Separator'
import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const partner = await getPartner(slug)

  if (!partner) {
    notFound()
  }

  const { drop } = partner

  return (
    <div>
      <main className="relative w-screen overflow-x-hidden">
        <PartnerHero partner={partner} />
        <section className="px-8 lg:px-[120px] font-text ">
          <Separator />
          {drop.writeup.sections.map((section, index) => (
            <div
              key={section.heading}
              className="flex flex-col gap-6 md:gap-10 pt-6 md:pt-10 mx-auto max-w-[800px]"
            >
              <div
                className={clsx(
                  'relative w-full aspect-video ',
                  {
                    'order-3': index === 0,
                  },
                  {
                    'order-1': index !== 0,
                  }
                )}
              >
                <Image
                  src={section.image}
                  alt={`Image for ${section.heading}`}
                  fill
                />
              </div>
              {index === 0 ? (
                <h2 className="text-lg leading-8 md:text-[32px] md:leading-[180%] order-1">
                  {section.heading}
                </h2>
              ) : (
                <h3 className="text-lg leading-8 md:text-2xl md:leading-[180%] order-2">
                  {section.heading}
                </h3>
              )}
              {section.contents.map((content, contentIndex) => (
                <p
                  key={content}
                  className="text-neutral-600 leading-7"
                  style={{
                    order:
                      index === 0
                        ? contentIndex === 0
                          ? 2
                          : 4 + contentIndex
                        : 3 + contentIndex,
                  }}
                >
                  {content}
                </p>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

async function getPartner(slug: string) {
  const partner = partners.find((p) => p.slug === slug)

  return partner
}

export default Page
