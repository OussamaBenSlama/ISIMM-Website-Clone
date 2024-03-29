import React, { useEffect, useState } from 'react'
import './Actualites.css'
import axios from 'axios';
import Add from '../buttons/Add';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Actualites = () => {
  const navigate = useNavigate()
    const [carouselData, setCarouselData] = useState([]);
  const deleteActualites = async (id) => {
    const userConfirmed = window.confirm('Are you sure you want to delete this Actualite?');
      
        if (userConfirmed) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/actualites/${id}/`);
            setCarouselData((prevData) => prevData.filter((item) => item.id !== id)); 
          } catch (error) {
            console.error('Error deleting item:', error);
          }
        } else {
          // User clicked "Cancel" or closed the alert
          console.log('Deletion canceled by the user');
        }
  }

  useEffect(() => {
    const fetchAllData = async () => {
        try {
            const [tousResponse, etudiantResponse, enseignantResponse, etudiantEnseignantResponse] = await Promise.all([
                axios.get('http://127.0.0.1:8000/api/actualites/'),
                axios.get('http://127.0.0.1:8000/api/actualites/etudiant/'),
                axios.get('http://127.0.0.1:8000/api/actualites/enseignant/'),
                axios.get('http://127.0.0.1:8000/api/actualites/etudiant-enseignant/')
            ]);

             const tousData = tousResponse.data;
            const etudiantData = etudiantResponse.data;
            const enseignantData = enseignantResponse.data;
            const etudiantEnseignantData = etudiantEnseignantResponse.data;

            
            const combinedData = [...tousData, ...etudiantData, ...enseignantData, ...etudiantEnseignantData];
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
        <div className='att_header'>
            <p>Actualites</p>
            <button onClick={goToAddActualites}>
                <FontAwesomeIcon icon={faPlusCircle} color='white' style={{marginRight:'5px'}}/>
                Add actualite
            </button>
       </div>
        <div className='Actualites-hub'>
            {carouselData.map((item, index) => (
            <div key={index} className='actualite'>
                <div className='actualite_header'>
                <img src={`${backendURL}${item.image}`} />
                </div>
                <div className='actualite_description'>
                    <span>{item.category} - {item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description.slice(0, 180)}...</p> 
                    <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
                        <button style={{backgroundColor:'white' ,color:'#13286b'}} className="button button-primary">Edit
                        <FontAwesomeIcon icon={faEdit} style={{paddingLeft:'0.5rem'}} />
                        </button>
                        <button onClick={() => deleteActualites(item.id)} style={{backgroundColor:'white' ,color:'rgb(200, 26, 26)'}} className="button button-primary">Delete
                        <FontAwesomeIcon icon={faTrash} style={{paddingLeft:'0.5rem'}} />
                        </button>
                    </div>           
                
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Actualites