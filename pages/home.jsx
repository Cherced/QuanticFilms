import React from 'react'
import { FilterSearch } from '../components/atoms/FilterSearch';
import {FilterByOptions} from '../components/molecules/FilterByOptions';
import { SliderInfiniteMovies } from '../components/molecules/SliderInfiniteMovies';
import { SliderSmallCase } from '../components/molecules/SliderSmallCase';


const home = () => {
  return (
    <div className="homeContainer">
      <FilterSearch src={"/images/menu.png"} value={"Search in the app"}/>
      <FilterByOptions Genre={"Genre"} Movies={"Movies"} Year={"Year"}/>
      <SliderInfiniteMovies />
      <SliderSmallCase title="Your Favourite" />
      <SliderSmallCase title="Discover More" />
    </div>
  )
}

export default home;
