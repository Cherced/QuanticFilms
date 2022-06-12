import React from 'react'
import {useRouter} from 'next/router'
/* import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" */

const Movie = () => { 
  const router = useRouter()
  const query = router.query
  const [movieDetail, setMovieDetail] = React.useState([]);

    React.useEffect(() => {
      let mounted = true;
      if(mounted) {
        console.log(query)
        getAll(query.id).then((data) => {
          setMovieDetail(data)
        })
      } 
        return () => {
          mounted = false;
        };
    },[])  

  return (
    <div className="MovieContainer">
   {/*    <div className="bannerMovie">

      </div>
        <div className="InfoMovieContainer">
      <h1>{movieDetail.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p></p>
        </div>
        <div className="PopularActorsContainer">
          <AutorShower/>
        </div> */}

     {/*  </div> */}
    </div>
  )
}

export default Movie