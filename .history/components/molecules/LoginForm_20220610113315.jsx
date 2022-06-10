import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'

export const LoginForm = () => {
  return (
    <div className="formContainer">
        <InputBasicAccont titleForm={"Email"} name="Email" placeholder="Enter your email" password={false} type="text" autoComplete="off" />
        <InputBasicAccont titleForm="Password" placeholder="Enter your password" password={true} />
    </div>
  )
}
