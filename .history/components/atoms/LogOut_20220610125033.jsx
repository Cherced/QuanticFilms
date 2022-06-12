import React from 'react'
import {useRouter} from 'next/router'
import { signOut, useSession} from "next-auth/react"

export const LogOut = () => {

  return (
    <a onClick={()=> signOut()} className="logOut">
    <img src="/images/logout.svg" alt="Logout"/>
    <h1>Log Out</h1>
    </a>
  )
}
