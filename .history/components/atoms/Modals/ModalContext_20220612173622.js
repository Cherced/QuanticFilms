import React from 'react'

const ModalContext = React.createContext({})

export function ModalContextProvider({children}) {
    const [modal, setModal] = React.useState(false)
    return (
    <ModalContext.Provider value={{modal, setModal}} >
        {children}
    </ModalContext.Provider>
    )
}

export function useModalContext(){
    const context = React.useContext(ModalContext)
    return context
}