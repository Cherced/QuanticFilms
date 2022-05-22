import { initScriptLoader } from 'next/script';
import React from 'react'
import { OptionSelect } from '../atoms/OptionSelect'

export const FilterByOptions = (props) => {
  const [ navState, setNavState ] = React.useState(false);

  function openNav() {
    console.log('openNav' + navState);
    if(navState === false){
    const button = document.querySelector(".switchByOptions");   
    const intial = document.querySelector("#filterSelects");
    intial.style.width = "100%";
    button.style.marginLeft = "0";
    intial.style.opacity = "1";
    setNavState(true);
    } else {
      const button = document.querySelector(".switchByOptions");   
      const intial = document.querySelector("#filterSelects");
      intial.style.width = "0";
      button.style.marginLeft = "47%";
      intial.style.opacity = "0";
      setNavState(false);
    }
  }

  return (
      <>
       <div className="filterByOptionsContainer" > 
      <button onClick={openNav} onChange={() => setNavState(!navState)}  className="switchByOptions">
        <img src="/images/filter.png" alt="FilterByOptions" />
      </button>  
      <nav id="filterSelects" className="filterSelectsThree" >
        <OptionSelect defaultParameter={props.Genre}/>
        <OptionSelect defaultParameter={props.Movies}/>
        <OptionSelect defaultParameter={props.Year}/>
        </nav>        
      </div>
      </>
  )
}
