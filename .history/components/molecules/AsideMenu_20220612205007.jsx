import React from 'react'

export const AsideMenu = () => {
  return (
    <aside>
        <div className="profileContainer">
            <div className="textProfileContainer">
            <h1></h1>
            <p></p>
            </div>
            <img src="" alt="" />
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
