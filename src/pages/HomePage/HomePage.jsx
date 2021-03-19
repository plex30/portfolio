import React, { useContext, useEffect } from 'react'
import { OnboardingContext } from '../OnboardingPage/OnboardingContext/OnboardingContext';
import './HomePage.scss';

import MenuNav from '../../core/MenuNav/MenuNav';

export default function HomePage() {

    const {isOnboard, setOnboard} = useContext(OnboardingContext);

    


  useEffect(()=>{
   
      setOnboard(true);
      setTimeout(() => {
        setOnboard(false)
      }, 7000);
    
  }, []);

    return (
      isOnboard === false &&
        <div className="c-home">
        <MenuNav></MenuNav>
            
        </div>
    )
}
