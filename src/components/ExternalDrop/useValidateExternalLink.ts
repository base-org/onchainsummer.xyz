import { getNow } from '@/utils/getNow'
import { ExternalDropProps } from './ExternalDrop'

type ValidateExternalLinkResult = {
  isExternalLink: boolean
  status: 'invalid' | 'ended' | 'valid'
  externalLinkHref: string
  message: string
}

export const useValidateExternalLink = ({
  externalLink,
  startDate,
  endDate,
  partner,
}: ExternalDropProps): ValidateExternalLinkResult => {
  if (!externalLink) {
    return {
      isExternalLink: false,
      status: 'invalid',
      externalLinkHref: '',
      message: '',
    }
  }

  const now = getNow()

  if (now < startDate) {
    return {
      isExternalLink: true,
      status: 'invalid',
      externalLinkHref: '',
      message: `Mint not started`,
    }
  }

  if (now >= endDate) {
    return {
      isExternalLink: true,
      status: 'ended',
      externalLinkHref: '',
      message: `Mint ended`,
    }
  }

  return {
    isExternalLink: true,
    status: 'valid',
    externalLinkHref: externalLink,
    message: `Mint on ${partner}`,
  }
}
