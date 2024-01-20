import React, { useEffect, useState } from 'react'
import './Actualite.css'
import axios from 'axios';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';




const Actualites = () => {
  const navigate = useNavigate()
    const [carouselData, setCarouselData] = useState([]);
  

  useEffect(() => {
    const fetchAllData = async () => {
        try {
            const [tousResponse, etudiantResponse, etudiantEnseignantResponse] = await Promise.all([
                axios.get('http://127.0.0.1:8000/api/actualites/'),
                axios.get('http://127.0.0.1:8000/api/actualites/etudiant/'),
                axios.get('http://127.0.0.1:8000/api/actualites/etudiant-enseignant/')
            ]);

            // Extract data from responses
            const tousData = tousResponse.data;
            const etudiantData = etudiantResponse.data;
            const etudiantEnseignantData = etudiantEnseignantResponse.data;
 
            const combinedData = [...tousData, ...etudiantData, ...etudiantEnseignantData];
            console.log(combinedData)
             
            setCarouselData(combinedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchAllData();
}, []);

  const goToAddActualites = ()=> {
    navigate('/actualites/add')
  }
  const backendURL = 'http://127.0.0.1:8000';
  return (
    <div className='Actualites-container'>
         
        <div className='Actualites-hub'>
            {carouselData.map((item, index) => (
            <div key={index} className='actualite'>
                <div className='actualite_header'>
                <img src={`${backendURL}${item.image}`} />
                </div>
                <div className='actualite_description'>
                    <span>{item.category} - {item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description.slice(0, 200)}...</p> 
                           
                
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Actualites