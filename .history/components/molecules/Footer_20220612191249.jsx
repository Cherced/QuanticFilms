import React from 'react'
import { useRouter } from 'next/router'
import {useModalContext} from "../atoms/Modals/ModalContext";

export const Footer = () => {
  const {modal, setModal} = useModalContext()
  const router = useRouter()
  
  return (
    <div className="footerContainer">
        <button onClick={()=> router.push("account")} className="footerButton"><img src="/images/profile.png" alt="profile"/></button>
        <button ><a href="#home"><img src="/images/SearchF.png" alt="search"/></a></button>
        <button onClick={() =>  setModal(!modal) } className="footerButton"><img src="/images/luckF.png" alt="suerte"/></button>
        <button onClick={()=> router.push("")} className="footerButton"><img src="/images/menuF.png" alt="menu"/></button>
    </div>
  )
}
