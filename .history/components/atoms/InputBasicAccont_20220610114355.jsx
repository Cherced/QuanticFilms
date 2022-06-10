import React from 'react'

export const InputBasicAccont = (props) => {
  return (
    <div className="inputBasicAccont">
        <h1>{props.titleForm}</h1>
        <input type={props.type} value={props.placeholder} name={props.name} autoComplete={props.autoComplete}  />   
    </div>
  )
}
