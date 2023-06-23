'use client'

import { FC } from 'react'

type PasswordProps = {}

export const Password: FC<PasswordProps> = ({}) => {
  return (
    <form
      action="/api"
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const password = formData.get('password')

        const res = await fetch(`/api?password=${password}`, {
          method: 'GET',
        })

        if (res.status === 200) {
          window.location.reload()
        }
      }}
    >
      <label>Enter Password:</label>
      <input type="text" name="password" className="" />
      <button type="submit" className="">
        Login
      </button>
    </form>
  )
}
