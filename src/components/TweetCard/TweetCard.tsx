import moment from 'moment'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { FunctionComponent, useMemo } from 'react'

import { TwitterVerified } from '@/components/icons/TwitterVerified'
import { ITweet, ITweetMedia, ITweetAuthor } from '@/models/Tweet'
import clsx from 'clsx'

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
  const linkToTwitter = useMemo(() => {
    return `https://twitter.com/${author.username}/status/${tweet.id}`
  }, [author.username, tweet.id])

  const message = tweet.text.trim()

  const url = useMemo(() => {
    const firstUrl = tweet?.entities?.urls?.[0]
    if (
      !firstUrl?.expanded_url ||
      !firstUrl?.images?.[0].url ||
      !firstUrl?.title
    )
      return
    return tweet?.entities?.urls?.[0]
  }, [tweet])

  return (
    <div className="bg-white p-6 rounded-3xl flex-1 flex flex-col justify-between min-w-[300px] relative">
      <div className="flex flex-col h-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-11 w-11 rounded-full"
              alt="author profile image"
              src={author.profile_image_url}
            />
            <div className="ml-2 text-sm leading-tight">
              <span className="text-black font-bold block">
                {author.name} <TwitterVerified />
              </span>
              <a
                href={linkToTwitter}
                target="_blank"
                className="after:absolute after:inset-0"
              >
                <span className="sr-only">View tweet on Twitter</span>
              </a>
              <span className="text-[#444] font-normal block">
                @{author.username}
              </span>
            </div>
          </div>
        </div>
        <div
          className={clsx('my-2.5', {
            'line-clamp-3': !!media || !!url,
          })}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ node, ...props }) => <p {...props} className="mb-3" />,
              a: ({ node, ...props }) => (
                <a {...props} className="text-ocs-blue" target="_blank" />
              ),
            }}
          >
            {message}
          </ReactMarkdown>
        </div>
        {media ? (
          media?.variants?.[0]?.content_type === 'video/mp4' ? (
            <video
              className="mt-auto rounded-2xl border border-gray-100 rk:border-gray-700 max-h-[272px] flex-auto w-full object-cover"
              controls
              muted
              loop
              poster={media.preview_image_url}
            >
              <source src={media.variants[0].url} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="mt-auto rounded-2xl border border-gray-100 rk:border-gray-700 max-h-[272px] flex-auto w-full object-cover"
              src={media.preview_image_url || media.url}
              alt="tweet media"
            />
          )
        ) : url ? (
          <div className="rounded-3xl border">
            <img
              src={url?.images?.[0]?.url || ''}
              className="rounded-t-3xl object-cover aspect-[4/2]"
              alt={url?.title || ''}
            />
            <div className="bg-gray-200 rounded-b-3xl p-3">
              <h3 className="text-lg">{url?.title}</h3>
              <p className="line-clamp-2 text-sm">{url?.description}</p>
            </div>
          </div>
        ) : null}
      </div>
      <p className="text-[#444] text-sm mt-2">
        {moment(tweet.created_at).format('h:mm A · MMM D, YYYY')}
      </p>
    </div>
  )
}
