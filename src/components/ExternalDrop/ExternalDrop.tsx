import { FC } from 'react'
import { useValidateExternalLink } from './useValidateExternalLink'
import { Button } from '../Button'

import { CollectButton } from '../CollectButton/CollectButton'

export interface ExternalDropProps {
  externalLink?: string
  startDate: number
  endDate: number
  partner: string
  contractAddress: string
  className?: string
  openSeaLink?: string
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
      <CollectButton
        address={props.contractAddress}
        openSeaLink={props.openSeaLink}
      />
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
