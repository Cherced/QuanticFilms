import React from 'react'
import { ButtonColors } from '../components/atoms/ButtonColors'

const index = () => {
  return (
    <div className="homeContainer">
      <div className="brandContainer">
        <img src="/images/brandLogo.png" alt="BrandLogo"/>
        <div className="brandTextContainer">
        <h1>Quantic</h1>
        <h1>Theatrum</h1>
        </div>       
      </div>    
      <div className="principalButton"> 
    <ButtonColors path="login" title="Get Started" />
    </div>
    </div>
  )
}

export default index