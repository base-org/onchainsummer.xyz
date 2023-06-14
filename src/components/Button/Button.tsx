import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import classes from './styles.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'PRIMARY' | 'SECONDARY'
  className?: string
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'PRIMARY',
      className = '',
      children,
      type = 'button',
      disabled,
      onClick,
      ...rest
    },
    ref
  ) => {
    const isPrimary = variant === 'PRIMARY'
    const isSecondary = variant === 'SECONDARY'

    return (
      <button
        ref={ref}
        className={clsx(
          'px-6 py-2 text-lg leading-[180%] text-center text-neutral-900 font-medium items-center rounded-[10px] shadow-button',
          { [classes['button-primary']]: isPrimary },
          {
            'bg-secondary-button-gradient border border-neutral-900/10':
              isSecondary,
          },
          className
        )}
        aria-disabled={disabled}
        type={type}
        onClick={disabled ? () => {} : onClick}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
