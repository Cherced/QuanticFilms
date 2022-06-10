import React from 'react'

export const InputBasicAccontPassword = (props) => {
  return (
    <div className="inputBasicAccont">
        <h1>{props.titleForm}</h1>        
        <div className="passwordInput"> 
        <input type={props.type} value={props.placeholder} name={props.name} autoComplete={props.autoComplete} />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div>
    </div>
  )
}
