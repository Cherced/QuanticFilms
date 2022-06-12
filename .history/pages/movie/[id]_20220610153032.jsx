import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import {useMoviesContext} from '../../hooks/MoviesContext'


const Movie = (props) => {
  const {movieById } = useMoviesContext();
  

  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
