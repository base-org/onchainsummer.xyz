'use client'

import { FC } from 'react'
import { useValidateExternalLink } from './useValidateExternalLink'
import { Button } from '../Button'

import { CollectButton } from '../CollectButton/CollectButton'
import { FloorAsk } from '@reservoir0x/reservoir-kit-ui'
import { ExternalLinkButton } from '@/components/ExternalLinkButton/ExternalLinkButton'

export interface ExternalDropProps {
  externalLink?: string
  startDate: number
  endDate: number
  partner: string
  contractAddress: string
  className?: string
  openSeaLink?: string
  buttonText?: string
  floorAsk?: FloorAsk
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
    if (props.contractAddress === '0x' || props.contractAddress === '0x0') {
      return (
        <ExternalLinkButton
          partner={props.partner}
          externalLink={props.externalLink}
        />
      )
    }

    return (
      <CollectButton
        address={props.contractAddress}
        floorAsk={props.floorAsk}
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
      {props.buttonText || message}
    </Button>
  )
}
