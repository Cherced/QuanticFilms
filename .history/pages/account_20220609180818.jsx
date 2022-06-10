import React from 'react'
import { HeaderFloat } from '../components/atoms/HeaderFloat';
import { ProgressBar } from '../components/atoms/ProgressBar';
import {ButtonColors} from '../components/atoms/ButtonColors';
import { UserInfo } from '../components/atoms/UserInfo';
import {LogOut} from '../components/atoms/LogOut';
import {useSession} from 'next-auth/react'

const Account = () => {
  const {data, status} = useSession();
  console.log(data, status)
  return (
    <>
    <HeaderFloat src={"/images/arrow-left.png"} path={"home"} HeaderClass="headerText" HeaderNavClass="headerNavText" titleHeader="Account"/>     
    <div className="accountContainer">
       {/*  <UserInfo userImage={`${data.user.image}`}  UserName={`${data.user.name}`}  /> */}
        <div className="userOptions">
        <ButtonColors path={"/customization"} title="Edit Profile" />
        <ButtonColors path={"/customization"} title="Change Password" />
        <ProgressBar bar= "80" />
        <LogOut />
        </div>
    
    </div>  
   </>
  )
}

export default Account;
