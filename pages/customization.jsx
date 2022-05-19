import React from 'react'
import { HeaderFloat } from '../components/atoms/HeaderFloat'
import { FilterSearch } from '../components/atoms/filterSearch'
import { AutorShower } from '../components/atoms/AutorShower'
import { ButtonAddCategorie } from '../components/atoms/ButtonAddCategorie'

const customization = () => {
  return (
    <>
    <HeaderFloat path={""} HeaderClass="headerJustBack" HeaderNavClass="headerNavText" titleHeader="" />
    <div className="customizationContainer">
    <div className="textIntroContainer">
        <h1>what are you interested in ?</h1>
        <p className="parragaphAccount">select some topics to follow to personaliz your experince.</p>
    </div>
    <FilterSearch/>
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
    <button className="nextButton">
    </button>
</div>
</>
)


}

export default customization