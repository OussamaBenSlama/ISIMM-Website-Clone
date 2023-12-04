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
        speed: 3200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots:true,
         autoplaySpeed: 2400,
         arrows:true, // Set the autoplay speed in milliseconds
      };
  return (
    <div className='nouveaute'>
    <Slider {...settings}>
      <div className='actualite'>
        <div className='actualite_header'>
          <img src={im1} alt="Slide 1" />
        </div>
        <div className='actualite_description'>
          <span>Formation -  28 november 2023</span>
          <h3>Collaboration international</h3>
          <p>La collaboration fructueuse entre l’INSAT et l'Académie militaire de 
          Fondok Jedid se concrétise à travers un programme de formation novateur. 
          Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l'INSAT
          </p>
          <button>Lire plus</button>
        </div>
         
      </div>
      <div className='actualite'>
        <div className='actualite_header'>
          <img src={im1} alt="Slide 1" />
        </div>
        <div className='actualite_description'>
          <span>Formation -  28 november 2023</span>
          <h3>Collaboration international</h3>
          <p>La collaboration fructueuse entre l’INSAT et l'Académie militaire de 
          Fondok Jedid se concrétise à travers un programme de formation novateur. 
          Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l'INSAT
          </p>
          <button>Lire plus</button>
        </div>
         
      </div>
      <div className='actualite'>
        <div className='actualite_header'>
          <img src={im1} alt="Slide 1" />
        </div>
        <div className='actualite_description'>
          <span>Formation -  28 november 2023</span>
          <h3>Collaboration international</h3>
          <p>La collaboration fructueuse entre l’INSAT et l'Académie militaire de 
          Fondok Jedid se concrétise à travers un programme de formation novateur. 
          Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l'INSAT
          </p>
          <button>Lire plus</button>
        </div>
         
      </div>
      <div className='actualite'>
        <div className='actualite_header'>
          <img src={im1} alt="Slide 1" />
        </div>
        <div className='actualite_description'>
          <span>Formation -  28 november 2023</span>
          <h3>Collaboration international</h3>
          <p>La collaboration fructueuse entre l’INSAT et l'Académie militaire de 
          Fondok Jedid se concrétise à travers un programme de formation novateur. 
          Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l'INSAT
          </p>
          <button>Lire plus</button>
        </div>
         
      </div>
      <div className='actualite'>
        <div className='actualite_header'>
          <img src={im1} alt="Slide 1" />
        </div>
        <div className='actualite_description'>
          <span>Formation -  28 november 2023</span>
          <h3>Collaboration international</h3>
          <p>La collaboration fructueuse entre l’INSAT et l'Académie militaire de 
          Fondok Jedid se concrétise à travers un programme de formation novateur. 
          Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l'INSAT
          </p>
          <button>Lire plus</button>
        </div>
         
      </div>
     </Slider>
     
    </div>
  )
}
