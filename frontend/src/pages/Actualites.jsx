import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/nouveaute.css';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/home/Navbar'

const Actualites = () => {
  const location = useLocation();
  const { carouselData } = location.state;
  console.log(carouselData)
  const data = carouselData
  const backendURL = 'http://127.0.0.1:8000';

  return (
    <div>
        <Navbar/>
        <div className='nouveaute_list' style={{ display: 'flex', flexWrap: 'wrap' , justifyContent:'center', alignItems:'center',marginTop:'50px'}}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
            <div key={index} className='actualite'>
                <div className='actualite_header'>
                <img src={`${backendURL}${item.image}`} alt={`Image for ${item.title}`} />
                </div>
                <div className='actualite_description'>
                <span>{item.category} - {item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 180)}...</p>
                <button className="button button-primary">
                    Lire plus <FaArrowRight style={{ paddingLeft: '0.5rem' }} />
                </button>
                </div>
            </div>
            ))
        ) : (
            <p>No data available</p>
        )}
        </div>
    </div>
  );
};

export default Actualites;
