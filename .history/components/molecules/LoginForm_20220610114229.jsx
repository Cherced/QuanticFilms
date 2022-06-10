import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'
import { InputBasicAccontPassword} from '../atoms/InputBasicAccontPassword'

export const LoginForm = () => {
  return (
    <form className="formContainer">
        <InputBasicAccont titleForm={"Email"} name="Email" placeholder="Enter your email" type="text" autoComplete="off" />
        <InputBasicAccontPassword titleForm="Password" name="password" placeholder="Enter your password" type="password" autoComplete="off" />
    </form>
  )
}
