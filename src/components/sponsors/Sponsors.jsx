import './sponsors.css'
import one from '../prize_section/images/1.png'
import two from '../prize_section/images/2.png'
import three from '../prize_section/images/3.png'
import four from '../prize_section/images/4.png'
import five from '../prize_section/images/5.jpg'
import six from '../prize_section/images/6.png'
import sev from '../prize_section/images/7.png'
import eight from '../prize_section/images/8.png'
import nine from '../prize_section/images/9.png'
import ten from '../prize_section/images/10.jpg'
import elev from '../prize_section/images/11.png'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Func(){
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow:1,
          slidesToScroll: 1
        }
        return (
          <div className='container-sponsor'>
          <>
          <div class="sponsors">
            <div class="sponsors-heading">
                <h1>Sponsors & Partners</h1>
            </div>
            <div class="interested">
                <h3>Interested in Sponsoring</h3>
                <button>Sponsor us</button>
            </div>

            <Carousel className='carousel'>
            {/* <Func {...settings}/> */}
                <div className='slider'>
                    <img className="slider-img" src={one}  />
                </div>
                <div>
                    <img className="slider-img" src={two} />
                </div>
                <div>
                    <img className="slider-img" src={three} />
                </div>
                <div>
                    <img className="slider-img" src={four} />
                </div>
                <div>
                    <img className="slider-img" src={five} />
                </div>
                <div>
                    <img className="slider-img" src={six} />
                </div>
                <div>
                    <img className="slider-img" src={sev} />
                </div>
                <div>
                    <img className="slider-img" src={eight}/>
                </div>
                <div>
                    <img className="slider-img" src={nine} />
                </div>
                <div>
                    <img className="slider-img" src={ten} />
                </div>
                <div>
                    <img className="slider-img" src={elev} />
                </div>
            </Carousel>
            </div>
            </>
            </div>
        );
  }
 