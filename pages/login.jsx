import React from 'react'
import { ButtonColors } from '../components/atoms/ButtonColors'
import { HeaderFloat } from '../components/atoms/HeaderFloat'
import {ButtonsAccesBySM} from '../components/molecules/ButtonsAccesBySM'
import { LoginForm } from '../components/molecules/LoginForm'



const login = () => {
  return (
    <div className="loginContainer">
        <HeaderFloat path={""} HeaderClass="headerText" HeaderNavClass="headerNavText" titleHeader="Login"/>
        <div className="BrandIcon">
        <img src="/images/brandLogo.png" alt="BrandLogo"/>
        </div>
        <p className="parragaphAccount">Log in with one of following options</p>
        <ButtonsAccesBySM path={""} img1={"/images/mac.png"} img2={"/images/google.png"} alt="mediaLink" />
        <LoginForm />
        <div className="principalButtonLogin"> 
        <ButtonColors path={""} title="Log In" />
        <p className="parragaphAccountLogin">Don’t have an account? <a>Sign up</a></p>
        </div>
    </div>
  )
}

export default login