import React from 'react';
import './styles_prize.css';

const Sponsors = () => {
  return (
    <>
      <div class="sponsors">
        <div class="sponsors-heading">
            <h1>Sponsors & Partners</h1>
        </div>
        <div class="interested">
            <h3>Interested in Sponsoring</h3>
            <button>Sponsor us</button>
        </div>

        <div class="client-area">
            <div class="container">
                <div class="logo-area slinder">
                    <div class="slide"><img src="images/1.png" width="350px" height="150px" alt="Sawo Labs"/></div>
                    <div class="slide"><img src="images/2.png" width="350px" height="150px" alt="Devfolio"/></div>
                    <div class="slide"><img src="images/3.png" width="350px" height="150px" alt="Coding Ninjas"/></div>
                    <div class="slide"><img src="images/4.png" width="350px" height="150px" alt="File coin"/></div>
                    <div class="slide"><img src="images/5.jpg" width="350px" height="150px" alt="Tezos"/></div>
                    <div class="slide"><img src="images/6.png" width="350px" height="150px" alt="Egghead.io"/></div>
                    <div class="slide"><img src="images/7.png" width="350px" height="150px" alt="taskade"/></div>
                    <div class="slide"><img src="images/8.png" width="350px" height="150px" alt="Polygon"/></div>
                    <div class="slide"/><img src="images/9.png" width="350px" height="150px" alt="Axure"/></div>
                    <div class="slide"/><img src="images/10.jpg" width="350px" height="150px" alt="Codersmind"/></div>
                    <div class="slide"><img src="images/11.png" width="350px" height="150px" alt="Cscodershub"/></div>
                </div>
            </div>

            
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
    <script>
        $(document).ready(function(){
            $('.logo-area').slick({
                slidesToShow:6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings:{
                        slidesToShow: 4
                    }
                },{
                    breakpoint: 520,
                    settings:{
                        slidesToShow: 3
                    }
                }]
            })
        })
    </script>
    <script src="scripts.js"></script>
      </> 
  )
} 


export default Sponsors;