import { FC, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { WindowProvider, useConnect } from 'wagmi';
import clsx from 'clsx';
import { Button } from '../Button';

type ConnectDialogProps = {
  title?: React.ReactNode
  inNavbar?: boolean
}

declare global {
  interface Window {
      ethereum?: WindowProvider;
  }
}

interface CustomWindowProvider extends WindowProvider {
  isCoinbaseBrowser?: boolean;
}

export const ConnectDialog: FC<ConnectDialogProps> = ({
  title = <div className="flex gap-2.5 items-center px-3">Mint</div>,
  inNavbar = false,
}) => {
  const {connect, connectors} = useConnect();

  useEffect(() => {
    const ethereum = window.ethereum as CustomWindowProvider | undefined;
    if (ethereum?.isCoinbaseBrowser) {
      connect({connector: connectors.find((c) => c.name == "Coinbase Wallet")})
    }
  }, [connect, connectors])

  return <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        if (!connected) {
          openConnectModal();
        }

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} type="button" className={clsx({ 'rounded-lg !py-2 !px-3': inNavbar })}>
                    {title}
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
}
