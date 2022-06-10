import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'
import { InputBasicAccontPassword} from '../atoms/InputBasicAccontPassword'

export const LoginForm = () => {
  return (
    <form action="/send-data-here" method="post" className="formContainer">
        <div className="inputBasicAccont">
        <label for="email">Email: </label>
        <input type="text" id="emailForm"  name="email" autoComplete="off" placeholder="Email"  />  
        <label>password</label>        
        <div className="passwordInput"> 
        <input type="password" value="password" name="email" autoComplete="off" />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div> 
        </div>        
    </form>
  )
}
