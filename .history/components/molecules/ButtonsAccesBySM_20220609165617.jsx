import React from 'react'
import { ButtonAccount } from '../atoms/ButtonAccount'

export const ButtonsAccesBySM = (props) => {
  return (
    <div className="buttonsAccesBySM">
        <ButtonAccount pathG={props.path} img={props.img1} alt={props.alt} />
        <ButtonAccount pathGO={props.path} img={props.img2} alt={props.alt} />
    </div>
  )
}
