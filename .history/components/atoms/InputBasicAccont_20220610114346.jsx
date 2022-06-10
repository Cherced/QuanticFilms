import React from 'react'

export const InputBasicAccont = (props) => {
  return (
    <div className="inputBasicAccont">
        <label>{props.titleForm}</label>
        <input type={props.type} value={props.placeholder} name={props.name} autoComplete={props.autoComplete}  />   
    </div>
  )
}
