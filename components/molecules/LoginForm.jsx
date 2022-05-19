import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'

export const LoginForm = () => {
  return (
    <div className="formContainer">
        <InputBasicAccont titleForm="Email" placeholder="Enter your email" password={false} />
        <InputBasicAccont titleForm="Password" placeholder="Enter your password" password={true} />
    </div>
  )
}
