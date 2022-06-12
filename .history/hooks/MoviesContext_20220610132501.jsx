import React from "react"

const MoviesContext = React.createContext({})

const MoviesContextProvider = () => {
    
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
    return () => {
      mounted = false;
    };
  }, []);

    const [trendingMoviesPreview, setTrendingMoviesPreview] = React.useState([]);
    const [topRated, setTopRated] = React.useState([]);
    const [playing, setPlaying] = React.useState([]);

    return (
        <MoviesContext.Provider value={{
            trendingMoviesPreview, setTrendingMoviesPreview,
            topRated, setTopRated, playing, setPlaying
            } 
        }>

        </MoviesContext.Provider>
    )
  

}
