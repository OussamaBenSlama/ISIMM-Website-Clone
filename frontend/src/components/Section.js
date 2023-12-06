import React, { useState, useEffect } from 'react';
import '../styles/section.css';
import isimm1 from '../images/isimm_amine/isimm3.jpg';
import isimm2 from '../images/isimm_amine/isimm4.jpg';
import isimm3 from '../images/isimm_amine/isimm5.jpg';
import isimm4 from '../images/isimm_amine/isimm7.jpg';

export default function Section() {
  const images = [isimm1, isimm2, isimm3, isimm4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='home'>
      <div
        className='background'
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
      <h1>Innovation, Integrity, Excellence: 
        Your Journey Starts Here</h1>
        <div className='home_container'>
           
        </div>
      </div>
    </div>
  );
}
