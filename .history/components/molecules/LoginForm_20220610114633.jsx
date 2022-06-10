import React from 'react'
import { InputBasicAccont } from '../atoms/InputBasicAccont'
import { InputBasicAccontPassword} from '../atoms/InputBasicAccontPassword'

export const LoginForm = () => {
  return (
    <form className="formContainer">
        <div className="inputBasicAccont">
        <h1>{props.titleForm}</h1>
        <input type={props.type} value={props.placeholder} name={props.name} autoComplete={props.autoComplete}  />   
        </div>
        <h1>{props.titleForm}</h1>        
        <div className="passwordInput"> 
        <input type={props.type} value={props.placeholder} name={props.name} autoComplete={props.autoComplete} />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div>
    </form>
  )
}
