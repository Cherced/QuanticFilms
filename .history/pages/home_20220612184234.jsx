import React, {useEffect, useState} from 'react';
import { FilterSearch } from '../components/atoms/FilterSearch';
import {FilterByOptions} from '../components/molecules/FilterByOptions';
import { SliderInfiniteMovies } from '../components/molecules/SliderInfiniteMovies';
import { SliderSmallCase } from '../components/molecules/SliderSmallCase';
import { Footer } from '../components/molecules/Footer';
import { useMoviesContext } from '../hooks/MoviesContext';
import {ModalGetLucky}  from '../components/atoms/Modals/ModalGetLucky';
import {ModalPortal} from '../components/atoms/Modals/ModalPortal';
import {useModalContext} from "../components/atoms/Modals/ModalContext"



const Home = () => { 
  const {trendingMoviesPreview, topRated, playing, } = useMoviesContext();
  const {modal} = useModalContext();

  

  function next(){
    console.log('next')
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.sliderContentItem__image');
    let sliderSectionFirst = sliderSection[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}
,500);
}
function prev(){
    console.log('prev')
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.sliderContentItem__image');
    let sliderSectionLength = sliderSection.length;
    let sliderSectionLast = sliderSection[sliderSectionLength - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
}
,500);
}

const handleClickRight = () => {
    next();
}

const handleClickLeft = () => {
    prev();
} 

console.log(topRated)
  return (
     <div className="homeContainer" id="home">
      <div className="headerHome">
      <img className="BRANDLOGO" src="images/brandLogoHeader.png" alt="BRANDLOGO" />
      </div>    
      <FilterSearch src={"/images/menu.png"} value={"Search in the app"}/>
      <FilterByOptions Genre={"Genre"} Movies={"Movies"} Year={"Year"}/>
      <div className="sliderInfiniteMoviesContainer">
        <div className="sliderContent" id="slider">
          {
            topRated.map((item, index) => {
              return (
                <SliderInfiniteMovies key={index} id={item.id} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
              )
            })
          }
      
      </div>
        <button onClick={handleClickRight} className="slider--BTN btn--rg" id="btn-rg">
           &#62;
        </button>
        <button onClick={handleClickLeft} className="slider--BTN btn--lf" id="btn-lf">
            &#60;
        </button>
    </div>

      <h1 className="titleSelects">Trending Movies:</h1>
    <div className="SliderSmallCaseContainer">
        <div className="SliderSmallCase" id="sliderS">
          {
            trendingMoviesPreview.map((data, index) => {
              return (
                <SliderSmallCase key={index} id={data.id} src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} nameMovie={data.original_title.substring(0,15)}/>
              )               
              }
            )
          }
          </div>     
      </div>
      <h1 className="titleSelects">Now Playing:</h1>
    <div className="SliderSmallCaseContainer">
        <div className="SliderSmallCase" id="sliderS">
          {
            playing.map((data, index) => {
              return (
                <SliderSmallCase key={index} id={data.id} src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} nameMovie={data.original_title.substring(0,15)}/>
              )               
              }
            )
          }
          </div>     
      </div>
    <Footer />
          <ModalPortal>
              {
                modal ?      (<ModalGetLucky/>) : (null)
              }
          </ModalPortal>
    </div>   
  )
}

export default Home;
