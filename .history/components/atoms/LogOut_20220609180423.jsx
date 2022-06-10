import React from 'react'
import { signOut } from "next-auth/react"

export const LogOut = () => {
  return (
    <button onClick={()=> signOut()} className="logOut">
    <img src="/images/logout.svg" alt="Logout"/>
    <h1>Log Out</h1>
    </button>
  )
}
