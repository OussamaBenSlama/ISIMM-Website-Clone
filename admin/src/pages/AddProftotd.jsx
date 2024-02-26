import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import './styles/Addproftotd.css';

const AddProfToTD = () => {
  const location = useLocation();
  const { group } = location.state;
  const [enseignants, setEnseignants] = useState([]);
  const [selectedEnseignants, setSelectedEnseignants] = useState([]);

  useEffect(() => {
    const fetchEnseignants = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/profs/');
        const data = await response.json();
        setEnseignants(data);
      } catch (error) {
        console.error('Error fetching enseignants:', error);
      }
    };

    fetchEnseignants();
  }, []);

  const handleCheckboxChange = (enseignantId) => {
    setSelectedEnseignants((prevSelectedEnseignants) => {
      if (prevSelectedEnseignants.includes(enseignantId)) {
        return prevSelectedEnseignants.filter((id) => id !== enseignantId);
      } else {
        return [...prevSelectedEnseignants, enseignantId];
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/profs/add-enseignant-to-group/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          group_id: group.id,
          enseignant_ids: selectedEnseignants,
        }),
      });

      if (response.ok) {
        alert('Enseignants added to group successfully.');
      } else {
        const data = await response.json();
        console.error('Failed to add enseignants to group:', data.error);
      }
    } catch (error) {
      console.error('Error adding enseignants to group:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ width: '100%', flexBasis: '80%' }}>
        <Header />
        <div className='EmploiForm'>
        <form className='Form' onSubmit={handleSubmit}>
          <div className="centered-container">
            <div className="content">
              <div className="group-information">
                <h3 className='grouptitle'>Group Information:</h3>
                <p>Formation Name: {group.formation_name}</p>
                <p>Niveau: {group.niveau}</p>
                <p>Rank: {group.rank}</p>
              </div>

              <div className="professors-selection">
                <h3 className='grouptitle'>Select Professors:</h3>
                {enseignants.map((enseignant) => (
                  <div key={enseignant.id}>
                    
                    <label  id="checkbox-label" htmlFor={`enseignant-${enseignant.id}`}>
                    <input
                      type="checkbox"
                      id={`enseignant-${enseignant.id}`}
                      value={enseignant.id}
                      onChange={() => handleCheckboxChange(enseignant.id)}
                    />
                      {enseignant.fname} {enseignant.lname} - {enseignant.department_name}
                    </label>
                  </div>
                ))}
              </div>

              <input type="submit" value="Add Professors " id="button" />
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddProfToTD;
