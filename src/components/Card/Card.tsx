import clsx from 'clsx'
import { FC } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={clsx('rounded-2xl md:rounded-3xl bg-white', className)}>
      {children}
    </div>
  )
}
