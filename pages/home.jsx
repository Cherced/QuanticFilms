import React, {useEffect, useState} from 'react'
import { FilterSearch } from '../components/atoms/FilterSearch';
import {FilterByOptions} from '../components/molecules/FilterByOptions';
import { SliderInfiniteMovies } from '../components/molecules/SliderInfiniteMovies';
/* import { SliderSmallCase } from '../components/molecules/SliderSmallCase'; */
import { Footer } from '../components/molecules/Footer';
import {getTrendingMoviesPreview} from '../DataBase/dataBase.cherced';


const Home = () => { 
  const [trendingMoviesPreview, setTrendingMoviesPreview] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTrendingMoviesPreview().then((data) => {
      if (mounted) {
        console.log(data);
        setTrendingMoviesPreview(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  console.log(trendingMoviesPreview);

  const data = [...trendingMoviesPreview];
  console.log(data);

  return (
     <div className="homeContainer" id="home">
      <div className="headerHome">
      <img className="BRANDLOGO" src="images/brandLogoHeader.png" alt="BRANDLOGO" />
      </div>    
      <FilterSearch src={"/images/menu.png"} value={"Search in the app"}/>
      <FilterByOptions Genre={"Genre"} Movies={"Movies"} Year={"Year"}/>
      <SliderInfiniteMovies />

      <h1 className="titleSelects">oeeee</h1>
    <div className="SliderSmallCaseContainer">
        <div className="SliderSmallCase" id="sliderS">
          {
            data.map((data, index) => {
              return (
               <button key={index} className="LinkTooContainer" >
                <label>{data.original_title}</label>
                <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt=""/>
                </div>
                </button>
              )               
              }
            )
          }
          </div>     
      </div>
    <Footer />
    </div>   
  )
}

export default Home;
