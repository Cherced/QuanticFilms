import '../sass/global.scss'
import {SessionProvider} from 'next-auth/react'
import {MoviesContextProvider} from '../hooks/MoviesContext'



function MyApp({ Component, pageProps }) {
  return <SessionProvider>
          <MoviesContextProvider>
            <Component {...pageProps} />
          </MoviesContextProvider>
        </SessionProvider> 
  }

export default MyApp