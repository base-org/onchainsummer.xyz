import clsx from 'clsx'
import { FC } from 'react'

interface CardProps {
  children: React.ReactNode
  li?: boolean
  className?: string
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  li = false,
}) => {
  const cn = clsx('rounded-2xl md:rounded-3xl bg-white', className)
  if (li) {
    return <li className={cn}>{children}</li>
  }
  return <div className={cn}>{children}</div>
}
