import React from 'react'
import { InputBasicAccont } from '../atoms/inputBasicAccont'

export const SignUpForm = () => {
  return (
    <div className="formContainer">
        <InputBasicAccont titleForm="Name" placeholder="Enter your name" password={false} />
        <InputBasicAccont titleForm="Email" placeholder="Enter your email" password={false} />
        <InputBasicAccont titleForm="Password" placeholder="Enter your password" password={true} />
    </div>
  )
}
