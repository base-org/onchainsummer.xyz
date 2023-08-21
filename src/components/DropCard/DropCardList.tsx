import { FC, PropsWithChildren } from 'react'

export const DropCardList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-auto">
      <div className="flex overflow-y-hidden md:overflow-x-auto w-max">
        <ul className="flex gap-4 md:gap-8 last:pr-4">{children}</ul>
      </div>
    </div>
  )
}
