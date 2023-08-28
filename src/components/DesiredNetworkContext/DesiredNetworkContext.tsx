'use client'

import React, { FC, PropsWithChildren, useRef } from 'react'
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
  const { switchNetwork } = useSwitchNetwork()
  const switchNetworkRef = useRef(switchNetwork)

  switchNetworkRef.current = switchNetwork

  const [desiredNetwork, setDesiredNetwork] = React.useState<
    typeof l1 | typeof l2
  >(l2)

  const desiredNetworkId = desiredNetwork.id

  React.useEffect(() => {
    const isCoinbaseBrowser = getIsCoinbaseBrowser()
    if (isCoinbaseBrowser) {
      switchNetworkRef.current?.(desiredNetworkId)
    }
  }, [desiredNetworkId])

  return (
    <DesiredNetworkContext.Provider
      value={{ desiredNetwork, setDesiredNetwork }}
    >
      {children}
    </DesiredNetworkContext.Provider>
  )
}
