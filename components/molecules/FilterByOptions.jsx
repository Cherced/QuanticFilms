import React from 'react'
import { OptionSelect } from '../atoms/OptionSelect'

export const FilterByOptions = (props) => {
  return (
      <>
       <div className="filterByOptionsContainer"> 
      <button className="switchByOptions">
        <img src="/images/filter.png" alt="FilterByOptions" />
        </button>             
        <OptionSelect defaultParameter={props.Genre}/>
        <OptionSelect defaultParameter={props.Movies}/>
        <OptionSelect defaultParameter={props.Year}/>
        </div>
      </>
  )
}
