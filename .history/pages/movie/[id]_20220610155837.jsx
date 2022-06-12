import React from 'react'
import {useRouter} from 'next/router'
import {useMoviesContext} from '../../hooks/MoviesContext'
import {getAll} from '../api/DataBase/dataBase.cherced'


const Movie = (props) => {
  const router = useRouter()
  const query = router.query
  const [movieDetail, setMovieDetail] = React.useState([]);

    React.useLayoutEffect(() => {
      let mounted = true;
      if(mounted) {
        console.log(query)
        getAll(query.id).then((data) => {
          setMovieDetail(data)
        })
      } 
        return () => {
          mounted = false;
        };
    },[])
  
console.log(movieDetail)
  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
