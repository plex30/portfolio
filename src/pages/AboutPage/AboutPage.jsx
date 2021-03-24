import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import './AboutPage.scss';
import me from './../../assets/img/me.png'



export default function AboutPage() {

    useEffect(() => {
        AOS.init({

            duration: 1000
        });
    }, []);

    return (
        <div className="p-about">
        <h1 className="p-about__title" data-aos={"flip-left"}><span className="p-about__title-p" data-aos={"fade-right"}>A</span>bout</h1>
            <div class="square-about-title" data-aos="zoom-in" data-aos-duration="2500"></div>
            <img className="p-about__imgme" src={me} alt="" data-aos="flip-up"/>
       <div class="square-about" data-aos="zoom-in-right"></div>
        
        </div>
    )
}
