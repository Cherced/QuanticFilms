import React from "react"
import { useRouter } from "next/router";
import {getTrendingMoviesPreview} from '../pages/api/DataBase/dataBase.cherced';
import {getTopRated} from '../pages/api/DataBase/dataBase.cherced';
import {getNowPlaying} from '../pages/api/DataBase/dataBase.cherced';
import {getAll} from '../pages/api/DataBase/dataBase.cherced';

const MoviesContext = React.createContext({})

export const MoviesContextProvider = ({children}) => {    
React.useEffect(() => {
    let mounted = true;
    getTrendingMoviesPreview().then((data) => {
      if (mounted) {
        setTrendingMoviesPreview(data);
      }
    });
    getTopRated().then((data) => {
      if (mounted) {
        setTopRated(data);
      }
    });
    getNowPlaying().then((data) => {
      if (mounted) {
       setPlaying(data);
      }
    });
    getAll(id).then((data)=> {
      if (mounted) {
        setMovieById(data)
      }
    })
    return () => {
      mounted = false;
    };
  }, []);

    const [trendingMoviesPreview, setTrendingMoviesPreview] = React.useState([]);
    const [topRated, setTopRated] = React.useState([]);
    const [playing, setPlaying] = React.useState([]);
    const [movieById, setMovieById] = React.useState([]);
    const [id , setId] = React.useState([]);

    return (
        <MoviesContext.Provider value={{
            trendingMoviesPreview, setTrendingMoviesPreview,
            topRated, setTopRated, playing, setPlaying,movieById, setMovieById, id, setId
            } 
        }>
                {children}
        </MoviesContext.Provider>
    )
  

}

export function useMoviesContext() {
    const context = React.useContext(MoviesContext);
    return context
}