import { FC, useEffect, useRef, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { WindowProvider, useAccount, useConnect } from 'wagmi'
import clsx from 'clsx'
import { Button, ButtonProps } from '../Button'

type ConnectDialogProps = {
  title?: React.ReactNode
  inNavbar?: boolean
  size?: ButtonProps['size']
}

declare global {
  interface Window {
    ethereum?: WindowProvider
  }
}

interface CustomWindowProvider extends WindowProvider {
  isCoinbaseBrowser?: boolean
}

export const ConnectDialog: FC<ConnectDialogProps> = ({
  title = <div className="flex gap-2.5 items-center px-3">Mint</div>,
  inNavbar = false,
  size,
}) => {
  const { connect, connectors } = useConnect()
  const { address } = useAccount()
  const prompted = useRef(false)

  useEffect(() => {
    // We only want to attempt a connection if we haven't already done so.
    if (prompted.current) return

    const ethereum = window.ethereum as CustomWindowProvider | undefined
    if (ethereum?.isCoinbaseBrowser) {
      // Find the Coinbase Wallet connector
      const connector = connectors.find((c) => c.name === 'Coinbase Wallet')
      if (connector) {
        prompted.current = true
        connect({ connector })
      }
    }
  }, [])

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    className={clsx({
                      'rounded-lg !py-1.5 !px-4': inNavbar,
                    })}
                    size={size}
                  >
                    {title}
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                )
              }
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
