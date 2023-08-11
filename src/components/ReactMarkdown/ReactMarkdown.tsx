'use client'

import { ReactMarkdown as ReactMD } from 'react-markdown/lib/react-markdown'
import { FC } from 'react'
import remarkGfm from 'remark-gfm'
import YouTube from 'react-youtube'

import unreset from './unreset.module.scss'

interface ReactMarkdownProps {
  content: string
}

export const ReactMarkdown: FC<ReactMarkdownProps> = ({ content }) => {
  return (
    <ReactMD
      remarkPlugins={[remarkGfm]}
      className={unreset.unreset}
      components={{
        a: ({ node, ...props }) => {
          const youtubeId =
            typeof node.properties?.href === 'string' &&
            node.properties.href.match(/https:\/\/youtu.be\//)
              ? node.properties?.href.split('https://youtu.be/')[1]
              : ''

          if (!youtubeId) {
            return <a {...props} target="_blank" rel="noopener noreferrer" />
          }

          return <YouTube videoId={youtubeId} />
        },
      }}
    >
      {content}
    </ReactMD>
  )
}
