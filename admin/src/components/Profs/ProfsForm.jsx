import React, { useEffect, useState } from 'react';
import '../Form.css';

const ProfsForm = () => {
  // fetch data for departements :
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/departments/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // save prof data
  const [formData, setFormData] = useState({
    id: '',
    cin: '',
    email:'',
    fname: '',
    lname: '',
    department: null,
    cadre: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(formData)
    // Validation
    if (!formData.id || !formData.cin || !formData.fname || !formData.lname || !formData.department || !formData.cadre) {
      alert('Please fill in all required fields.');
      return;
    }
    formData.password = formData.id // set password = id

    const departmentData = JSON.parse(formData.department);


  
    // Extract the primary key of the selected formation
    const departmentPk = departmentData.id;
    // Update the formData to send the speciality as its primary key
    setFormData((prevData) => ({
      ...prevData,
      department: departmentPk,
    }));
    try {
    // Make a POST request to the backend
    const response = await fetch('http://127.0.0.1:8000/profs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Student created successfully');
      // Optionally, you can reset the form data here
      setFormData({
        id: '',
        cin: '',
        email: '',
        fname: '',
        lname: '',
        speciality: '',
        level: '',
      });
    } else {
      console.log(response)
      alert('Failed to create student. Please try again.');
    }
  } catch (error) {
    console.error('Error creating student:', error);
    alert('An error occurred. Please try again.');
  }
  };
  
  

  return (
    <div className='ContainerForm'>
      <form onSubmit={handleSubmit} className='Form' method='post'>
        <div>
          <label>Id :</label>
          <input type='text' name='id' value={formData.id} onChange={handleChange} />
        </div>
        <div>
          <label>Cin :</label>
          <input type='text' name='cin' value={formData.cin} onChange={handleChange} />
        </div>
        <div>
          <label>Email :</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>First Name :</label>
          <input type='text' name='fname' value={formData.fname} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name :</label>
          <input type='text' name='lname' value={formData.lname} onChange={handleChange} />
        </div>
        <div>
          <label>Departement :</label>
          <select name='department' value={formData.department} onChange={handleChange}>
            <option>--</option>
            {data?.map((item) => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Cadre :</label>
          <select name='cadre' value={formData.cadre} onChange={handleChange}>
            <option>--</option>
            <option>ASSISTANT</option>
            <option>CONTRACTUEL</option>
            <option>MAÎTRE ASSISTANT</option>
            <option>PROFESSEUR</option>
            <option>PROFESSEUR TRONC COMMUN</option>
            <option>MAÎTRE DES CONFÉRENCES</option>
          </select>
        </div>
        <br />
        <div>
          <input type='submit' value='Submit' id='button' />
        </div>
      </form>
    </div>
  );
};

export default ProfsForm;
