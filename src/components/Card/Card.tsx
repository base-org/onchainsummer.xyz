import { FC } from 'react'

interface CardProps {
  children: React.ReactNode
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="border-[0.8px] border-neutral-900 shadow-card">
      {children}
    </div>
  )
}
