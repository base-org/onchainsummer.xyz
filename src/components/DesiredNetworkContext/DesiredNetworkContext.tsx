'use client'

import React, { FC, PropsWithChildren } from 'react'
import { l1, l2 } from '@/config/chain'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { getIsCoinbaseBrowser } from '@/utils/getIsCoinbaseBrowser'

interface IDesiredNetworkContext {
  desiredNetwork: typeof l1 | typeof l2
  setDesiredNetwork: React.Dispatch<React.SetStateAction<typeof l1 | typeof l2>>
}

export const DesiredNetworkContext =
  React.createContext<IDesiredNetworkContext>({
    desiredNetwork: l2,
    setDesiredNetwork: () => {},
  })

export const DesiredNetworkContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const [desiredNetwork, setDesiredNetwork] = React.useState<
    typeof l1 | typeof l2
  >(l2)

  const isCoinbaseBrowser = getIsCoinbaseBrowser()
  const desiredNetworkId = desiredNetwork.id

  React.useEffect(() => {
    if (
      isCoinbaseBrowser &&
      chain &&
      switchNetwork &&
      chain.id !== desiredNetworkId
    ) {
      switchNetwork(desiredNetworkId)
    }
  }, [chain, desiredNetworkId, isCoinbaseBrowser, switchNetwork])

  return (
    <DesiredNetworkContext.Provider
      value={{ desiredNetwork, setDesiredNetwork }}
    >
      {children}
    </DesiredNetworkContext.Provider>
  )
}
