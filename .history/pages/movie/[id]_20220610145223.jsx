import React from 'react'
import {useRouter} from 'next/router'

const Movie = ({data}) => {

console.log(data)
  return (
    <div><h1>{data.original_title}</h1></div>
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
