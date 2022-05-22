import React from 'react'
import { HeaderFloat } from '../components/atoms/HeaderFloat';
import { ProgressBar } from '../components/atoms/ProgressBar';
import {ButtonColors} from '../components/atoms/ButtonColors';
import { UserInfo } from '../components/atoms/UserInfo';
import {LogOut} from '../components/atoms/LogOut';

const Account = () => {
  return (
    <>
    <HeaderFloat src={"/images/arrow-left.png"} path={"home"} HeaderClass="headerText" HeaderNavClass="headerNavText" titleHeader="Account"/>     
    <div className="accountContainer">
        <UserInfo userImage={"/images/khabib/3.jpg"}  UserName="khabib Nurmagomedov"  />
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
