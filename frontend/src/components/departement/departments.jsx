import React, { useState, useEffect } from 'react';
 import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/departements.css';
import { useNavigate } from 'react-router-dom';
import dep_info from '../../images/dep_info.jpg';
import dep_tech from '../../images/dep_tech.jpg';
import dep_math from '../../images/dep_math.jpeg';

export default function Nouveaute() {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/departments/')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching actualites:', error));
  }, []);

  const backendURL = 'http://127.0.0.1:8000';

  const getImageByIndex = (title) => {
     if (title === 'Informatique') {
        return dep_info
      } else if (title === 'Technologie') {
        return dep_tech
      } else if (title === 'Mathematique') {
        return dep_math
      }
      
    }
  

  const handleDepartementClick = (title) => {
     if (title === 'Informatique') {
      navigate('/departement/informatique');
    } else if (title === 'Technologie') {
      navigate('/departement/technologique');
    } else if (title === 'Mathematique') {
      navigate('/departement/mathematique');
    }
  };

  return (
    <div className='dep_container'>
      <p style={{ margin: '50px', color: '#061e6e', fontSize: '1.2rem' }}>
        " L’Institut s’articule autour de trois départements ; Informatique, Mathématiques et Technologie. Actuellement le nombre d’enseignants permanents est de 26, 18 et 27 respectivement. Les enseignements offerts par ces départements pour l’année 2011-2012 sont donnés par le tableau ci-après. "
      </p>
      <div className='departements'>
        {Data.map((item, index) => (
          <div key={index} className='departement' onClick={() => handleDepartementClick(item.name)}>
            <div className='departement_header'>
            <img src={getImageByIndex(item.name)} alt={`Departement ${index + 1}`} />
            </div>
            <div className='departement_description'>
              <span style={{ fontWeight: 'bold', color: 'rgb(75, 74, 74)', fontSize: '1.2rem' }}>
                Departement: {item.name}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 230)}...</p>
              <button
                className='button button-primary'
                
              >
                Lire plus <FaArrowRight style={{ paddingLeft: '0.5rem' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
