'use client'

import * as RadixSeparator from '@radix-ui/react-separator'
import type { FC } from 'react'

interface SeparatorProps extends RadixSeparator.SeparatorProps {
  /** Tailwind color class for the separator */
  color?: string
}

export const Separator: FC<SeparatorProps> = ({
  color = 'bg-neutral-900/10',
  className,
  ...props
}) => (
  <RadixSeparator.Root
    className={`${color} data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px] data-[orientation=vertical]:h-full ${className}`}
    {...props}
  />
)
