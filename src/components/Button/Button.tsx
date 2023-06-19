import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import classes from './styles.module.css'
import Link from 'next/link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY'
  size?: 'SMALL' | 'LARGE'
  className?: string
  children: React.ReactNode
  href?: string
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
      href,
      ...rest
    },
    ref
  ) => {
    const isPrimary = variant === 'PRIMARY'
    const isSecondary = variant === 'SECONDARY'
    const isTertiary = variant === 'TERTIARY'
    const isSmall = size === 'SMALL'
    const isLarge = size === 'LARGE'

    if (href) {
      return (
        <Link
          href={href}
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
        >
          {children}
        </Link>
      )
    }

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
