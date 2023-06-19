import { HomeIcon } from '../HomeIcon'
import { Separator } from '../Separator'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex flex-col px-6 pb-6 pt-20 bg-footer-gradient-mobile bg-contain bg-bottom md:bg-footer-gradient md:bg-cover md:bg-center bg-no-repeat md:px-20">
      <div className="flex flex-col md:flex-row md:gap-24">
        <div className="md:basis-2/5">
          <HomeIcon />
          <p className="mt-6 mb-8 text-neutral-600 font-text">
            Display your minted NFTs in a stunning virtual gallery that
            captivates collectors worldwide. Seamlessly list your creations for
            sale, and leverage our growing community to connect with art
            enthusiasts and passionate collectors.
          </p>
        </div>
        <div className="flex flex-wrap md:basis-3/5">
          <div className="basis-1/2 md:basis-1/3 my-4 md:my-0">
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
          <div className="basis-1/2 md:basis-1/3 my-4 md:my-0">
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
          <div className="basis-full md:basis-1/3 my-4 md:my-0">
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
      <div className="mb-6 mt-2 md:mt-16 md:mb-8">
        <Separator />
      </div>
      <div className="md:flex md:justify-between px-5 md:px-10 font-text">
        <div>
          <p className="text-neutral-900 mb-6">
            ©️ 2023 Onchainsummer. All rights reserved.
          </p>
        </div>
        <div className="md:flex md:gap-8 font-medium md:font-normal">
          <p className="text-neutral-950 mb-4">Terms and Conditions</p>
          <p className="text-neutral-950">Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}
