import { FC, useEffect, useState } from 'react'
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
  const [prompted, setPrompted] = useState(false)

  useEffect(() => {
    if (prompted) return

    const ethereum = window.ethereum as CustomWindowProvider | undefined
    if (ethereum?.isCoinbaseBrowser) {
      setPrompted(true)
      connect({
        connector: connectors.find((c) => c.name == 'Coinbase Wallet'),
      })
    }
  }, [connect, connectors, address, prompted, setPrompted])

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
