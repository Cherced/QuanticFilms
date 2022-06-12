import React from 'react'
import { useRouter } from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 



const Movie = ({data}) => {
  
 async function getServerSideProps() {
  const router = useRouter()
  const id = router.query
  const data = await getAll(id)

  return{
    props:{
      data
    }
  }
}
    console.log(data)

  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
