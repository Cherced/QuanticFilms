import React from 'react'
import { ButtonAccount } from '../atoms/ButtonAccount'

export const ButtonsAccesBySM = (props) => {
  return (
    <div className="buttonsAccesBySM">
        <ButtonAccount path={props.path} img={props.img1} alt={props.alt} />
        <ButtonAccount path={props.path} img={props.img2} alt={props.alt} />
    </div>
  )
}
