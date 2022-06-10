import React from 'react'
import { ButtonColors } from '../components/atoms/ButtonColors'
import { HeaderFloat } from '../components/atoms/HeaderFloat'
import {ButtonsAccesBySM} from '../components/molecules/ButtonsAccesBySM'
import { LoginForm } from '../components/molecules/LoginForm'
import  { useRouter } from 'next/router'
import {getSession, signIn } from 'next-auth/react'


const Login = ({ session }) => {
  const router = useRouter()
  console.log(session)

  return (
    <div className="loginContainer">
         <div className="headerLogin">
           <h1>Login</h1>
        <img src="/images/brandLogoHeader.png" alt="BrandLogo"/>
        </div>
        <p className="parragaphAccount">Log in with one of following options</p>
        <ButtonsAccesBySM pathG={()=> signIn('github')} pathGO={()=> signIn('google')} img1={"/images/mac.png"} img2={"/images/google.png"} alt="mediaLink" />
        <LoginForm />
        <div className="principalButtonLogin"> 
        <ButtonColors path={"customization"} title="Log In" />
        <p className="parragaphAccountLogin">Don’t have an account? <a onClick={() => router.push("signUp")}>Sign up</a></p>
        </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session =  await getSession(context)
  if(!session) {
  /* return {
      redirect: {
      destination: '/login',
      permanent: false
    } */
  }   
 /*  } else { */
    return{
      redirect: {
        destination: '/home'
      },
      props:{
        session
      }
  /*   } */
  }
  
}

export default Login