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
        <h1 className="p-about__title" data-aos={"flip-left"}><span className="p-about__title-p" data-aos={"fade-right"}>A</span>bout Me</h1>
            <div class="square-about-title" data-aos="zoom-in" data-aos-duration="2500"></div>
            <img className="p-about__imgme" src={me} alt="" data-aos="fade-right"/>
        <div class="square-about" data-aos="zoom-in-right"></div>
        <div className="p-about__desc">
            <p className="p-about__desc-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum eligendi mollitia sapiente blanditiis, adipisci vero aliquam ad. Consectetur placeat dignissimos neque amet suscipit cumque quidem vel iure possimus unde?Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, provident non. Vel perspiciatis, repudiandae minima corporis qui deserunt ipsam asperiores aliquam officia nemo, eligendi, harum ipsa? Nemo quis hic numquam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus suscipit odit dolorum. Culpa esse rerum officiis temporibus rem atque fugiat et, tenetur quis iste molestiae voluptas accusantium corrupti eos omnis.</p>
        </div>
        
        </div>
    )
}
