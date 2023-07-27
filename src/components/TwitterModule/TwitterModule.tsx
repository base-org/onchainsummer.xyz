import { FunctionComponent } from 'react'

import { TweetCard } from '../TweetCard'

import { tweets } from '../../config/tweets'

export interface ICommunityTabProps {}

export const TwitterModule: FunctionComponent<ICommunityTabProps> = ({}) => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {tweets.data.map((tweet) => {
        const author = tweets.includes.users.find(
          (user) => user.id === tweet.author_id
        )
        const media = tweets.includes.media.find(
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
