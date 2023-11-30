import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/partenaire.css';  
 





export default function Partenaire() {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
         autoplaySpeed: 2700,
         arrows:false,
       };
  return (
    <div className='partenaire'>
        <h2>Les partenaires</h2>
    <Slider {...settings}>
      <div>  orange </div>
      <div>  Actia </div>
      <div> Sagemcom </div>
      <div> Instadeep</div>
      <div>Sartex </div>
      <div>InsoDev </div>
      <div>ETA </div>
      <div>Biat </div>
      <div>GCER </div>
      <div>PMT </div>
      <div>Sotuba </div>

     </Slider>
     </div>
  )
}
