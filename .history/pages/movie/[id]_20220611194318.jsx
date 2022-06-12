import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" 
import {ButtonColors} from '../../components/atoms/ButtonColors'

const Movie = () => { 
  const [movieDetail, setMovieDetail] = React.useState([]);

  React.useEffect(() => {
    setMovieDetail(data)
  })
  const router = useRouter()
  const query = router.query
  

    React.useEffect(() => {
      let mounted = true;
      if(mounted) {
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
     <div className="bannerMovie">
       <img src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`} alt="bannerPic" />
      </div>
        <div className="InfoMovieContainer">
          <div className="infoMovieOptions">
              <div className="ranksInfoMovie">
                <img src="/images/star.png" alt="start"/>
                <p>{movieDetail.vote_average}</p>
              </div>
              <div className="timeinfoMovie">
              <img src="/images/clock.png" alt="start" />
                <p>{movieDetail.runtime}</p>
              </div>
              <div className="genderinfoMovie">
              <img src="/images/videoC.png" alt="start" />
             {
              movieDetail.genres ? (
                <p key={movieDetail.genres[0].id} >{movieDetail.genres[0].name}</p>
              ) : (
                null
              )
             }
              </div>
          </div>
      <h1>{movieDetail.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p>{movieDetail.overview}</p>
        </div>
        <h1>Producers:</h1>
        <div className="PopularActorsContainer">
          {
            movieDetail.production_companies ? (
              movieDetail.production_companies.map((companie)=>{
                return (
                  <AutorShower key={companie.id} src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} actorName={companie.name}/>
                )              
              })
            ) : (
              null
            ) 
          }       
        </div> 
        <ButtonColors  path={movieDetail.homepage} title="Go to Provider"/>
       </div> 
    </div>
  )
}


export default Movie