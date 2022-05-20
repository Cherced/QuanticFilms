import React from 'react'
import {useRouter} from 'next/router' 
import { HeaderFloat } from '../components/atoms/HeaderFloat'
import { FilterSearch } from '../components/atoms/FilterSearch'
import { AutorShower } from '../components/atoms/AutorShower'
import { ButtonAddCategorie } from '../components/atoms/ButtonAddCategorie'

const Customization = () => {
  const router = useRouter();

  return (
    <React.Fragment>
    <HeaderFloat path={""} HeaderClass="headerJustBack" HeaderNavClass="headerNavText" titleHeader="" />
    <div className="customizationContainer">
    <div className="textIntroContainer">
        <h1>what are you interested in ?</h1>
        <p className="parragaphAccount">select some topics to follow to personaliz your experince.</p>
    </div>
    <FilterSearch src={"/images/searchICon.png"} value={"Search"}/>
    <h1 className="titleSelects" >Popular Categories</h1>
    <div className="PopularCategoriesContainer">
    <ButtonAddCategorie text="Romance" />
    <ButtonAddCategorie text="Fantasy" />
    <ButtonAddCategorie text="Horror" />
    <ButtonAddCategorie text="Thriller" />
    <ButtonAddCategorie text="Mystery" />
    <ButtonAddCategorie text="Sci-Fi" />   
    <ButtonAddCategorie text="Action" />     
    </div>
    <h1 className="titleSelects" >Popular Actors</h1>
    <div className="PopularActorsContainer">
    <AutorShower src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" actorName="Tom Cruise" />  
    <AutorShower src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" actorName="Tom Cruise" />
    <AutorShower src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" actorName="Tom Cruise" />
    <AutorShower src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid" actorName="Tom Cruise" />        
    </div>
    <button onClick={() => router.push("/home")} className="nextButton">
    </button>
</div>
</React.Fragment>
)


}

export default Customization