import { website } from '@/config/website'

export const metadata = {
  title: 'Trending',
  description: 'View trending NFTs powered by mint.fun',
  openGraph: {
    title: 'Trending | Onchain Summer',
    description: 'View trending NFTs powered by mint.fun',
    url: 'https://onchainsummer.xyz/trending',
    siteName: 'Onchain Summer',
    images: [website.logo],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trending | Onchain Summer',
    description: 'View trending NFTs powered by mint.fun',
    site: website.twitter.site,
    creator: website.twitter.creator,
    images: [website.logo.url],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return { children }
}
