import React, { useEffect } from 'react'
import './ProjectsPage.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import lucky from './../../assets/img/lucky.jpg';
import shop from './../../assets/img/shop.jpg';
import got from './../../assets/img/got.jpg';
import play from './../../assets/img/play.jpg';
import angular from './../../assets/img/angular.png';
import react from './../../assets/img/react.png';
import html5 from './../../assets/img/html5.png';
import vanilla from './../../assets/img/vanillajs.png';
import css from './../../assets/img/css3.png';
import sass from './../../assets/img/sass.png';


export default function ProjectsPage() {

    useEffect(() => {
        AOS.init({

            duration: 1000
        });
    }, [])
    return (
        <div className="p-projects">
            <h1 className="p-projects__title" data-aos={"flip-left"}><span className="p-projects__title-p" data-aos={"fade-right"}>P</span>rojects</h1>
            <div class="square-title" data-aos="zoom-in" data-aos-duration="2500"></div>
            <section className="p-projects__section">

                <article className="p-projects__article">
                    <img src={lucky} alt="" className="p-projects__img" data-aos="fade-right" />
                    <h3 className="p-projects__nameapp" data-aos="fade-up">Lucky App</h3>
                    <h5 className="p-projects__descapp" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">Pet Adoption App</h5>
                    <div className="p-projects__logo">
                        <img className="p-projects__logo-img" src={html5} alt="" />
                        <img className="p-projects__logo-img" src={react} alt="" />
                        <img className="p-projects__logo-img" src={sass} alt="" />
                    </div>
                </article>

                <article className="p-projects__article">
                    <img src={shop} alt="" className="p-projects__img" data-aos="fade-left" />
                    <h3 className="p-projects__nameapp" data-aos="fade-up">Shopeame!</h3>
                    <h5 className="p-projects__descapp" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500" >Web Shop App</h5>
                    <div className="p-projects__logo">
                        <img className="p-projects__logo-img" src={html5} alt="" />
                        <img className="p-projects__logo-img" src={angular} alt="" />
                        <img className="p-projects__logo-img" src={sass} alt="" />
                    </div>
                </article>

                <article className="p-projects__article">
                    <img src={got} alt="" className="p-projects__img" data-aos="fade-right" />
                    <h3 className="p-projects__nameapp" data-aos="fade-up">Game of thrones</h3>
                    <h5 className="p-projects__descapp" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500">App series</h5>
                    <div className="p-projects__logo">
                        <img className="p-projects__logo-img" src={html5} alt="" />
                        <img className="p-projects__logo-img" src={react} alt="" />
                        <img className="p-projects__logo-img" src={sass} alt="" />
                    </div>
                </article>

                <article className="p-projects__article">
                    <img src={play} alt="" className="p-projects__img" data-aos="fade-left" />
                    <h3 className="p-projects__nameapp" data-aos="fade-up">Time to Play</h3>
                    <h5 className="p-projects__descapp" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500" >Blog Web Videogames</h5>
                    <div className="p-projects__logo">
                        <img className="p-projects__logo-img" src={html5} alt="" />
                        <img className="p-projects__logo-img" src={angular} alt="" />
                        <img className="p-projects__logo-img" src={sass} alt="" />
                    </div>
                </article>

                <div class="square" data-aos="zoom-in-left"></div>

            </section>

        </div>
    )
}
