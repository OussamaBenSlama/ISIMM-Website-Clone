import React , { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';  // Import Axios

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/nouveaute.css';

// Import your images
import im1 from '../images/im1.jpeg';
// import im2 from '../images/im2.jpeg';
// import im3 from '../images/im3.jpeg';
// import im4 from '../images/im4.jpeg';
// import im5 from '../images/im5.jpeg';

// const carouselData = [
//   {
//     image: im1,
//     date: '28 November 2023',
//     title: 'Collaboration international',
//     description: 'La collaboration fructueuse entre l’INSAT et l\'Académie militaire de Fondok Jedid se concrétise à travers un programme de formation novateur. Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l\'INSAT',
//   },
//   {
//     image: im1,
//     date: '28 November 2023',
//     title: 'Collaboration international',
//     description: 'La collaboration fructueuse entre l’INSAT et l\'Académie militaire de Fondok Jedid se concrétise à travers un programme de formation novateur. Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l\'INSAT',
//   },
//   {
//     image: im1,
//     date: '28 November 2023',
//     title: 'Collaboration international',
//     description: 'La collaboration fructueuse entre l’INSAT et l\'Académie militaire de Fondok Jedid se concrétise à travers un programme de formation novateur. Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l\'INSAT',
//   },
//   {
//     image: im1,
//     date: '28 November 2023',
//     title: 'Collaboration international',
//     description: 'La collaboration fructueuse entre l’INSAT et l\'Académie militaire de Fondok Jedid se concrétise à travers un programme de formation novateur. Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l\'INSAT',
//   },
//   {
//     image: im1,
//     date: '28 November 2023',
//     title: 'Collaboration international',
//     description: 'La collaboration fructueuse entre l’INSAT et l\'Académie militaire de Fondok Jedid se concrétise à travers un programme de formation novateur. Ce dernier, dirigé par Monsieur Amir DAMERGI, enseignant-chercheur à l\'INSAT',
//   },
//  ];

export default function Nouveaute() {


  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/actualites/')  // Use Axios for the HTTP request
      .then(response => setCarouselData(response.data))
      .catch(error => console.error('Error fetching actualites:', error));
  }, []);

  const settings = {
    infinite: true,
    speed: 3200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2400,
    arrows: false, // Set the autoplay speed in milliseconds
  };

  return (
    <div className='nouveaute'>
      <h2>Les Actualites</h2>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className='actualite'>
            <div className='actualite_header'>
              <img src={item.image} />
            </div>
            <div className='actualite_description'>
              <span>{item.date}</span>
              <h3>{item.category}</h3>
              <p>{item.description.slice(0, 200)}...</p>            
                <button className="button button-primary">
                &gt;  Lire plus
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
