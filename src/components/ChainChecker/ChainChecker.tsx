'use client'

import { useNetwork, useSwitchNetwork } from 'wagmi'
import { Button } from '../Button/Button'
import { ChainSwitch } from '../icons/ChainSwitch'
import { l2 } from '@/config/chain'
import { useIsMisMatched } from '@/utils/useIsMismatched'

export const ChainChecker: React.FC = () => {
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const isMismatched = useIsMisMatched()

  return (
    <>
      {isMismatched && (
        <div className="flex flex-col md:flex-row relative top-4 md:top-auto justify-between items-center gap-4 px-6 md:px-8 py-4 bg-[#EFEFEF] rounded-3xl md:rounded-[2.5rem] w-full mx-6 md:mx-16 shadow-large h-max max-w-7xl">
          <div className="basis-[2/3]">
            <h2 className="desktop-headline mb-2 md:mb-0">
              Network unsupported
            </h2>
            <span className="desktop-body">
              You’re currently on an unsupported network — {chain?.name}. Please
              switch to the Base network.
            </span>
          </div>
          <div className="w-full md:w-auto md:basis-[1/3] flex justify-end">
            <Button
              variant="LIGHT"
              disabled={!switchNetwork}
              onClick={() => switchNetwork!(l2.id)}
              className="!py-3 !px-6 !bg-transparent"
            >
              Switch to Base
              <ChainSwitch className="ml-auto" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
