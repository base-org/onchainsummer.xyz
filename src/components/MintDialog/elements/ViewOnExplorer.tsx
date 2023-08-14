import { Button, ButtonProps } from '@/components/Button'
import { RightArrow } from '@/components/icons/RightArrow'
import { isProd } from '@/config/chain'
import { scanUrl } from '@/utils/scanUrl'
import React from 'react'

interface ViewOnExplorerProps {
  txHash: string | undefined
  buttonVariant?: ButtonProps['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  isl1?: boolean
  title?: React.ReactNode
  showIcon?: boolean
}

export const ViewOnExplorer = React.forwardRef<
  HTMLButtonElement,
  ViewOnExplorerProps
>(
  (
    {
      txHash,
      buttonVariant,
      onClick,
      isl1 = false,
      title = '',
      showIcon = true,
    },
    ref
  ) => {
    if (!txHash) {
      return null
    }

    return (
      <Button
        variant={buttonVariant}
        external
        onClick={onClick}
        ref={ref}
        href={scanUrl(isl1, txHash)}
      >
        {title ? (
          title
        ) : (
          <>
            View on Explorer{' '}
            {showIcon ? <RightArrow fill="white" className="ml-auto" /> : null}
          </>
        )}
      </Button>
    )
  }
)

ViewOnExplorer.displayName = 'ViewOnExplorer'
