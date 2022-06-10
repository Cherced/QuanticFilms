import React from 'react'

export const InputBasicAccont = (props) => {
  return (
    <div className="inputBasicAccont">
        <label>{props.titleForm}</label>
        {
        
        props.password ? 
        (
        <div className="passwordInput"> 
        <input type={props.type} name={props.name} autoComplete={props.autoComplete} />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div>
        ) :
        (
        <input type={props.type} name={props.name} autoComplete={props.autoComplete}  />
        ) 
        }       
    </div>
  )
}
