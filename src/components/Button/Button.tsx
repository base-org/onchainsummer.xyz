import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import classes from './styles.module.css'
import Link from 'next/link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'DARK' | 'LIGHT' | 'TEXT' | 'ROUND'
  size?: 'SMALL' | 'LARGE'
  className?: string
  children: React.ReactNode
  href?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'DARK',
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
    const isDark = variant === 'DARK'
    const isLight = variant === 'LIGHT'
    const isText = variant === 'TEXT'
    const isRound = variant === 'ROUND'
    const isSmall = size === 'SMALL'
    const isLarge = size === 'LARGE'

    const buttonClassName = clsx(
      classes['button'],
      { [classes['button-dark']]: isDark || isRound },
      {
        [classes['button-light']]: isLight,
      },
      { [classes['button-text']]: isText },
      { [classes['button-round']]: isRound },
      { [classes['button-small']]: isSmall },
      { [classes['button-large']]: isLarge },
      className
    )

    if (href) {
      return (
        <Link href={href} className={buttonClassName} aria-disabled={disabled}>
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
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
