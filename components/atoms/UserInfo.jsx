import React from 'react'

export const UserInfo = (props) => {
  return (
    <div className="accountContent">
    <div className="userAvatar">
        <img src={props.userImage} alt="userImage" className="userImage"/>
        <h1>{props.UserName}</h1>
    </div>
    </div>
  )
}
