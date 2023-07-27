import moment from 'moment'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { FunctionComponent } from 'react'

import { TwitterVerified } from '@/components/icons/TwitterVerified'
import { ITweet, ITweetMedia, ITweetAuthor } from '@/models/Tweet'

export interface ITweetCardProps {
  author: ITweetAuthor
  media?: ITweetMedia
  tweet: ITweet
}

export const TweetCard: FunctionComponent<ITweetCardProps> = ({
  author,
  tweet,
  media,
}) => {
  return (
    <div className="bg-white p-6 rounded-3xl flex-1 flex flex-col justify-between min-w-[300px]">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="h-11 w-11 rounded-full"
              alt="author profile image"
              src={author.profile_image_url}
            />
            <div className="ml-2 text-sm leading-tight">
              <span className="text-black font-bold block">
                {author.name} <TwitterVerified />
              </span>
              <span className="text-[#8E8E8E] font-normal block">
                @{author.username}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p {...props} className="mb-3" />,
              a: ({ node, ...props }) => (
                <a {...props} className="text-ocs-blue" target="_blank" />
              ),
            }}
          >
            {tweet.text.length > 100
              ? `${tweet.text.substring(0, 100)} [...](https://twitter.com/${
                  author.username
                }/status/${tweet.id})`
              : tweet.text}
          </ReactMarkdown>
        </div>
        {media ? (
          media?.variants?.[0]?.content_type === 'video/mp4' ? (
            <video
              className="mt-2 rounded-2xl border border-gray-100 rk:border-gray-700 max-h-[200px] w-full object-cover"
              controls
              autoPlay
              muted
              loop
              poster={media.preview_image_url}
            >
              <source src={media.variants[0].url} type="video/mp4" />
            </video>
          ) : (
            <img
              className="mt-2 rounded-2xl border border-gray-100 rk:border-gray-700 max-h-[200px] w-full object-cover"
              src={media.preview_image_url || media.url}
              alt="tweet media"
            />
          )
        ) : null}
      </div>
      <p className="text-[#8E8E8E] text-sm mt-2">
        {moment(tweet.created_at).format('h:mm A · MMM D, YYYY')}
      </p>
    </div>
  )
}
