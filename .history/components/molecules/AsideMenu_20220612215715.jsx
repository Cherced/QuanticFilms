import React from 'react'
import { useMenuContext } from './AsideMenuContext';
import {getSession} from 'next-auth/react'

export const AsideMenu = ({session}) => {
    const {menuActive, setMenuActive} = useMenuContext();

  return (
      <div className="BgASide">
          <div className="ConteinerButton">
            <button className="menuAsideButton">
          <img src="/images/menu.png" alt="menuactive"/>
            </button>
          </div>
      <aside className="AsideMenuComp">
        <div className="profileContainer">
          {/*   <div className="textProfileContainer">
            <h1>User:</h1>
            <p>{session.user.image}</p>
            </div>
            <img src={session.user.name} alt="imageUser" /> */}
        </div>
        <nav className="optionsAsideMenu">
        <ul className="listMenu">
            <li><img src="/images/camAs.png"/><a>Movies</a></li>
            <li><img src="/images/comAs.png"/><a>Tv Shows</a></li>
            <li><img src="/images/heart.png"/><a>Favourite</a></li>
        </ul>
        </nav>
            <hr/>
        <nav className="optionsAsideMenu">
            <ul className="listMenu">
                <li><img src="/images/calendar.png"/><a>Tv Calendar</a></li>
                <li><img src="/images/cog.png"/><a>Settings</a></li>
                <li><img src="/images/logoutAs.png"/><a>Log Out</a></li>
            </ul>
        </nav>
    </aside>
      </div>
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
