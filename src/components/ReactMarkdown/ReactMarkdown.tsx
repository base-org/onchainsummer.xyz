import { ReactMarkdown as ReactMD } from 'react-markdown/lib/react-markdown'
import { FC } from 'react'
import remarkGfm from 'remark-gfm'
import unreset from './unreset.module.scss'

interface ReactMarkdownProps {
  content: string
}

export const ReactMarkdown: FC<ReactMarkdownProps> = ({ content }) => {
  return (
    <ReactMD remarkPlugins={[remarkGfm]} className={unreset.unreset}>
      {content}
    </ReactMD>
  )
}
