import React, { useEffect, useState } from 'react';
import '../Form.css';

const StudentForm = () => {
  // fetch data for formation :
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/formation');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // save student data
  const [formData, setFormData] = useState({
    id: '',
    cin: '',
    email:'',
    fname: '',
    lname: '',
    speciality: '',
    level: '', // here i save all the formationItem not only its name , i think in backend will be relation ManyToOne with class Formation
    // it will be foreign key , search for it and note that the class student will be in the app studentsApp and not in mainApp as Formation , take care
    // the rest of data will be passed blank and the student will write it not the admin
    adresse: '',
    phoneNumber: '',
    datebirth: '',
    parentfname: '',
    parentlname: '',
    ImageProfil: null,
    groupTD: null,
    codePostal: '',
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
    if (!formData.id || !formData.cin || !formData.fname || !formData.lname || !formData.speciality || !formData.level) {
      alert('Please fill in all required fields.');
      return;
    }
  
    const specialityData = JSON.parse(formData.speciality);
  
    // Check if speciality category is "master" and set valid levels
    if (specialityData.category === "Mastere" || specialityData.category === "Cycle préparatoire integré") {
      if (formData.level == '3') {
        alert(' valid levels are 1 or 2.');
        return;
      }
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
          <label>Speciality :</label>
          <select name='speciality' value={formData.speciality} onChange={handleChange}>
            <option>--</option>
            {data?.map((item) => (
              <option key={item.id} value={JSON.stringify(item)}>{item.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Level of studies :</label>
          <select name='level' value={formData.level} onChange={handleChange}>
            <option>--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
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

export default StudentForm;
