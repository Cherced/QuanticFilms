import '../sass/global.scss'
import {SessionProvider} from 'next-auth/react'
import {MoviesContextProvider} from '../hooks/MoviesContext'
import {ModalContextProvider} from '../components/atoms/Modals/ModalContext'



function MyApp({ Component, pageProps }) {
  return <SessionProvider>
          <MoviesContextProvider>
            <ModalContextProvider>
            <Component {...pageProps} />
            </ModalContextProvider>
          </MoviesContextProvider>
        </SessionProvider> 
  }

export default MyApp