import React from 'react'

export const FilterSearch = (props) => {
  return (
    <div className="FilterSearch">
    <input type="text" value={props.value} />
    <button onClick={props.onClick}>
    <img src={props.src} alt="SearchICon" />
    </button>   
    </div>
  )
}