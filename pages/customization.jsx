import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router' 
import { FilterSearch } from '../components/atoms/FilterSearch'
import { AutorShower } from '../components/atoms/AutorShower'
import { ButtonAddCategorie } from '../components/atoms/ButtonAddCategorie'
import {getGenresPreview} from './api/DataBase/dataBase.cherced'
import { getActorsPreview } from './api/DataBase/dataBase.cherced'
const Customization = () => {
  const [genresPreview, setGenresPreview] = useState([]);
  const [actorsPreview, setActorsPreview] = useState([]);

  useEffect(() => {
    let mounted = true;
    getActorsPreview().then((actors) => {
      if (mounted) {
        console.log(actors);
        setActorsPreview(actors);
      }
    });
  }, []);

  useEffect(() => {
    let mounted = true;
    getGenresPreview().then((data) => {
      if (mounted) {
        console.log(data);
        setGenresPreview(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const router = useRouter();

  return (
    <React.Fragment>
    <div className="customizationContainer">
    <div className="textIntroContainer">
        <h1>what are you interested in ?</h1>
        <p className="parragaphAccount">select some topics to follow to personaliz your experince.</p>
    </div>
    <FilterSearch src={"/images/searchICon.png"} value={"Search"}/>
    <h1 className="titleSelects" >Popular Categories</h1>
    <div className="PopularCategoriesContainer">
      {
        genresPreview.map((data) => {
          return (
            <ButtonAddCategorie key={data.id} text={data.name}/>
          )
        })
      }
    </div>
    <h1 className="titleSelects" >Popular Actors</h1>
    <div className="PopularActorsContainer">
      {
        actorsPreview.map((data) => {
          return (
            <AutorShower key={data.id} src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} actorName={data.name}/>
          )
        })
      }
    </div>
    <button onClick={() => router.push("/home")} className="nextButton">
    </button>
</div>
</React.Fragment>
)


}

export default Customization