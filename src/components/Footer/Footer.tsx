import Link from 'next/link'
import { MirrorLogo } from '@/components/icons/Mirror'

export const Footer = () => {
  return (
    <section className="bg-footer-background-gradient">
      <footer className="flex flex-col mx-6 bg-white bg-bottom rounded-xl md:mb-10 relative bottom-10 font-mono">
        <div className="h-10 bg-footer-gradient rounded-t-xl"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:gap-72">
            <div className="md:basis-2/5">
              <p className="mt-6 mb-2 md:mb-8 text-neutral-600 text-sm">
                Display your minted NFTs in a stunning virtual gallery that
                captivates collectors worldwide. Seamlessly list your creations
                for sale, and leverage our growing community to connect with art
                enthusiasts and passionate collectors.
              </p>
            </div>
            <div className="flex flex-wrap md:basis-3/5 mt-6 text-sm">
              <div className="flex md:justify-end basis-1/2 md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Collection</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-neutral-500">
                      <Link href="/explore">Explore</Link>
                    </li>
                    <li className="text-neutral-500">
                      <Link href="/creator">Creator</Link>
                    </li>
                    <li className="text-neutral-500">
                      <Link href="/artwork">Artwork</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end basis-1/2 md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Community</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-neutral-500">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="text-neutral-500">
                      <Link href="/discord-server">Discord Server</Link>
                    </li>
                    <li className="text-neutral-500">
                      <Link href="/events">Events</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:justify-center basis-full md:basis-1/3 my-4 md:my-0">
                <div>
                  <h3 className="mb-5 font-medium">Social</h3>
                  <ul className="flex flex-col gap-4">
                    <li className="text-neutral-500">
                      <a href="/twitter/account">Twitter</a>
                    </li>
                    <li className="text-neutral-500">
                      <a href="/instagram/account">Instagram</a>
                    </li>
                    <li className="text-neutral-500">
                      <a href="/discord/server">Discord</a>
                    </li>
                    <li className="text-neutral-500">
                      <a href="/facebook/account">Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-between md:mt-14">
            <div className="flex items-center w-full md:basis-[35%] px-8 bg-gray-200/80 rounded-full border-[1px] border-black border-solid py-4 my-6 md:my-0">
              <div className="flex justify-between w-full">
                <p className="uppercase">Follow on Mirror</p>
                <MirrorLogo />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
