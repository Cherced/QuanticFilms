import React from 'react'
import {useRouter} from 'next/router'
import {getAll} from '../api/DataBase/dataBase.cherced'
import {AutorShower} from "../../components/atoms/AutorShower"


const Movie = (props) => {
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
    },[]) */
  
console.log(movieDetail)
  return (
    <div className="MovieContainer">
      <div className="bannerMovie">

      </div>
        <div className="InfoMovieContainer">
      <h1>{movieDetail.original_title}</h1>
        <div className="storyLineMovieContainer">
          <h2>Story Line:</h2>
          <p></p>
        </div>
        <div className="PopularActorsContainer">
          <AutorShower/>
        </div>

      </div>
    </div>
  )
}


export async function getStaticPaths (){
  try{
    const res = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await res.json();
    const paths = data.map(({ id }) => ({params: {id: `${id}`}}));
    return {
        paths,
        fallback:false
    }
  }catch (error){
    console.log(error);
  }

} 

export async function getStaticProps ({ params }){
  
  try {
    const res = await fetch()
    const data = await res.json();
    return{
        props: {
          data
        }
    }      
  }catch (error){
    console.log(error);
  }

} 


export default Movie
