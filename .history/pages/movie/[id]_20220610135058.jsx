import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import { useMoviesContext } from '../../hooks/MoviesContext'

const Movie = (props) => {
  const {movieById, setMovieById} = useMoviesContext();
  const router = useRouter()
  const id = router.query
  console.log(id)
  React.useEffect(() =>{
    let mounted = true;
    if(mounted){
      getAll().then((movie)=> {
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
