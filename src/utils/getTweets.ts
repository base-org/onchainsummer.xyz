import { ITweetResponse } from '@/models/Tweet'

import { tweets } from '../../generated/tweets'

export const getTweets = async () => {
  return tweets as unknown as ITweetResponse
}
