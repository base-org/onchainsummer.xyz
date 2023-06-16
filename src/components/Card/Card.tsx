import clsx from 'clsx'
import { FC } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={clsx('border border-neutral-900 shadow-card', className)}>
      {children}
    </div>
  )
}
