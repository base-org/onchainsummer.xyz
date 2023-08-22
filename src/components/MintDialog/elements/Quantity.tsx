import { Minus } from '@/components/icons/Minus'
import { Plus } from '@/components/icons/Plus'
import { FC } from 'react'
import { useMintDialogContext } from '../Context/useMintDialogContext'
import { MintType } from '../types'

interface QuantityProps {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}
const buttonClassName = 'py-1.5 px-4 rounded-[100px] border border-[#EFEFEF]'
export const Quantity: FC<QuantityProps> = ({ quantity, setQuantity }) => {
  const {
    info: { maxClaimablePerWallet, mintType },
  } = useMintDialogContext()

  // zora has 2^32 max, thirdweb 2^256, in any case 2^32 is a lot and effectively no limit.
  if (
    mintType === MintType.MintDotFun ||
    (maxClaimablePerWallet &&
      maxClaimablePerWallet > (2n ** 32n - 1n).toString())
  ) {
    return null
  }

  return (
    <div className="flex gap-[30px] items-center">
      <button
        className={buttonClassName}
        onClick={() => {
          const next = quantity - 1
          if (next < 1) {
            setQuantity(1)
          } else {
            setQuantity(next)
          }
        }}
      >
        <Minus />
        <span className="sr-only">Decrement</span>
      </button>
      <label htmlFor="quantity" className="sr-only">
        Quantity
      </label>
      <input
        id="quantity"
        type="number"
        value={quantity}
        onChange={(e) => {
          const next = Number(e.target.value)

          if (next < 1) {
            setQuantity(1)
          } else {
            setQuantity(next)
          }
        }}
        min={1}
        step={1}
        className="flex items-center justify-center bg-[#EFEFEF] border border-[#EFEFEF] rounded-[100px] text-center desktop-mono w-full px-4 py-1.5 appearance-none"
      />
      <button
        className={buttonClassName}
        onClick={() => {
          const next = quantity + 1
          if (next < 1) {
            setQuantity(1)
          } else {
            setQuantity(next)
          }
        }}
      >
        <Plus />
        <span className="sr-only">Increment</span>
      </button>
    </div>
  )
}
