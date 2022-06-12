import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" 
import {ButtonColors} from '../../components/atoms/ButtonColors'

const Movie = ({data}) => { 
 /*  const router = useRouter()
  const query = router.query
  const [data, setMovieDetail] = React.useState([]);

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

    const genres = data.genres;
    console.log(data);
    console.log(genres+"" +typeof(genres)) */
    

  return (
    <div className="MovieContainer">
     <div className="bannerMovie">
       <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="bannerPic" />
      </div>
        <div className="InfoMovieContainer">
          <div className="infoMovieOptions">
              <div className="ranksInfoMovie">
                <img src="/images/star.png" alt="start"/>
                <p>{data.vote_average}</p>
              </div>
              <div className="timeinfoMovie">
              <img src="/images/clock.png" alt="start" />
                <p>{data.runtime}</p>
              </div>
              <div className="genderinfoMovie">
              <img src="/images/videoC.png" alt="start" />
             {
              data.genres ? (
                <p key={data.genres[0].id} >{data.genres[0].name}</p>
              ) : (
                null
              )
             }
              </div>
          </div>
      <h1>{data.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p>{data.overview}</p>
        </div>
        <h1>Producers:</h1>
        <div className="PopularActorsContainer">
          {
            data.production_companies ? (
              data.production_companies.map((companie)=>{
                return (
                  <AutorShower key={companie.id} src={`https://image.tmdb.org/t/p/w500${companie.logo_path}`} actorName={companie.name}/>
                )              
              })
            ) : (
              null
            ) 
          }       
        </div> 
        <ButtonColors  path={data.homepage} title="Go to Provider"/>
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

export async function getStaticProps({params}){
  try {
    const data = await getAll(params.id);
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