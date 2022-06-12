import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced' 


export async function getServerSideProps() {
  const router = React.useRouter()
  const id = router.query
  const data = await getAll(id)

  return{
    props:{
      data
    }
  }
}

const Movie = ({data}) => {
    console.log(data)

  return (
    <div>{/* <h1>{movieById.original_title}</h1> */}</div>
  )
}

export default Movie
