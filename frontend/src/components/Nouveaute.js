import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/nouveaute.css';  
import im1 from '../images/im1.jpeg';
import im2 from '../images/im2.jpeg';
import im3 from '../images/im3.jpeg';
import im4 from '../images/im4.jpeg';
import im5 from '../images/im5.jpeg';






export default function Nouveaute() {
    const settings = {
          infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
         autoplaySpeed: 2400,
         arrows:true, // Set the autoplay speed in milliseconds
      };
  return (
    <div className='nouveaute'>
        <h2>Les nouveautes</h2>
    <Slider {...settings}>
      <div>
        <img src={im1} alt="Slide 1" />
        <p>jkgdddddfs,cvlzmierurjfdbg</p>
         
      </div>
      <div>
        <img src={im2} alt="Slide 2" />
        <p>jkfdgm:df;,vilreutjlsjkdfrhieout</p>
         
      </div>
      <div>
        <img src={im3} alt="Slide 3" />
        <p>jkldftuoeirofjpskdhapiouyerkjfa</p>
         
      </div>
      <div>
        <img src={im4} alt="Slide 3" />
        <p>iredougdfvjkdljte_o'rutjkrfhozuiert</p>
         
      </div>
      <div>
        <img src={im5} alt="Slide 3" />
        <p>jhdrfgiturejkgfdhgiuerhgjkld</p>
         
      </div>
     </Slider>
     <button className='actualite'>TOUTES LES ACTUALITES</button>
    </div>
  )
}
