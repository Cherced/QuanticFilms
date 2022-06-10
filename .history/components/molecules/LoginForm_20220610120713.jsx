import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'

export const LoginForm = () => {
  return (
    <form className="formContainer">
        <InputBasicAccont titleForm={"Email"} name="Email" placeholder="Enter your email" type="text" autoComplete="off" />
        <InputBasicAccont titleForm="Password" placeholder="Enter your password" type="password" autoComplete="off" />
    </form>
  )
}
