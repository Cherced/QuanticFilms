import React from 'react'
import {useRouter} from 'next/router'
import { signOut, useSession} from "next-auth/react"

export const LogOut = () => {
  const {data, status} = useSession();
  console.log(data, status)
  const router = useRouter()

 if (status == "unauthenticated"){
    router.push("/")
  } 

  return (
    <button onClick={()=> signOut()} className="logOut">
    <img src="/images/logout.svg" alt="Logout"/>
    <h1>Log Out</h1>
    </button>
  )
}
