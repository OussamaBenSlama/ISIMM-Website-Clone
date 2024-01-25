import React, { useEffect, useState } from 'react';
import './styles/GroupesList.css';

const GroupesList = () => {
  const [formations, setFormations] = useState([]);
  const [currentFormation, setCurrentFormation] = useState(null);
  const [formData, setFormData] = useState({
    formation: "",
    niveau: "",
    rank: "1"
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
      console.log(formData)
  
      const response = await fetch('http://127.0.0.1:8000/api/add_group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      // console.log(postData)
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
  
  
  
  

  return (
    <div className='Groupes'>
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
      </div>
      <div className='GroupeList'>
        {groupes.map((item,index) => {
          return(
            <div key={index}>
              <p>{item.speciality_name}</p>
              <p>{item.level}</p>
              <p>TD : {item.id}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default GroupesList;
