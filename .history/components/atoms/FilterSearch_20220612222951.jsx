import React from 'react'
import {useMenuContext} from '../molecules/AsideMenuContext'

export const FilterSearch = (props) => {
  const {menuActive, setMenuActive} = useMenuContext();
  return (
    <div className="FilterSearch">
    <input type="text" value={props.value} />
    <button onClick={()=> setMenuActive(!menuActive)}>
    <img src={props.src} alt="SearchICon" />
    </button>   
    </div>
  )
}