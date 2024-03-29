import React, { useEffect, useState } from 'react';
import './styles/GroupesList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const GroupesList = ({addGrp,setAddGrp}) => {
  const [formations, setFormations] = useState([]);
  const [currentFormation, setCurrentFormation] = useState(null);

  const [loading, setLoading] = useState(false)

  

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    formation: "",
    niveau: "",
    rank: "auto"
  });
  const [groupes, setGroupes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch formations
        const response = await fetch('http://127.0.0.1:8000/api/formation');
        const result = await response.json();
        setFormations(result);

        const res = await fetch('http://127.0.0.1:8000/api/groupes/');
        const resulte = await res.json();
        setGroupes(resulte)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(groupes)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const selectedFormation = formations.find((item) => item.id === parseInt(value));
    setCurrentFormation(selectedFormation);

  };

  const handleSubmit = async () => {
    try {
      if (!formData.formation || !formData.niveau) {
        alert('Please select both Formation and Niveau before submitting.');
        return;
      }

      
      const specialityData = JSON.parse(formData.formation);
      const specialityPk = specialityData.id;
      
      // Update the formData to send the speciality as its primary key
      setFormData((prevData) => ({
        ...prevData,
        formation: specialityPk,
      }));
  
      // Correct the filtering and counting of groupes with the same formation
      formData.rank = groupes.filter((item) => item.formation == formData.formation && item.niveau == formData.niveau).length + 1;

      console.log(formData)
      const response = await fetch('http://127.0.0.1:8000/api/add_group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      window.location.reload();
      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        const responseData = await response.json();
        console.error('Error submitting form:', responseData);
        alert('Error submitting form. Please check the console for details.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error during form submission. Please check the console for details.');
    }
  };
  
  
  
  const handleAffecte = async () => {

    try {
      setLoading(true)
      const response = await fetch('http://127.0.0.1:8000/students/affect/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          // Add any request data here
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      setLoading(false)
      // If request is successful, reset form state or perform any other actions
      alert('Request successful');
    } catch (error) {
    } finally {
    }
  };
  
  const deleteGroupe = async (item) => {
    console.log(item)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/delete_group/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: item.id,
          formation: item.formation,
          level: item.niveau
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete group');
      }
  
      // If deletion is successful, fetch updated group list
      const res = await fetch('http://127.0.0.1:8000/api/groupes/');
      const resulte = await res.json();
      setGroupes(resulte);
  
      // If request is successful, reset form state or perform any other actions
      alert('Group deleted successfully');
    } catch (error) {
      console.error('Error deleting group:', error);
      alert('Error deleting group. Please check the console for details.');
    }
  };
  const gotoAddEmploi = (item) => {
    navigate('/td/emploi/', { state: { item: item } });
};
  const gotoAddProf = (item ) => {
    navigate('/td/prof/' ,  { state: { group: item } });
  };
  return (
    <div className='Groupes'>
      {addGrp ? 
      (
        <div className='GroupeForm'>
        <div>
          <label>Formation :</label> <br />
          <select name='formation' value={formData.speciality} onChange={handleChange}>
            <option value="">select formation</option>
            {formations?.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>
          <br />
          <label>Niveau :</label>
          <br />
          <select name="niveau" onChange={handleChange} value={formData.niveau}>
            <option value=''>Select Niveau</option>
            {currentFormation &&
              (currentFormation.category === "Cycle préparatoire integré" ||
                currentFormation.category === "Mastere") ? (
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </>
              ) : (
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </>
              )}
          </select>
          <br />
          <label>Groupe :</label> <br />
          <input type='text' readOnly value={formData.rank} />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='submit' value="Submit" id='button' onClick={handleSubmit} />
          </div>
        </div>
        {loading ? 
        (
          <p id='loading'>Loading ... please wait</p>
        ):
        (
          null
        )}
      </div>
      ) :
      (
        null 
      )}
      <div className='GroupeList'>
        <div className='groupe-item' id='groupe-item-header'>
          <p>Section</p>
          <p>Niveau</p>
          <p>TD </p>
          <p>edit</p>
          <p>Ajouter Prof</p>
          <p>delete</p>
        </div>
        {groupes.map((item,index) => {
          return(
            <div key={index} className='groupe-item'>
              <p>{item.formation_name}</p>
              <p>{item.niveau}</p>
              <p>{item.rank}</p>
              <p onClick={()=> gotoAddEmploi(item)}><span id='edit-icon'><FontAwesomeIcon cursor='pointer' icon={faEdit} color='white'/></span></p>
              <p onClick={()=> gotoAddProf(item)}><span id='add-icon'><FontAwesomeIcon cursor='pointer' icon={faPlusCircle} color='white'/></span></p>
              <p onClick={()=> deleteGroupe(item)}><span><FontAwesomeIcon cursor='pointer' icon={faTrash} color='white' /></span></p>
            </div>
          )
        })}
        <button onClick={handleAffecte} id='button_affect'>affecte student to their td</button>

      </div>

    </div>
  );
};

export default GroupesList;
