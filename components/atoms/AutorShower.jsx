import React from 'react'

export const AutorShower = (props) => {
  return (
    <div className="AutorShowerCard">
        <img src={props.src} alt="Actor" />
        <p>{props.actorName}</p>
    </div>
  )
}
