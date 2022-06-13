import React from 'react'
import {useSession} from 'next-auth/react'

export const AsideMenu = () => {
    const {data: session} = useSession();

  return (
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
            <li><a>Movies</a></li>
            <li><a>Tv Shows</a></li>
            <li><a>Favourite</a></li>
        </ul>
        </nav>
            <hr/>
        <nav className="optionsAsideMenu">
            <ul className="listMenu">
                <li><a>Tv Calendar</a></li>
                <li><a>Settings</a></li>
                <li><a>Log Out</a></li>
            </ul>
        </nav>
    </aside>
  )
}
