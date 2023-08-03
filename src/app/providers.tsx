'use client'
import * as React from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import {
  DisclaimerComponent,
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  braveWallet,
  coinbaseWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, mainnet, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { l1, l2 } from '@/config/chain'

const { chains, publicClient } = configureChains(
  l1.id == mainnet.id ? [l1, l2] : [l1, l2, mainnet], // so that ens always works
  [publicProvider()]
)
const projectId = 'db9706ca7a662fa38d5d574767f05f15'
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [coinbaseWallet({ appName: 'onchainsummer.xyz', chains })],
  },
  {
    groupName: 'Other Wallets',
    wallets: [
      rainbowWallet({ projectId, chains }),
      metaMaskWallet({ chains, projectId }),
      walletConnectWallet({ projectId, chains }),
      braveWallet({ chains }),
      trustWallet({ chains, projectId }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you are agreeing to our{' '}
    <Link href="/terms-of-service.pdf">Terms of Service</Link>.{' '}
    <Link href="https://docs.base.org/privacy-policy/">Privacy policy</Link>
  </Text>
)

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={{
          disclaimer: Disclaimer,
        }}
      >
        {mounted && <div className="flex flex-col h-full"> {children} </div>}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
