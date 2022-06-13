import '../sass/global.scss'
import {SessionProvider} from 'next-auth/react'
import {MoviesContextProvider} from '../hooks/MoviesContext'
import {ModalContextProvider} from '../components/atoms/Modals/ModalContext'
import {MenuContextProvider} from '../components/molecules/AsideMenuContext'



function MyApp({ Component, pageProps }) {
  return <SessionProvider>
          <MoviesContextProvider>
            <ModalContextProvider>
              <MenuContextProvider>
            <Component {...pageProps} />
              </MenuContextProvider>
            </ModalContextProvider>
          </MoviesContextProvider>
        </SessionProvider> 
  }

export default MyApp