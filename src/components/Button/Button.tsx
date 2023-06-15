import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import classes from './styles.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
  size?: 'SMALL' | 'LARGE'
  className?: string
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'PRIMARY',
      size = 'LARGE',
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
    const isTertiary = variant === 'TERTIARY'
    const isSmall = size === 'SMALL'
    const isLarge = size === 'LARGE'

    return (
      <button
        ref={ref}
        className={clsx(
          classes['button'],
          { [classes['button-primary']]: isPrimary },
          {
            [classes['button-secondary']]: isSecondary,
          },
          { [classes['button-tertiary']]: isTertiary },
          { [classes['button-small']]: isSmall },
          { [classes['button-large']]: isLarge },
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
