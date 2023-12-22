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
  console.log(data);
  // save prof data
  const [formData, setFormData] = useState({
    id: '',
    cin: '',
    email:'',
    fname: '',
    lname: '',
    departement: null,
    cadre: '',
    // the rest of data will be passed blank and the prof will write it not the admin
    adresse: '',
    phoneNumber: '',
    datebirth: '',
    ImageProfil: null,
    password:'', // password = id
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
  
    // Validation
    if (!formData.id || !formData.cin || !formData.fname || !formData.lname || !formData.departement || !formData.cadre) {
      alert('Please fill in all required fields.');
      return;
    }
    formData.password = formData.id // set password = id
    console.log(formData); // inspect the data format
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
          <select name='speciality' value={formData.speciality} onChange={handleChange}>
            <option>--</option>
            {data?.map((item) => (
              <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
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
