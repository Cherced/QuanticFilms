import React from 'react'

export const InputBasicAccont = (props) => {
  return (
    <div className="inputBasicAccont">
        <h1>{props.titleForm}</h1>
        {
        
        props.password ? 
        (
        <div className="passwordInput"> 
        <input value={props.placeholder} />
        <img src="/images/checkedPassword.png" alt="icon-check"/> 
        </div>
        ) :
        (
        <input value={props.placeholder} />
        ) 
        }       
    </div>
  )
}
