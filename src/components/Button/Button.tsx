'use client'

import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

import classes from './styles.module.css'
import Link from 'next/link'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'DARK' | 'LIGHT' | 'TEXT' | 'ROUND'
  size?: 'X-SMALL' | 'SMALL' | 'LARGE'
  className?: string
  children: React.ReactNode
  href?: string
  external?: boolean
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
      external,
      ...rest
    },
    ref
  ) => {
    const isDark = variant === 'DARK'
    const isLight = variant === 'LIGHT'
    const isText = variant === 'TEXT'
    const isRound = variant === 'ROUND'
    const isXSmall = size === 'X-SMALL'
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
      { [classes['button-x-small']]: isXSmall },
      { [classes['button-small']]: isSmall },
      { [classes['button-large']]: isLarge },
      className
    )

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={buttonClassName}
            aria-disabled={disabled}
            target="_blank"
            rel="noopener noreferrer"
            // @ts-expect-error
            onClick={disabled ? () => {} : () => onClick?.()}
          >
            {children}
          </a>
        )
      }

      return (
        <Link
          href={href}
          className={buttonClassName}
          aria-disabled={disabled}
          // @ts-expect-error
          onClick={disabled ? () => {} : () => onClick?.()}
        >
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
