import React from 'react'
import {useSession} from 'next-auth/react'
import { useMenuContext } from './AsideMenuContext';

export const AsideMenu = () => {
    const {data: session} = useSession();
    const {menuActive, setMenuActive} = useMenuContext();

  return (
      <div className="BgASide">
      <button>
          <img src="/images/menu.png" alt="menuactive"/>
      </button>
      <aside>
        <div className="profileContainer">
            <div className="textProfileContainer">
            <h1>User:</h1>
            <p>{session.name}</p>
            </div>
            <img src={session.image} alt="imageUser" />
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
