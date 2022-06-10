import React from 'react'
import { ButtonAccount } from '../atoms/ButtonAccount'

export const ButtonsAccesBySM = (props) => {
  return (
    <div className="buttonsAccesBySM">
        <ButtonAccount pathG={props.pathG} img={props.img1} alt={props.alt} />
        <ButtonAccount pathGO={props.pathGO} img={props.img2} alt={props.alt} />
    </div>
  )
}
