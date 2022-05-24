import React, {useEffect, useState} from 'react'
import { FilterSearch } from '../components/atoms/FilterSearch';
import {FilterByOptions} from '../components/molecules/FilterByOptions';
import { SliderInfiniteMovies } from '../components/molecules/SliderInfiniteMovies';
import { SliderSmallCase } from '../components/molecules/SliderSmallCase';
import { Footer } from '../components/molecules/Footer';
import {getTrendingMoviesPreview} from '../DataBase/dataBase.cherced';


const home = () => {
  const [trending , setTrending] = useState([]);
  useEffect(() => {
    let mounted = true;
    getTrendingMoviesPreview().then((data) => {
      if (mounted) {
        console.log(data);
        const res = data; 
        setTrending(res);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

 console.log("trending movies " + trending );

  return (
    <div className="homeContainer" id="home">
      <div className="headerHome">
      <img className="BRANDLOGO" src="images/brandLogoHeader.png" alt="BRANDLOGO" />
      </div>    
      <FilterSearch src={"/images/menu.png"} value={"Search in the app"}/>
      <FilterByOptions Genre={"Genre"} Movies={"Movies"} Year={"Year"}/>
      <SliderInfiniteMovies />
      <SliderSmallCase title="Your Favourite" />
      <SliderSmallCase title="Discover More" />
      <Footer />
    </div>
  )
}

export default home;
