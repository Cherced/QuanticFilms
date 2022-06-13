import React from 'react'
import { HeaderFloat } from '../components/atoms/HeaderFloat';
import { ProgressBar } from '../components/atoms/ProgressBar';
import {ButtonColors} from '../components/atoms/ButtonColors';
import { UserInfo } from '../components/atoms/UserInfo';
import {LogOut} from '../components/atoms/LogOut';
import {getSession} from 'next-auth/react'

const Account = ({session}) => {

  return (
    <>
    <HeaderFloat src={"/images/arrow-left.png"} path={"home"} HeaderClass="headerText" HeaderNavClass="headerNavText" titleHeader="Account"/>     
    <div className="accountContainer">
        <UserInfo userImage={`${session.user.image}`}  UserName={`${session.user.name}`}  />
        <div className="userOptions">
        <ButtonColors path={"/customization"} title="Movies Added" />
        <ProgressBar bar= "80" />
        <LogOut />
        </div>
    
    </div>  
   </>
  )
}


export const getServerSideProps = async ({req}) => {
  const session =  await getSession({req})

  if(!session)return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return{
    props:{
      session
    }
  }
  
}

export default Account;