import { PageContainer } from '@/components/PageContainer'
import { Heart } from '@/components/icons/Heart'
import { communityData } from '../../config/community'
import Image from 'next/image'
import { format } from 'date-fns'

const Community = () => {
  return (
    <PageContainer>
      <section className="mx-6 mt-36 md:mt-28">
        <div>
          <div className="flex justify-center items-center h-[64px] w-[64px] rounded-2xl bg-[#FF7DCB]">
            <Heart />
          </div>
          <h1 className="text-[46px] md:leading-[50px] my-6 font-display">
            Community
          </h1>
          <p className="text-xl md:text-2xl font-light font-display">
            Base is for everyone and with that, we want to invite all builders
            to Base as part of Onchain Summer!
          </p>
          <p className="text-xl md:text-2xl mt-6 font-light font-display">
            We are excited to be partnering with Prop House to run several
            rounds of retro prizes for those building on Base. Holders of a
            variety of Base NFTs will be able to vote in these rounds.
          </p>
        </div>
      </section>
      <section className="mx-6 p-2 md:p-4 bg-gray-200/80 rounded-3xl shadow-large mt-12 mb-44 md:mb-32">
        {communityData.map(
          ({
            title,
            subTitle,
            image,
            startDate,
            endDate,
            grantValue,
            grantsAvailable,
            list,
          }) => (
            <div
              className="flex flex-col mb-4 last:mb-0 md:flex-row md:pr-6 bg-white rounded-2xl"
              key={title}
            >
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
                      <li key={item} className="text-sm font-sans text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 md:mt-0 text-sm">
                  <p className="font-mono text-ocs-blue">
                    Total:
                    {(grantValue * grantsAvailable).toString().substring(0, 2)}ETH
                  </p>
                  <p className="font-mono text-ocs-blue">
                    {' '}
                    {grantsAvailable} x ${grantValue.toString().substring(0, 2)}
                    ETH
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </PageContainer>
  )
}

export default Community
