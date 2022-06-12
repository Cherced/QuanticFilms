import React from 'react'
import {useRouter} from 'next/router'
import {useMoviesContext} from '../../hooks/MoviesContext'
import {getAll} from '../api/DataBase/dataBase.cherced'


const Movie = (props) => {
  const router = useRouter()
  const query = router.query
  const id = query.id
  (()=>{
    console.log(id)
  })
  

    React.useEffect(() => {
      let mounted = true;
      if(mounted) {
   
      } 
        return () => {
          mounted = false;
        };
    },[id])
  

  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
