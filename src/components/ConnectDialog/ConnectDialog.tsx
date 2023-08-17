import { FC, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'
import { Button, ButtonProps } from '../Button'
import { useConnectCBWallet } from '@/utils/useConnectCBWallet'
import { getIsCoinbaseBrowser } from '@/utils/getIsCoinbaseBrowser'

type ConnectDialogProps = {
  title?: React.ReactNode
  inNavbar?: boolean
  size?: ButtonProps['size']
}

export const ConnectDialog: FC<ConnectDialogProps> = ({
  title = <div className="flex gap-2.5 items-center px-3">Mint</div>,
  inNavbar = false,
  size,
}) => {
  const connect = useConnectCBWallet()

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
                    onClick={() => {
                      // if (getIsCoinbaseBrowser()) {
                      //   connect()
                      // } else {
                      openConnectModal()
                      // }
                    }}
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
