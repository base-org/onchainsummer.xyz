import { FC } from 'react'
import { useValidateExternalLink } from './useValidateExternalLink'
import { Button } from '../Button'
import { RightArrow } from '../icons/RightArrow'

export interface ExternalDropProps {
  externalLink?: string
  startDate: number
  endDate: number
  partner: string
  contractAddress: string
  className?: string
}

export const ExternalDrop: FC<ExternalDropProps> = ({
  className = '',
  ...props
}) => {
  const { isExternalLink, status, externalLinkHref, message } =
    useValidateExternalLink(props)

  if (!isExternalLink) {
    return null
  }

  if (status === 'ended') {
    return (
      <Button
        href={`https://nft.coinbase.com/collection/base/${props.contractAddress}`}
        external
        className={className}
      >
        Collect <RightArrow fill="white" className="ml-auto" />
      </Button>
    )
  }

  if (status === 'invalid') {
    return (
      <Button disabled className={className}>
        {message}
      </Button>
    )
  }

  return (
    <Button href={externalLinkHref} external className={className}>
      {message}
    </Button>
  )
}
