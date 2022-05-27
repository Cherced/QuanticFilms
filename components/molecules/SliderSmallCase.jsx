import React from 'react'
import {useRouter} from 'next/router'


export const SliderSmallCase = (props) => {
    const router = useRouter();
    function goToPage() {
        router.push('/movie/[id]', `/movie/${props.id}`)
    }
  return (
        <button onClick={goToPage} className="LinkTooContainer" >
            <label>{props.nameMovie}</label>
            <div className="SliderSmallCase__image">
                <img className="SliderSmallCase__img" src={props.src} alt={props.nameMovie}/>
                </div>
            </button>    
  )
}
