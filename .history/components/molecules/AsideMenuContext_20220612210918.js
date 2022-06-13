import React from 'react'

const MenuContext = createContext();

export function MenuContextProvider({children}){
    const [menuActive, setMenuActive] = React.useState(false)
    return <MenuContext.Provider
    value={{menuActive, setMenuActive}}
    >
        {children}
    </MenuContext.Provider>
}