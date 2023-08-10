import { getURL } from './getURL'

export const getArweaveById = async (digestId: string) => {
  const responser = await fetch(`${getURL()}/api/arweave`, {
    next: { revalidate: 1 * 60 },
    method: 'POST',
    body: JSON.stringify({ digestId }),
    headers: { 'x-api-key': process.env.OCS_API_KEY as string },
  })
  return responser.json()
}
