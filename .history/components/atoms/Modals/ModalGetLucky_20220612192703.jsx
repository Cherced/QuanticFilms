import React from 'react'
import { useModalContext } from './ModalContext'
import {useRouter} from 'next/router'

export const ModalGetLucky = () => {
  const {modal, setModal} = useModalContext();
  const router = useRouter()

  function getRandom(){
    const numRandom = Math.floor(Math.random() * (10000 - 1) + 1);
    router.push('/movie/[id]', `/movie/${props.id}`)
  }
  return (
    <div className="ModalContainer">
      <div className="GetLuckyConteiner">
          <h1>
            GET LUCKY ?
          </h1>
          <p>Ready to test our Random experince?</p>
          <div className="buttonsModal">
            <button onClick={getRandom}>OK</button>
            <button onClick={() => setModal(!modal)}>Cancel</button>
          </div>
      </div>
    </div>
  )
}
