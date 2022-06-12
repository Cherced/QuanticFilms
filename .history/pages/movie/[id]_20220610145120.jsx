import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 

const Movie = ({data}) => {
  const [movieById, setMovieById] = React.useState();
  const router = useRouter()
  const query = router.query
  const id = query.id

  return (
    <div><h1>{movieById.original_title}</h1></div>
  )
}


export async function getAll(id){
  try {
      const res = await fetch(`https://api.themoviedb.org/3//movie/${id}?api_key=${apiKey}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
          }

      });
      const status =  res.status;
      const request = new Request(res);
      const data = await res.json();
      if(status !== 200){
          throw Error(data.status_message + " " + data.status_code)
      } else {
          return data;
      }

  } catch (error) {
      console.log(error);
  }
}

export default Movie
