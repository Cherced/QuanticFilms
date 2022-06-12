import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" 
import {ButtonColors} from '../../components/atoms/ButtonColors'

const Movie = ({data}) => { 
  const [movieDetail, setMovieDetail] = React.useState([]);

  React.useEffect(() => {
    setMovieDetail(data)
  })
 /*  const router = useRouter()
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

    const genres = movieDetail.genres;
    console.log(movieDetail);
    console.log(genres+"" +typeof(genres)) */
    

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

export async function getStaticPaths(){
  try{
    const res = await fetch("../api/DataBase/movie_ids_06_11_2022.json")
    const data = await res.json()
    const path = data.map(({id}) => ({params: {id: `${id}`}}))

    return {
      path,
      fallback: false
    }
  } catch (error){
    throw new Error(data.status)
  }


}

export async function getStaticProps(){
  console.log(params)
  try {
    const res = await fetch(`https://api.themoviedb.org/3//movie/778855?api_key=46f93e78273c9f1e02fe641b51f0328d`);
    const data = await res.json();
    return{
      props: {
        data
      }
    }
  } catch (error) {
    throw new Error(data.status)
  }
}

export default Movie