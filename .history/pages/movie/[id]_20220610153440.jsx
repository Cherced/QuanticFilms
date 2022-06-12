import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import {useMoviesContext} from '../../hooks/MoviesContext'


const Movie = (props) => {
  const router = useRouter()
  const query = router.query
  const id = query.id

  const {movieById, setId } = useMoviesContext();

  console.log(id)
  

  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
