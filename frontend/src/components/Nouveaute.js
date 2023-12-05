import React , { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';  // Import Axios
import { FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/nouveaute.css';


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
  const backendURL = 'http://127.0.0.1:8000';
  
  return (
    <div className='nouveaute'>
      <h2>Les Actualites</h2>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className='actualite'>
            <div className='actualite_header'>
              <img src={`${backendURL}${item.image}`} />
            </div>
            <div className='actualite_description'>
              <span>{item.category} - {item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 200)}...</p>            
                <button className="button button-primary">
                  Lire plus <FaArrowRight style={{paddingLeft:'0.5rem'}}/>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
