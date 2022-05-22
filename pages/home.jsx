import React from 'react'
import { FilterSearch } from '../components/atoms/FilterSearch';
import {FilterByOptions} from '../components/molecules/FilterByOptions';
import { SliderInfiniteMovies } from '../components/molecules/SliderInfiniteMovies';
import { SliderSmallCase } from '../components/molecules/SliderSmallCase';
import { Footer } from '../components/molecules/Footer';


const home = () => {
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
