import { PageContainer } from '@/components/PageContainer'
import Image from 'next/image'
import Link from 'next/link';
import { Heart } from '@/components/icons/Heart'
import { communityData } from '../../config/community'
import { format } from 'date-fns'
import { TwitterModule } from '@/components/TwitterModule'
import { getTweets } from '@/utils/getTweets'
import Grant from '../../../public/grant.png'
import X from '../../../public/x.png'
import { RightArrow } from '@/components/icons/RightArrow';

const Community = async () => {
  const { tweets } = await getPageData()
  return (
    <PageContainer>
      <section className="mx-6 sm:mt-0 mt-4">
        <div>
          <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FF7DCB]">
            <Heart />
          </div>
          <h1 className="text-[46px] md:leading-[50px] my-6 font-display">
            Community
          </h1>
          <p className="text-[20px] md:text-[24px] text-[#151515] font-display">
            Base is for everyone and with that, we want to invite all builders
            to Base as part of Onchain Summer!
          </p>
          <p className="text-[20px] md:text-[24px] text-[#151515] mt-6 font-display">
            We are excited to be partnering with Prop House to run several
            rounds of retro prizes for those building on Base. Holders of a
            variety of Base NFTs will be able to vote in these rounds.
          </p>
        </div>
      </section>
      <section className="mx-6 mt-[84px] mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16">
            <Image
              src={X}
              alt={''}
              fill
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative"
            />
          </div>
          <h3 className="text-[32px] font-display text-[#151515]">Featured</h3>
        </div>
      </section>
      {tweets && Array.isArray(tweets.data) && (
        <section className="mx-6 mt-12">
          <div className=" p-2 md:p-4 bg-gray-200/80 rounded-3xl shadow-large mt-6">
            <TwitterModule tweets={tweets} />
          </div>
        </section>
      )}
      <section className="mx-6 mt-14">
        <div className="flex gap-4 items-end">
          <div className="w-16 h-16">
            <Image
              src={Grant}
              alt={''}
              fill
              className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative"
            />
          </div>
          <div>
            <h3 className="text-[32px] font-display text-[#151515]">
              Base Grants
            </h3>
            <span className="font-mono text-[#444]">
              {communityData?.length} rounds
            </span>
          </div>
          <Link
              href="https://prop.house/base"
              className="hidden [@media(min-width:724px)]:inline-block ml-auto self-center"
              target="_blank"
          >
            <div className="flex h-full items-start sm:items-center gap-6 uppercase text-mono pr-6">
              <span>View Prop House</span>
              <div>
                <RightArrow fill="black" />
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="mx-6 mt-8">
        <div className="p-2 md:p-4 bg-gray-200/80 rounded-3xl shadow-large mt-6 mb-44 md:mb-32 flex gap-2 flex-col">
          {communityData.map(
            ({
              title,
              subTitle,
              image,
              startDate,
              endDate,
              link,
              grantValue,
              grantsAvailable,
              list,
            }) => (
              <a
                href={link}
                target="_blank"
                className="inline-block"
                key={title}
              >
                <div className="flex flex-col mb-4 last:mb-0 md:flex-row md:pr-6 bg-white rounded-2xl">
                  <div className="md:w-[30%]">
                    <Image
                      src={image}
                      alt={''}
                      fill
                      className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none !relative"
                    />
                  </div>
                  <div className="flex flex-col md:w-[70%] justify-between p-4 md:mt-0">
                    <div className="md:flex md:flex-col md:justify-start">
                      <span className="text-sm font-sans uppercase text-[#858585] mb-3">
                        {format(new Date(startDate), 'MMMM d')} -{' '}
                        {format(new Date(endDate), 'MMMM d')}
                      </span>
                      <h2 className="font-display text-[32px]">{title}</h2>
                      <h4 className="text-black font-sans leading-7 mb-4 md:my-4">
                        {subTitle}
                      </h4>
                      <ul className="list-disc ml-6">
                        {list.map((item) => (
                          <li
                            key={item}
                            className="text-sm font-sans text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 md:mt-0 text-sm">
                      <p className="font-mono text-ocs-blue">
                        Total:{' '}
                        {(grantValue * grantsAvailable)
                          .toString()
                          .substring(0, 2)}
                        ETH
                      </p>
                      <p className="font-mono text-ocs-blue">
                        {' '}
                        {grantsAvailable} x{' '}
                        {grantValue.toString().substring(0, 2)}
                        ETH
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </section>
    </PageContainer>
  )
}

async function getPageData() {
  const tweets = await getTweets()

  return { tweets }
}

export default Community
