import React, { useContext, useEffect } from 'react'
import { OnboardingContext } from '../OnboardingPage/OnboardingContext/OnboardingContext';
import './HomePage.scss';
import anime from 'animejs/lib/anime.es.js';
import MenuNav from '../../core/MenuNav/MenuNav';

export default function HomePage() {

    const {isOnboard, setOnboard} = useContext(OnboardingContext);

    


  useEffect(()=>{
   
      setOnboard(true);
      setTimeout(() => {
        setOnboard(false)
        const textWrapper = document.querySelector('.ml7 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/[^\s]/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 1000 + 50 * i;
    }
  });
      }, 4500);

      
    
  }, []);

  

    return (
      isOnboard === false &&
        <div className="c-home">
        <MenuNav></MenuNav>
        <div class="square-1"></div>
        <div className="c-home__txt">
        <h1 className="ml7" id="title">            
                  <span class="text-wrapper-title">
                        <span class="letters">Hello, I'm Juan</span>
                  </span>
        </h1>
        <h3 className="subtitle">Web Developer</h3>
        <p className="desc-par">I'm a Spain based full stack web developer focused on crafting clean & user‑friendly experiences.</p>
        </div>
        <p className="arrow">⇃<span className="vertical-txt">Scroll</span></p>
        <div class="square-2"></div>
        </div>
    )
}
