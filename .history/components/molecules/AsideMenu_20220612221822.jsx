import React from 'react'
import {useSession} from 'next-auth/react'
import { useMenuContext } from './AsideMenuContext';

export const AsideMenu = () => {
    const {data: session} = useSession();
    console.log(session)
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
            <div className="textProfileContainer">
            <h1>Welcome !</h1>
            <p>{session.user.name}</p>
            </div>
            <img src={session.user.image} alt="imageUser" />
        </div>
        <nav className="optionsAsideMenu">
        <ul className="listMenu">
            <li><img src="/images/camAs.png"/><a> <p>Movies</p></a></li>
            <li><img src="/images/comAs.png"/><a> <p>Tv Shows</p></a></li>
            <li><img src="/images/heart.png"/><a> <p>Favourite</p></a></li>
        </ul>
        </nav>
            <hr/>
        <nav className="optionsAsideMenu">
            <ul className="listMenu">
                <li><img src="/images/calendar.png"/><a> <p>Tv Calendar</p></a></li>
                <li><img src="/images/cog.png"/><a> <p>Settings</p></a></li>
                <li><img src="/images/logoutAs.png"/><a><p>Log Out</p></a></li>
            </ul>
        </nav>
    </aside>
      </div>
  )
}

