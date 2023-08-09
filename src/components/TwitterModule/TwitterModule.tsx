import { FunctionComponent } from 'react'

import { ITweetResponse } from '@/models/Tweet'
import { TweetCard } from '@/components/TweetCard'

export interface ICommunityTabProps {
  tweets: ITweetResponse
}

export const TwitterModule: FunctionComponent<ICommunityTabProps> = ({
  tweets,
}) => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {tweets.data.map((tweet) => {
        const author = tweets.includes?.users?.find?.(
          (user) => user.id === tweet.author_id
        )
        const media = tweets.includes?.media?.find?.(
          (media) => media.media_key === tweet.attachments?.media_keys[0]
        )
        if (!author) return null
        return (
          <TweetCard
            key={tweet.id}
            author={author}
            tweet={tweet}
            media={media}
          />
        )
      })}
    </div>
  )
}
