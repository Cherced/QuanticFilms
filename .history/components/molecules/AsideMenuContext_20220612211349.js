import React from 'react'

const MenuContext = React.createContext();

export function MenuContextProvider({children}){
    const [menuActive, setMenuActive] = React.useState(false)
    return <MenuContext.Provider
    value={{menuActive, setMenuActive}}
    >
        {children}
    </MenuContext.Provider>
}

export function useMenuContext(){
    const context = React.useContext(MenuContext)
    return context
}