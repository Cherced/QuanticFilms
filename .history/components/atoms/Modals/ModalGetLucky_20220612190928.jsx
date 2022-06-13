import React from 'react'
import { useModalContext } from './ModalContext'

export const ModalGetLucky = () => {
  const {modal, setModal} = useModalContext();
  return (
    <div className="ModalContainer">
      <div className="GetLuckyConteiner">
          <h1>
            GET LUCKY ?
          </h1>
          <p>Ready to test our Random experince?</p>
          <div className="buttonsModal">
            <button>OK</button>
            <button onClick={() => setModal(modal)}>Cancel</button>
          </div>
      </div>
    </div>
  )
}
