import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './MenuNav.scss';
import { TimelineMax, Expo, gsap, Power3 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'; 
import $ from "jquery";

export default function MenuNav() {





    useEffect(() => {
        gsap.registerPlugin(CSSPlugin)
        var t1 = new TimelineMax({ paused: true });

        t1.to(".one", 0.8, {
            y: 6,
            rotation: 45,
            ease: Expo.easeInOut
        });
        t1.to(".two", 0.8, {
            y: -6,
            rotation: -45,
            ease: Expo.easeInOut,
            delay: -0.8
        });

        t1.to(".menu", 2, {
            top: "0%",
            ease: Expo.easeInOut,
            delay: -2
        });

        t1.staggerFrom(".menu ul li", 2, { x: -200, opacity: 0, ease: Expo.easeOut }, 0.3);

        t1.reverse();
        $(document).on("click", ".toggle-btn", function () {
            t1.reversed(!t1.reversed());
        });
        $(document).on("click", "a", function () {
            t1.reversed(!t1.reversed());
        });


    }, [])


    return (

        <div>
            <div className="toggle-btn">
                <span className="one"></span>
                <span className="two"></span>
            </div>

            <div className="menu">
                <div className="data">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
