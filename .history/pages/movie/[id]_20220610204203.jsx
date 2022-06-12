import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" 
import {ButtonColors} from '../../components/atoms/ButtonColors'

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
          <div className="infoMovieOptions">
              <div>
                <img/>
                <p>{movieDetail.vote_average}</p>
              </div>
              <div>
              <img/>
                <p>{movieDetail.runtime}</p>
              </div>
              <div>
                {movieDetail.genres[0]}
              </div>
          </div>
      <h1>{movieDetail.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p>{movieDetail.overview}</p>
        </div>
        <div className="PopularActorsContainer">
          <h1>Producers:</h1>
          {
            movieDetail.production_companies.map((companie)=>{
              <AutorShower key={companie.id} src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} actorName={companie.name}/>
            })
          }     
        </div> 
        <ButtonColors  path={movieDetail.homepage} title="Go to Provider"/>
       </div> 
    </div>
  )
}

export default Movie