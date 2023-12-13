import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/partenaire.css';  
 
import actia from '../images/Partenaire/actia.jpeg';
import ETA from '../images/Partenaire/ETA.jpeg';
import GCER from '../images/Partenaire/GCER.jpeg';
import InsoDev from '../images/Partenaire/InsoDev.png';
import Instadeep from '../images/Partenaire/instadeep.png';
 import sagemcom from '../images/Partenaire/sagemcom.png';
import sartex from '../images/Partenaire/sartex.png';






export default function Partenaire() {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
         autoplaySpeed: 2700,
         arrows:false,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
       };
 // Array of images
 const images = [actia, ETA, GCER, InsoDev, Instadeep , sagemcom, sartex];

 return (
     <div className='partenaire'>
         <h2 style={{margin:'50px'}}>Les partenaires</h2>
         <Slider {...settings} className="custom-slider">
            {images.map((image, index) => (
              <div key={index} style={{marginLeft:'20px' , width:'15%'}}>
                <img src={image} alt={`Partenaire ${index + 1}`} />
              </div>
            ))}
        </Slider>
     </div>
 );
}