import React from 'react'
import { ButtonColors } from '../components/atoms/ButtonColors'
import { IntroAnimationStart } from '../components/molecules/IntroAnimationStart.jsx'

const Index = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    React.useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 5000)
    }, [])

  return (
    <React.Fragment> 
    {
       !isVisible ? (<IntroAnimationStart />) : 
       (    
         <div className="homeContainer">
       <div className="brandContainer">
         <img src="/images/brandLogo.png" alt="BrandLogo"/>
         <div className="brandTextContainer">
         <h1>Quantic</h1>
         <h1>Theatrum</h1>
         </div>       
       </div>    
       <div className="principalButton"> 
     <ButtonColors path="login" title="Get Started" />
     </div>
     </div>)
    }
    </React.Fragment>
  )
}

export default Index