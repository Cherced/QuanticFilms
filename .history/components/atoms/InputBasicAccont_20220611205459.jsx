import React from 'react'

export const InputBasicAccont = (props) => {
  return (
    <div className="inputBasicAccont">
        <label htmlFor={props.for}>{props.titleForm}</label>
        {
        
        props.password ? 

        (
        <div className="passwordInput"> 
        <input type={props.type} name={props.name} placeholder={props.placeholder} autoComplete={props.autoComplete} />
        </div>
        ) :
        (
        <input type={props.type} name={props.name} placeholder={props.placeholder} autoComplete={props.autoComplete}  />
        ) 
        }       
    </div>
  )
}
