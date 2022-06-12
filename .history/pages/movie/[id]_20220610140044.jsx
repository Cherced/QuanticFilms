import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import { useMoviesContext } from '../../hooks/MoviesContext'

const Movie = (props) => {
  const {movieById, setMovieById} = useMoviesContext();
  const router = useRouter()
  const query = router.query
  const id = query.id

  console.log(typeof(id))
  React.useEffect(() =>{
    let mounted = true;
    if(mounted){
      getAll(238).then((movie)=> {
        setMovieById(movie)
      })
    }
  },[])

  console.log(movieById);
  return (
    <div>{}</div>
  )
}

export default Movie
