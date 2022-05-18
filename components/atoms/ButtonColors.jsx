import React from 'react'
import { useRouter } from 'next/router'

export const ButtonColors = (props) => {
    const router = useRouter()
  return (
    <button onClick={() => router.push(`/${props.path}`)}>{props.title}</button>
  )
}
