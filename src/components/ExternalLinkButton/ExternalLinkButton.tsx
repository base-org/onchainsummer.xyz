import { Button, ButtonProps } from '@/components/Button'
import { RightArrow } from '@/components/icons/RightArrow'
import { FC } from 'react'

type ExternalLinkButtonProps = {
  size?: ButtonProps['size']
  externalLink?: string
  partner: string
}

export const ExternalLinkButton: FC<ExternalLinkButtonProps> = ({
  size,
  externalLink,
  partner,
}) => {
  let message = 'View'
  let href = 'https://nft.coinbase.com'
  if (externalLink) {
    try {
      href = new URL(externalLink).origin
      message = `View on ${partner}`
      return (
        <Button size={size} href={href} external>
          <>
            {message} <RightArrow fill="white" className="ml-auto" />
          </>
        </Button>
      )
    } catch (e) {}
  }
  return null
}
