import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import { useMoviesContext } from '../../hooks/MoviesContext'

const Movie = (props) => {
  const {movieById, setMovieById} = useMoviesContext();
  const router = useRouter()
  const query = router.query
  const id = query.id

  

  React.useEffect(() =>{
    console.log(id)
    let mounted = true;
    if(mounted){
        getAll(id).then((movie)=> {
          setMovieById(movie)
      })
    }
    console.log(movieById)
  },[])


  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
