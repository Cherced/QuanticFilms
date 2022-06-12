import React from 'react'
import {useRouter} from 'next/router'
/* import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower" */

function location(){
  const [_, movieId] = location.hash.split('=')

  console.log(movieId)
}
 location()
const Movie = ({data} ) => {

  
  /* const router = useRouter()
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
    },[])  */
  
console.log(data)
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
/* 
export async function getServerSideProps (){
  const router = useRouter()
  const query = router.query
  try {
    const res = await fetch(`https://api.themoviedb.org/3//movie/${query}?api_key=46f93e78273c9f1e02fe641b51f0328d`)
    const data = await res.json();
    return{
        props: {
          data
        }
    }      
  }catch (error){
    console.log(error);
  }

}  */

export default Movie
