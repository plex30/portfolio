import React, { useContext } from 'react'
import { OnboardingContext } from './OnboardingContext/OnboardingContext'
import './OnboardingPage.scss'



export default function OnboardingPage() {

    const {isOnboard} = useContext(OnboardingContext);
    
    return (
        isOnboard && 
        <div>
            <div className="container-board">
                <div className="text-wrapper">
                    <div className="text-1 text">CSS3</div>
                    <div className="text-2 text">Html5</div>
                    <div className="text-3 text">React</div>
                    <div className="text-4 text">Angular</div>
                    <div className="text-5 text">VanillaJs</div>
                    <div className="text-6 text">Web Developer</div>
                    <div className="text-7 text">PHP</div>
                    <div className="text-8 text">Symfony</div>
                    <div className="text-9 text">Laravel</div>
                    <div className="text-10 text">NodeJs</div>
                    <div className="text-11 text">SQL & MongoDB</div>
                </div>
            </div>
        </div>
    )
}
