import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'
import { InputBasicAccontPassword} from '../atoms/InputBasicAccontPassword'

export const LoginForm = () => {
  return (
    <form className="formContainer">
        <div className="inputBasicAccont">
        <h1>Name</h1>
        <input type="text" value="email" name="email" autoComplete="off"  />   
        </div>
        <h1>Email</h1>        
        <div className="passwordInput"> 
        <input type="password" value="password" name="email" autoComplete="off" />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div>
    </form>
  )
}
