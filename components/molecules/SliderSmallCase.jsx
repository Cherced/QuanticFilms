import React from 'react'

export const SliderSmallCase = (props) => {
    function nextS () {
        console.log('next');
        const slider = document.querySelector("#sliderS");
        let sliderItems = document.querySelectorAll(".LinkTooContainer");
        let firstSliderItem = sliderItems[0];
        slider.style.marginLeft = "-200%";
        slider.style.transition = "ease-in-out 0.5s";
        setTimeout(function () {
            slider.style.transition = "ease-in-out 0.5s";
            slider.insertAdjacentElement("beforeend", firstSliderItem);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

    function prevS () {
        console.log('prev');
        const slider = document.querySelector("#sliderS");
        let sliderItems = document.querySelectorAll(".LinkTooContainer");
        let lastSliderItem = sliderItems[sliderItems.length - 1];
       
        slider.style.marginLeft = "0";
        slider.style.transition = "ease-in-out 0.5s";
        setTimeout(function () {
            slider.style.transition = "ease-in-out 0.5s";
            slider.insertAdjacentElement("afterbegin", lastSliderItem);
            slider.style.marginLeft = "-100%";
        }, 500);
    }

        const handleClickRightS = () => {
        nextS();
        }

        const handleClickLeftS = () => {
        prevS();
        }
    

  return (
    <div className="SliderSmallCaseContainer">
        <h1>{props.title}</h1>
        <div className="SliderSmallCase" id="sliderS">
        <button className="LinkTooContainer" >
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/1.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/3.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/2.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/3.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer" >
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/1.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/4.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/5.jpg" alt=""/>
                </div>
            </button>
            <button className="LinkTooContainer">
            <label>Slampe</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src="/images/khabib/4.jpg" alt=""/>
                </div>
            </button>
        </div>
        <button onClick={handleClickLeftS} className="SliderSmallCase__arrow SliderSmallCase__arrow--left">
                </button>
        <button onClick={handleClickRightS} className="SliderSmallCase__arrow SliderSmallCase__arrow--right">
                </button>
    </div>
  )
}
