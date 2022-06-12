import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" 

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
    console.log(movieDetail);
  return (
    <div className="MovieContainer">
     <div className="bannerMovie">
       <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="bannerPic" />
      </div>
        <div className="InfoMovieContainer">
      <h1>{movieDetail.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p>{movieDetail.overview}</p>
        </div>
        <div className="PopularActorsContainer">
          {
            movieDetail.production_companies.map((companie)=>{
              <AutorShower src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} actorName={companie.name}/>
            })
          }
        
          
        </div> 
       </div> 
    </div>
  )
}

export default Movie