import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 
import { useMoviesContext } from '../../hooks/MoviesContext'

const Movie = ({movieDetails}) => {
console.log(movieDetails)
  return (
    <div>{}</div>
  )
}

export async function getMovie(){
  const router = useRouter()
  const query = router.query
  const id = query.id
  const movieDetails = await getAll(id)

  return{
    props:{
      movieDetails: movieDetails
    }
  }
}

export default Movie
