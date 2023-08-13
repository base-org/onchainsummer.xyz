import { get } from 'lodash'
import { getURL } from './getURL'
import { arweaves } from '../../generated/arweave'

export const getArweaveById = async (digestId: string) => {
  const response = await fetch(`${getURL()}/api/arweave`, {
    next: { revalidate: 1 * 60 },
    method: 'POST',
    body: JSON.stringify({ digestId }),
    headers: { 'x-api-key': process.env.OCS_API_KEY as string },
  })
  if (!response.ok) {
    return get(arweaves, digestId)
  }

  return response.json()
}
