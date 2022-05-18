import React from 'react'
import { useRouter } from 'next/router'

export const ButtonAccount = (props) => {
    const router = useRouter()
  return (
    <button onClick={() => router.push(`/${props.path}`)} > <img src={props.img} alt={props.alt} /></button>
  )
}
