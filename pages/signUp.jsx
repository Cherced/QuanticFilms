import React from 'react'
import {useRouter} from 'next/router'
import { ButtonColors } from '../components/atoms/ButtonColors'
import { HeaderFloat } from '../components/atoms/HeaderFloat'
import {ButtonsAccesBySM} from '../components/molecules/ButtonsAccesBySM'
import { SignUpForm } from '../components/molecules/SignUpForm'


const SignUp = () => {
  const router = useRouter()
  return (
    <div className="signUpContainer">
        <HeaderFloat path={""} HeaderClass="headerText" HeaderNavClass="headerNavText" titleHeader="Sign Up"/>
        <p className="parragaphAccount">Sign up with one of following options</p>
        <ButtonsAccesBySM path={""} img1={"/images/mac.png"} img2={"/images/google.png"} alt="mediaLink" />
        <SignUpForm />
        <div className="principalButtonLogin"> 
        <ButtonColors path={"/customization"} title="Create Account" />
        <p className="parragaphAccountLogin">Already have an account? <a onClick={() => router.push("login")}>Login</a></p>
        </div> 
    </div>
  )
}

export default SignUp