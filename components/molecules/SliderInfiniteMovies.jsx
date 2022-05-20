import React from 'react'

export const SliderInfiniteMovies = () => {       
        function next(){
            console.log('next')
            const slider = document.querySelector('#slider');
            let sliderSection = document.querySelectorAll('.sliderContentItem__image');
            let sliderSectionFirst = sliderSection[0];
            console.log(sliderSectionFirst);
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
            console.log(sliderSectionLast);
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
            console.log("click");
            next();
        }

        const handleClickLeft = () => {
            console.log("click");
            prev();
        } 

  return (
    <div className="sliderInfiniteMoviesContainer">
        <div className="sliderContent" id="slider">
            <div className="sliderContentItem__image">
                <img className="sliderImg" src="/images/khabib/1.jpg" alt=""/>
                </div>
            <div className="sliderContentItem__image">
                <img className="sliderImg" src="/images/khabib/2.jpg" alt=""/>
            </div>
            <div className="sliderContentItem__image">
                <img className="sliderImg" src="/images/khabib/3.jpg" alt=""/>
            </div>
            <div className="sliderContentItem__image">
                <img className="sliderImg" src="/images/khabib/4.jpg" alt=""/>
            </div>
           <div className="sliderContentItem__image">
                <img className="sliderImg" src="/images/khabib/5.jpg" alt=""/>
           </div>
        </div>
        <button onClick={handleClickRight} className="slider--BTN btn--rg" id="btn-rg">
           &#62;
        </button>
        <button onClick={handleClickLeft} className="slider--BTN btn--lf" id="btn-lf">
            &#60;
        </button>
    </div>
  )
}
